# Manipulations with Set container as data storage study case

---
[![Build status](https://ci.appveyor.com/api/projects/status/qdu0obgry1awj6h9?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-containers-set)



### Описание

Создан класс `Team` с методами `add`, `addAll` и `toArray`. Класс хранит данные о персонажах команды в поле типа `Set`:
```javascript
class Team {
    constructor() {
        this.members = new Set();
    }
    ...
}
```

Персонажи реализованы дочерними классами калсса `Character`.

Метод `add` добавляет выбранного персонажа в команду. При этом, если такой объект уже существует в команде - генерируется ошибка.

Метод `addAll` добавляет произвольное количество персонажей в команду.
Метод `toArray` производит конвертацию `Set` в массив.

---

Обеспечено покрытие тестами.