import { NextResponse } from 'next/server';

const SCRIPT_CONTENT = `$ErrorActionPreference = 'Stop'

$Url = 'https://github.com/fxManagerProject/cli-installer/releases/latest/download/fxmanager-installer-windows-amd64.exe'
$OutputFile = 'fx-installer.exe'

Write-Host "Downloading fx-installer..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $Url -OutFile $OutputFile

Write-Host "Running installer..." -ForegroundColor Green
Start-Process -FilePath ".\\$OutputFile" -Wait
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
