## Результаты выполнения команд

# Получаем и выводим весь список контактов в виде таблицы

node index.js --action list
https://monosnap.com/file/BPaKJtkpbRW9j4lTu8xJyRVdUg9H8P

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/5g0M365bk3cXiTSEKwGWg68dTPrDX4

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/oU0Enb1rC4nlHI5VLyBFQulNhEebnD

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/oU0Enb1rC4nlHI5VLyBFQulNhEebnD
