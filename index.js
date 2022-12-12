const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    ],
});

function errorMsg(num) {
    if(typeof num === "number") 2 * num
    throw new Error("Introduce un número")
} 

let number = "5r";

try {
    const doble = errorMsg(number)
} catch(e) {
    logger.error(`${e}`)
    logger.error("Valor introducido no válido")
} finally  {
    ("Esto se ejecuta siempre")
}
    