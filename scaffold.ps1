# PowerShell-Script: scaffold.ps1

# Root-Pfad deiner App
$root = "apps/web/src/app"

# Liste aller Ordner, die angelegt werden sollen
$dirs = @(
"$root",
"$root/modules",
"$root/modules/company",
"$root/modules/company/index",
"$root/modules/company/administration",
"$root/modules/company/administration/dashboard",
"$root/modules/company/administration/financial",
"$root/modules/company/administration/integrations",
"$root/modules/company/administration/settings",
"$root/modules/company/administration/stats",
"$root/modules/company/documents",
"$root/modules/company/documents/contract",
"$root/modules/company/documents/invoices",
"$root/modules/company/documents/packages",
"$root/modules/personnel",
"$root/modules/personnel/overview",
"$root/modules/personnel/payroll",
"$root/modules/personnel/timesheets",
"$root/modules/personnel/staff",
"$root/modules/personnel/staff/index",
"$root/modules/personnel/staff/[id]",
"$root/modules/personnel/templates",
"$root/modules/personnel/templates/capture",
"$root/modules/personnel/templates/change",
"$root/modules/personnel/templates/blank",
"$root/modules/personnel/templates/custom1",
"$root/modules/personnel/templates/custom2",
"$root/modules/finance",
"$root/modules/finance/driver-invoices",
"$root/modules/finance/cashbook",
"$root/modules/finance/export",
"$root/modules/finance/closures",
"$root/modules/finance/closures/daily",
"$root/modules/finance/closures/monthly",
"$root/modules/finance/closures/yearly",
"$root/modules/finance/closures/integrations",
"$root/modules/fleet",
"$root/modules/fleet/vehicles",
"$root/modules/fleet/vehicles/[id]",
"$root/modules/fleet/drivers",
"$root/modules/fleet/reminders",
"$root/modules/fleet/reports",
"$root/modules/reports",
"$root/modules/reports/standard",
"$root/modules/reports/automated",
"$root/modules/reports/generator",
"$root/modules/reports/archive",
"$root/modules/settings",
"$root/modules/settings/company",
"$root/modules/settings/users",
"$root/admin/users",
"$root/calendar",
"$root/inbox",
"$root/inbox/[conversationId]",
"$root/help",
"$root/settings"
)

# Liste aller Dateien, die angelegt werden sollen (leer)
$files = @(
"$root/globals.css",
"$root/layout.tsx"
)

# Für jede Seite eine leere page.tsx anlegen
foreach ($d in $dirs) {
$files += Join-Path $d "page.tsx"
}

# Ordner erstellen
foreach ($d in $dirs) {
New-Item -ItemType Directory -Path $d -Force | Out-Null
}

# Dateien erstellen (nur falls nicht vorhanden)
foreach ($f in $files) {
if (-Not (Test-Path $f)) {
New-Item -ItemType File -Path $f -Force | Out-Null
}
}