
1. Подключить eslint
2. Подключить travis-ci
3. Подключить badge от travis в README.md
4. Исправить все eslint ошибки
5. Реализовать тест (в отдельном файле). Делаете в отдельной ветке. Должны проходить все тесты. После реализации создаете "pull request" в "master". 

```
// Псевдо код теста
timer.start()
wait 1 sec
timer.clear()
wait 1 sec
timer.getSpentTime(); // === 1 sec
```