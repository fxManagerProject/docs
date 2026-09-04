$ErrorActionPreference = 'Stop'

$Url = 'https://github.com/fxManagerProject/cli-installer/releases/latest/download/fxmanager-installer-windows-amd64.exe'
$OutputFile = 'fx-installer.exe'

Write-Host "Downloading fx-installer..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $Url -OutFile $OutputFile

Write-Host "Running installer..." -ForegroundColor Green
Start-Process -FilePath ".\$OutputFile" -Wait
