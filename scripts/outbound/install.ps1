# Installation unique
Set-Location $PSScriptRoot
Write-Host "Installation outbound Progesti..." -ForegroundColor Cyan
python --version
if ($LASTEXITCODE -ne 0) { throw "Installez Python 3.10+ depuis https://python.org" }
pip install -r requirements.txt
Write-Host ""
Write-Host "OK. Lancez votre session avec :" -ForegroundColor Green
Write-Host "  Double-clic sur APPELER.bat" -ForegroundColor Yellow
Write-Host "  ou: python prospects.py call" -ForegroundColor Yellow
Write-Host ""
Write-Host "Guide: QUICKSTART.md" -ForegroundColor Gray
