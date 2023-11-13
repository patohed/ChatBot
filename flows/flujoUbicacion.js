const {addKeyword} = require('@bot-whatsapp/bot')

module.exports = addKeyword(['donde','ubicados?' ,'dirección','dónde',
'local', 'dirección','direccion', 'encuentran', 'encuentran?', 'ubicación', 'ubicacion'])
.addAnswer ('Entiendo que quieres información respecto a nuestra ubicación')
.addAnswer ('El local esta **ubicado** en:**Juan de Garay 1111,Olivos.**' )
.addAnswer ('*Por las dudas, te brindaré nuestros  horarios de atención!.. Lun a Sab de 10hs a 18hs! ;)*')