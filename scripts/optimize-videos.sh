#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
media="$root/public/media"
tmp="$root/.tmp-video"
mkdir -p "$tmp"

encode() {
  local src="$1"
  local name
  name="$(basename "$src")"
  local out="$tmp/$name"
  echo "encoding $name"
  ffmpeg -y -hide_banner -loglevel error -i "$src" \
    -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
    -c:v libx264 -preset medium -crf 28 -pix_fmt yuv420p \
    -c:a aac -b:a 96k -ac 2 \
    -movflags +faststart \
    "$out"
  local before after
  before=$(wc -c < "$src")
  after=$(wc -c < "$out")
  echo "  $(basename "$src"): $before -> $after bytes"
  if [ "$after" -lt "$before" ]; then
    mv "$out" "$src"
    echo "  replaced"
  else
    rm -f "$out"
    echo "  kept original"
  fi
}

for f in "$media"/video2.mp4 "$media"/video3.mp4 "$media"/video4.mp4 "$media"/video5.mp4; do
  encode "$f"
done
rmdir "$tmp" 2>/dev/null || true
