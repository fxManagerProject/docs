import { NextResponse } from 'next/server';

const SCRIPT_CONTENT = `#!/bin/sh
set -e

URL="https://github.com/fxManagerProject/cli-installer/releases/latest/download/fxmanager-installer-linux-amd64"
OUTPUT="fx-installer"

echo "Downloading fx-installer..."
curl -fsSL "$URL" -o "$OUTPUT"

chmod +x "$OUTPUT"

echo "Running installer..."
./"$OUTPUT"
`;

export async function GET() {
  return new NextResponse(SCRIPT_CONTENT, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
