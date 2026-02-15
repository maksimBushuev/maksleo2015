const tg = window.Telegram.WebApp;

// Сообщаем Телеграму, что приложение готово к работе
tg.ready();
let userS = document.getElementById('res_1');
// Берем имя юзера
const userName = tg.initDataUnsafe.user ? tg.initDataUnsafe.user.first_name : "Гость";

res_1.innerHTML = `Привет,  ${userName}`;
