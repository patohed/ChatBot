const {addKeyword} = require('@bot-whatsapp/bot')

module.exports = addKeyword(['horas','hora' ,'horarios','atención','atencion']).addAnswer ('Entiendo que quieres información respecto a nuestros horarios de atención')
.addAnswer ('Lun a Viernes de 🕒 10am a 18pm. 🕒 Sábados 9am a 13pm' )
.addAnswer ('*Por las dudas, te brindaré  nuestra dirección  Belzu 2121, Olivos. ;)!*', {delay:500})