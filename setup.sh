#!/bin/sh
# One-time setup for ~/Desktop/nalviduro. Run from inside the folder: sh setup.sh
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
PA="$HOME/Desktop/PA"

# 1. git
if [ ! -d "$HERE/.git" ]; then
  git -C "$HERE" init -b main
  git -C "$HERE" add -A
  git -C "$HERE" commit -m "nalviduro.com: scaffold (rules, offer copy, case studies, static site) — 2026-11-02"
  echo "git initialised. Create the GitHub repo nalviduro1/nalviduro.com, then:"
  echo "  git -C $HERE remote add origin git@github.com:nalviduro1/nalviduro.com.git && git -C $HERE push -u origin main"
fi

# 2. PA symlink + brief + log (idempotent)
[ -e "$PA/nalviduro" ] || ln -s "$HERE" "$PA/nalviduro"
mkdir -p "$PA/briefs" "$PA/log"
[ -e "$PA/briefs/nalviduro.md" ] || cp "$HERE/pa-additions/briefs/nalviduro.md" "$PA/briefs/nalviduro.md"
cat "$HERE/pa-additions/log_2026-11-02.md" >> "$PA/log/2026-11-02.md"
echo
echo "Paste pa-additions/DECISIONS_draft.md into $PA/DECISIONS.md (numbers PA-32..35 — check the last used number first)."
echo "Then preview the site:  open $HERE/site/index.html"
