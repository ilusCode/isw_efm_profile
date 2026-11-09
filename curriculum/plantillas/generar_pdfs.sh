#!/usr/bin/env bash
# Genera los 4 PDF del CV a partir de las plantillas HTML de esta carpeta.
# Uso: ./curriculum/plantillas/generar_pdfs.sh   (requiere Google Chrome instalado)
# Los PDF quedan en curriculum/pdf/ y se copian a landing/assets/cv/ si existe.
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="${1:-$DIR/../pdf}"
LANDING="$DIR/../../landing/assets/cv"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
mkdir -p "$OUT"
OUT="$(cd "$OUT" && pwd)"

generar() {
  local html="$1" pdf="$2"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=5000 \
    --print-to-pdf="$OUT/$pdf" "file://$DIR/$html" 2>/dev/null
  echo "✓ $OUT/$pdf"
}

generar cv_es_diseno.html CV_Eduardo_Fernandez_Diseno.pdf
generar cv_es_ats.html    CV_Eduardo_Fernandez.pdf
generar cv_en_diseno.html Resume_Eduardo_Fernandez_EN.pdf
generar cv_en_ats.html    Resume_Eduardo_Fernandez_EN_ATS.pdf

if [ -d "$LANDING" ]; then
  cp "$OUT"/*.pdf "$LANDING"/
  LANDING_DIR="$(cd "$DIR/../../landing" && pwd)"
  echo "✓ Copiados a landing/assets/cv"
  echo "  Para publicarlos: cd \"$LANDING_DIR\" && vercel deploy --prod"
fi
