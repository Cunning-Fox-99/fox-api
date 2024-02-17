const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Разрешаем использование bodyParser для обработки JSON-данных
app.use(bodyParser.json());

// Роут для получения console.log-сообщений
app.get('/log', (req, res) => {
    // const message = req.body.message;

    // Выводим сообщение в консоль сервера
    console.log('123');

    // Отправляем ответ клиенту
    res.json({ success: true, message: 'Log received successfully' });
});

// Запускаем сервер на указанном порту
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
