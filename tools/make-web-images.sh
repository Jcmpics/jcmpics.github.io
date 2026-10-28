#!/bin/sh
# Makes fast-loading copies of every photo in ./photos (originals are never touched).
#   photos/web/<path>.jpg   - max 1600px, used in the lightbox and hero
#   photos/thumb/<path>.jpg - max 720px, used in the gallery grid
# Subfolders are mirrored, e.g. photos/portfolio/a.jpg -> photos/web/portfolio/a.jpg
# Uses macOS's built-in `sips`. Run from the project folder:  sh tools/make-web-images.sh
cd "$(dirname "$0")/.." || exit 1
find photos -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) \
  -not -path 'photos/web/*' -not -path 'photos/thumb/*' | while read -r f; do
  rel="${f#photos/}"; rel="${rel%.*}.jpg"
  [ "photos/web/$rel" -nt "$f" ] && [ "photos/thumb/$rel" -nt "$f" ] && continue
  mkdir -p "$(dirname "photos/web/$rel")" "$(dirname "photos/thumb/$rel")"
  sips -s format jpeg -s formatOptions 78 -Z 1600 "$f" --out "photos/web/$rel" >/dev/null
  sips -s format jpeg -s formatOptions 70 -Z 720 "$f" --out "photos/thumb/$rel" >/dev/null
  # already-small JPEGs can grow when re-saved; keep the original bytes in that case
  case "$f" in *.jpg|*.jpeg|*.JPG|*.JPEG)
    [ "$(wc -c < "photos/web/$rel")" -gt "$(wc -c < "$f")" ] && cp "$f" "photos/web/$rel";;
  esac
  echo "made web + thumb for $rel"
done
