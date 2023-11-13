const {addKeyword} = require('@bot-whatsapp/bot')

module.exports = addKeyword(['escucho' , 'escucha','volumen', 'micrófono', 'microfono','auricular','altavoz','voz']).addAnswer('Entiendo que alguno de tus dispositivos tiene una falla de sonido o no funciona correctamente.')
.addAnswer('Aqui te envio **informacion** relacionada a fallas de audio más comunes...')
.addAnswer ('*Si quieres conocer nuestra lista de precios en reparaciones escribe : "precios"!*', {delay:500})