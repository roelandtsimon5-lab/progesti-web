# Pipeline outbound Progesti
# Usage : .\run.ps1 idf | all | enrich | help

param(
    [Parameter(Position = 0)]
    [ValidateSet("idf", "metropoles", "france", "all", "enrich", "dashboard", "call", "help")]
    [string]$Command = "help",

    [int]$Limit = 0,
    [switch]$Resume
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

function Ensure-Deps {
    if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
        Write-Error "Python introuvable. Installez Python 3.10+ depuis python.org"
    }
    pip install -r requirements.txt -q
}

function Invoke-Pipeline {
    param([string[]]$Args)
    python pipeline.py @Args
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

$extra = @()
if ($Limit -gt 0) { $extra += "--limit"; $extra += $Limit }
if ($Resume) { $extra += "--resume" }

switch ($Command) {
    "idf" {
        Ensure-Deps
        Write-Host "=== IDF : extraction + enrichissement + Excel ===" -ForegroundColor Cyan
        Invoke-Pipeline @("idf", "--skip-download") + $extra
    }
    "metropoles" {
        Ensure-Deps
        Write-Host "=== Metropoles : extraction + enrichissement ===" -ForegroundColor Cyan
        Invoke-Pipeline @("metropoles", "--skip-download") + $extra
    }
    "france" {
        Ensure-Deps
        Write-Host "=== France entiere (peut prendre 30-40 min enrichissement) ===" -ForegroundColor Cyan
        Invoke-Pipeline @("france", "--skip-download") + $extra
    }
    "all" {
        Ensure-Deps
        Write-Host "=== Pipeline complet IDF (recommande pour demarrer) ===" -ForegroundColor Cyan
        Invoke-Pipeline @("idf", "--skip-download") + $extra
    }
    "enrich" {
        Ensure-Deps
        Write-Host "=== Enrichissement du dernier export ===" -ForegroundColor Cyan
        Invoke-Pipeline @("enrich", "--skip-download") + $extra
    }
    "dashboard" {
        Ensure-Deps
        Write-Host "=== Cockpit outbound (mode focus) ===" -ForegroundColor Cyan
        python serve.py
    }
    "call" {
        Ensure-Deps
        Write-Host "=== Session appels Progesti ===" -ForegroundColor Cyan
        $callArgs = @("call")
        if ($Limit -gt 0) { $callArgs += "--limit"; $callArgs += $Limit }
        python prospects.py @callArgs
    }
    default {
        Write-Host @"

Pipeline outbound Progesti
==========================

  .\run.ps1 all         -> IDF complet (extract + dirigeants + Excel)  RECOMMANDE
  .\run.ps1 call          -> TOUT EN 1 : liste + cockpit (python prospects.py call)
  python prospects.py sync   -> Sauvegarder statuts CRM
  python prospects.py stats  -> Voir progression
  python prospects.py report -> Rapport HTML

  Guide 60 sec : QUICKSTART.md
  .\run.ps1 dashboard     -> Cockpit mode focus (session 30 appels)
  .\run.ps1 idf         -> Idem que all
  .\run.ps1 metropoles  -> Lyon, Marseille, Toulouse...
  .\run.ps1 france      -> Toute la France (~13 600 prospects)
  .\run.ps1 enrich      -> Enrichir le dernier CSV

Options :
  .\run.ps1 all -Limit 50     -> Test rapide sur 50 prospects
  .\run.ps1 enrich -Resume    -> Reprendre sans tout refaire

Sorties dans output/ :
  proprete_idf_*_enrichi.xlsx  -> Excel avec scripts d'appel et emails
  proprete_idf_*_enrichi_top100.csv -> Les 100 meilleurs a appeler en premier

Guide sequences : templates/sequences-outbound.md

"@
    }
}
