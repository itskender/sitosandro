#!/bin/bash

# Esci in caso di errore
set -e

# Verifica se siamo in una directory git
if [ ! -d .git ]; then
  echo "❌ Questa directory non è un repository Git."
  exit 1
fi

# Verifica che git-filter-repo sia installato
if ! command -v git-filter-repo &> /dev/null; then
  echo "❌ 'git-filter-repo' non è installato."
  echo "Installa con: brew install git-filter-repo oppure sudo apt install 
git-filter-repo"
  exit 1
fi

# Conferma all'utente
echo "⚠️  ATTENZIONE: Questo script eliminerà tutti i commit più vecchi di 
2 anni!"
read -p "Sei sicuro di voler continuare? (s/N) " conferma
if [[ "$conferma" != "s" && "$conferma" != "S" ]]; then
  echo "❌ Operazione annullata."
  exit 0
fi

# Avvia filtro
echo "🔧 Pulizia in corso..."
git filter-repo --commit-callback '
import datetime
cutoff = datetime.datetime.now() - datetime.timedelta(days=730)
if commit.author_date < cutoff.timestamp():
    commit.skip()
'

# Pulizia Git
echo "🧹 Pulizia finale..."
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Mostra dimensione finale
echo "✅ Operazione completata!"
echo -n "📦 Dimensione attuale del repository: "
du -sh .git

