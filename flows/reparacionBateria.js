const {addKeyword} = require('@bot-whatsapp/bot')

module.exports = addKeyword(['bateria','descarga','hinchado','batería'])
.addAnswer ('Aqui encontré **información** de nuestros técnicos acerca de fallas recurrentes en **baterías**', {delay:500})
.addAnswer ('Si quieres conocer **información** sobre nuestros precios escribe : "Lista de precios"', {delay:1000})