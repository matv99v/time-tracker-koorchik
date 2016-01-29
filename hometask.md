## Домашнее задание:

1. Ознакомиться с https://github.com/petehunt/webpack-howto (просто нужно понимать, принцип работы webpack и какие у него есть возможности)
2. Посмотреть видео "Системы контроля версий" https://events.yandex.ru/lib/talks/671/
3. Посмотреть видео "Тестирование" https://events.yandex.ru/lib/talks/672/
4. Реализовать класс Timer. Делаете в отдельной ветке. Должны проходить все тесты. Проверяется командой ```npm run test_timer```. После реализации создаете "pull request" в "master". 
5. Реализовать валидацию для формы регистрации. Делаете в отдельной ветке. Должны проходить все тесты. Проверяется командой ```npm run test_validation```.После реализации создаете "pull request" в "master". 

Перед началом реализации. Возьмите свежие исходники с моего репозитария (https://github.com/FE-Advanced/time-tracker-koorchik).  Нужно будет сделать ```npm install```, чтобы установить новые зависимости.

### Требования к функции валидации

Если у вас проходят тесты ```npm run test_validation```, то значит валидация соотствует требованиям.  

name:

- Required (error: “Required”)
- Only letters (error: “Should contain only letters latin/cyrillic”)
- No spaces
- English, Ukrainian, Russian (error: “Should contain only letters latin/cyrillic”)

email:

- Required (error: “Required”)
- Invalid emails:  (error: “Wrong email format”)             
    + name.email.com
    + @gmail.com
    + name@gmail@com.com
    + user@my_domain.com

username:
- Required (error: “Required”)
- Validation the same as name has. (error: “Should contain only letters latin/cyrillic”)

password:
- Required (error: “Required”)
- All non latin and non digit characters should be treated as special characters
- Minimum 8 chars (error: “Should contain at least 8 characters”)
- Minimum 1 digit (error: “Should contain at least one digit”)
- Minimum 1 special char (error: “Should contain at least one special character”)
- Minimum one uppercase letter (error: “Should contain at least one uppercase letter”)
- Case sensitive

repassword (Password confirmation):
- Required (error: “Required”)
- Should be equal to "password" field (error: “Should be equal to password”)

month, year, day (Birthday):
- Optional
- Should be valid date. (error: “Invalid date”)
- Date should not be in future (error: “Date should not be in future”)

phone:
- Optional
- digits
- Allowed chars: digits, '+', '(', ')', '-', ' ' (error: “Wrong number”)


