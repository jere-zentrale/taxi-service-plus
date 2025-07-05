# PowerShell-Skript: fill-stubs.ps1
# Dieses Skript findet alle page.tsx-Dateien unter apps/web/src/app und füllt sie mit einfachen Stub-Komponenten.

# Root-Verzeichnis definieren
$root = "apps/web/src/app"

# Alle page.tsx-Files rekursiv finden und befüllen
Get-ChildItem -Path $root -Filter page.tsx -Recurse | ForEach-Object {
$filePath = $_.FullName
# Ordner-Name als Basis für den Komponentennamen
$dirName = $_.Directory.Name
# PascalCase-Komponentenname (erster Buchstabe groß)
$componentName = ($dirName.Substring(0,1).ToUpper() + $dirName.Substring(1)) + "Page"

# Stub-Inhalt als Here-String
$stub = @"
export default function $componentName() {
return (
<div className='p-8'>
<h1 className='text-2xl font-bold'>🚧 Stub: $componentName</h1>
<p className='mt-2 text-gray-600'>(Pfad: $($filePath.Replace('\\','/')))</p>
</div>
);
}
"@

# Datei mit Stub-Inhalt überschreiben
Set-Content -Path $filePath -Value $stub -Encoding utf8
Write-Host "Stub erstellt für: $componentName -> $filePath"
}