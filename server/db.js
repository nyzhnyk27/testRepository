// запуск npm run dev



//імпортуємо sequelize та робимо деструктуризацію
const {Sequelize} = require("sequelize")

//експортуємо об"єкт, який ми створюємо з цього класу
module.exports = new Sequelize(
    process.env.DB_NAME, // назва БД
    process.env.DB_USER, // користувач
    process.env.DB_PASSWORD, // пароль
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)