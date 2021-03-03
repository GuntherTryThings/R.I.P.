|**Bejelentkezés**||
|---|---|
|Követelmény|Internetkapcsolat|
|Cél|Az elsődleges aktor azonosítása|
|Előfeltétel|Oldal megnyitása|
|Sikeres lefutás|Az elsődleges aktor hitelesíti magát|
|Sikertelen lefutás|A hitelesítés sikertelen|
|Elsődleges aktor|A felhasználó (mindenki)|
|Kiváltó esemény|Elsődleges aktor elindítja|
|**Fő lépések**||
|1|Az elsődleges aktor megnyitja az oldalt|
|2|A rendszer megjeleníti a bejelentkezési felületet|
|3|Az elsődleges aktor megadja a bejelentkezési adatait|
|4|A rendszer belépteti az elsődleges aktort|
|**Kiegészítések**||
|3.1|Az elsődleges aktor rossz adatokat ad meg |
|3.2|A rendszer értesíti a hibáról|
|3.3|A rendszer újra bekéri az adatokat|

---

|**Karakter választás**||
|---|---|
|Követelmény|Bejelentkezés|
|Cél|Az elsődleges aktor kiválasztja a kívánt karaktert, és azzal indítja el a játékot|
|Előfeltétel|Legyen elérhető az adattár|
|Sikeres lefutás|A játék elindul a kiválasztott karakterrel|
|Sikertelen lefutás|Nem elérhető az adattár|
|Elsődleges aktor|Bejelentkezett felhasználó|
|Kiváltó esemény|Elsődleges aktor bejelentkezik|
|**Fő lépések**||
|1|Az elsődleges aktor kiválasztja a játszani kívánt karaktert|
|2|Az elsődleges aktor elindítja a játékot a kiválasztott karakterrel|
|3|A rendszer betölti az utolsó mentést az adott karakterhez|
|**Kiegészítések**||
|1.1|Az elsődleges aktornak nincs karaktere|
|1.2|Az elsődleges aktor létrehoz egy új karaktert|

---

|**Karkter kreálás**||
|---|---|
|Követelmény|Bejelentkezés|
|Cél|Az elsődleges aktor létrehoz egy új karaktert|
|Előfeltétel|Legyen elérhető az adattár, és az elsődleges aktornak legyen kevesebb karaktere, mint a maximum|
|Sikeres lefutás|A felhasználó kreál egy új karaktert|
|Sikertelen lefutás|Nem elérhető az adattár, vagy az elsődleges aktor elérte a maximális limitet|
|Elsődleges aktor|Bejelentkezett felhasználó|
|Kiváltó esemény|Elsődleges aktor új karaktert szeretne készíteni|
|**Fő lépések**||
|1|Az elsődleges aktor kiválasztja az új karakter kreálása menüpontot|
|2|Az elsődleges aktor felviszi a karkter információit|
|3|A rendszer menti az új karaktert|
|**Kiegészítések**||
|1.1|Az elsődleges aktor eléri a maximális limitet|
|1.2|A rendszer hibaüzenetet jelenít meg|

---
