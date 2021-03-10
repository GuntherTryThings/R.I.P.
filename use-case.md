|**Értesítés kiküldése**||
|---|---|
|Követelmény|Meglévő kurzus és azon belüli hallgatók|
|Cél|Meghatározott értesítés kiküldése a rendszer által|
|Előfeltétel|Legyen elérhető az adatbázis|
|Sikeres lefutás|A rendszer értesíti az adott kurzusban lévő hallgatókat|
|Sikertelen lefutás|Nem elérhető az adatbázis|
|Elsődleges aktor|Rendszer|
|Kiváltó esemény|Új beadandó/zh/óra beszúrás|
|**Fő lépések**||
|1|A felhasználó felvisz a rendszerbe egy meghatározott időre elkészítendő beadandót|
|2|A rendszer küld egy értesítést az új aktivitással kapcsolatban|
|3|A rendszer küld egy emlékeztetőt a határidő lejárta előtti 3 illetve 1 napban is|

---
|**Kiexportált ics fájl feltöltése**||
|---|---|
|Követelmény|Bot elérése|
|Cél|.ics fájl feltöltése a bot-ra|
|Előfeltétel|Legyen elérhető az adatbázis és a bot|
|Sikeres lefutás|A rendszer elmenti a megadott órarend alapján a kurzusaidat|
|Sikertelen lefutás|Nem elérhető az adatbázis|
|Elsődleges aktor|Felhasználó|
|Kiváltó esemény|-|
|**Fő lépések**||
|1|A felhasználó kiexportálja Neptunból az órarendet .ics kiterjesztéssel|
|2|A felhasználó megnézi hogy elérhető-e a bot a discord szerveren|
|3|A felhasználó elküldi a bot-nak az ics fájl privát üzenetben|

---
