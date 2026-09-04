#!/bin/sh
set -e

URL="https://github.com/fxManagerProject/cli-installer/releases/latest/download/fxmanager-installer-linux-amd64"
OUTPUT="fx-installer"

echo "Downloading fx-installer..."
curl -fsSL "$URL" -o "$OUTPUT"

chmod +x "$OUTPUT"

echo "Running installer..."
./"$OUTPUT"
