const {addKeyword} = require('@bot-whatsapp/bot')

module.exports = addKeyword(['Hola' , 'buenas', 'que tal','buen dia','buen día','Buenos días','Buen día','Buen dia','buenas tardes','buenas noches'])
.addAnswer('Hola, mi nombre es **Norbert** y soy asistente 24hs de Mobile Support. Puedes darme instrucciones para ayudarte, por ejemplo: "Quisiera ver los celulares a la venta!" o "Deseo conocer la lista de precios"')
.addAnswer ('*Para consultar el estado de tu reparación recuerda ingresar el dni con el que ingresaste el equipo. De la siguiente manera: "DNI: 11.111.111".*', {delay:500})
.addAnswer('¿En qué puedo ayudarte el día de hoy?', {delay:1100})