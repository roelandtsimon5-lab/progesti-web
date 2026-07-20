# Blog on Windows logon — PROGESTI
# Cadence: Tuesday + Thursday only, once per day max.
# Install: .\scripts\install-blog-logon-task.ps1

param(
  [switch]$Force
)

$ErrorActionPreference = "Stop"

# This file lives in web/scripts/
$WebRoot = Split-Path $PSScriptRoot -Parent
$RepoRoot = Split-Path $WebRoot -Parent
$Workspace = if (Test-Path (Join-Path $RepoRoot "web")) { $RepoRoot } else { $WebRoot }

$StateDir = Join-Path $env:LOCALAPPDATA "ProgestiBlog"
New-Item -ItemType Directory -Force -Path $StateDir | Out-Null
$LockFile = Join-Path $StateDir "last-run.txt"
$LogFile = Join-Path $StateDir "log.txt"

function Write-Log([string]$msg) {
  Add-Content -Path $LogFile -Value "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')  $msg"
}

$today = Get-Date
$dow = [int]$today.DayOfWeek  # 0=Sun … 2=Tue … 4=Thu
$isPublishDay = ($dow -eq 2) -or ($dow -eq 4)

if (-not $Force -and -not $isPublishDay) {
  Write-Log "Skip: not Tue/Thu ($($today.ToString('dddd')))."
  exit 0
}

$stamp = $today.ToString("yyyy-MM-dd")
if (-not $Force -and (Test-Path $LockFile)) {
  $last = (Get-Content $LockFile -Raw).Trim()
  if ($last -eq $stamp) {
    Write-Log "Skip: already triggered today ($stamp)."
    exit 0
  }
}

$promptPath = Join-Path $WebRoot "docs\PROMPT-BLOG-AUTO.md"
$flagDir = Join-Path $WebRoot "docs\blog"
New-Item -ItemType Directory -Force -Path $flagDir | Out-Null
$flagPath = Join-Path $flagDir "RUN-TODAY.md"

@"
# Publication blog — $stamp

Ouvre le chat Cursor et envoie :

@docs/PROMPT-BLOG-AUTO.md

File : @docs/blog/editorial-queue.md

Créé au démarrage PC (mardi / jeudi). Supprime après publication.
"@ | Set-Content -Path $flagPath -Encoding UTF8

Set-Content -Path $LockFile -Value $stamp -Encoding UTF8
Write-Log "Triggered blog publish for $stamp. Opening Cursor…"

$cursor = @(
  "$env:LOCALAPPDATA\Programs\cursor\Cursor.exe",
  "C:\Program Files\cursor\Cursor.exe",
  "C:\Program Files\Cursor\Cursor.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $cursor) {
  $cmd = Get-Command cursor -ErrorAction SilentlyContinue
  if ($cmd) { $cursor = $cmd.Source }
}

if (-not $cursor) {
  Write-Log "ERROR: Cursor executable not found."
  exit 1
}

Start-Process -FilePath $cursor -ArgumentList @(
  "-r",
  "`"$Workspace`"",
  "-g",
  "`"${promptPath}:1`""
)
Write-Log "Cursor launched: $Workspace + $promptPath"
