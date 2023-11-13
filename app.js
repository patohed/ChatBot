
const { createBot, createProvider, createFlow, addKeyword, addAnswer, EVENTS} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');
const reparacionPantalla = require('./flows/reparacionPantalla');
const reparacionBateria = require('./flows/reparacionBateria');
const horarios = require('./flows/horarios');
const flujoSaludo = require('./flows/flujoSaludo');
const flujoUbicacion = require('./flows/flujoUbicacion');
const reparacionAudio = require('./flows/reparacionAudio');
const ListaDePrecios = require('./flows/listaDePrecios');




const FlujoRecibimiento = addKeyword (EVENTS.WELCOME).addAnswer('Bienvenido al Servicio técnico')

const FlujoNotadevoz = addKeyword (EVENTS.VOICE_NOTE).addAnswer ('Dame un momento para escucharte...*te contestaremos a la brevedad =)*.')

const FlujoMultimedia = addKeyword (EVENTS.MEDIA).addAnswer('Recibido, le daré una ojeada!')

const Dni = addKeyword(['dni']).addAnswer ('*Corroborando información...*')
.addAnswer ('Solicitud **enviada** con éxito. Tu reparación se encuentra : **"EN_PROCESO"** , un **técnico** se pondrá en contacto contigo por si necesitas saber algo más!', {delay:3000})

const Entregas = addKeyword(['retiros', 'retirar',])
                .addAnswer ('Para saber el **estado** de su reparación, ingrese su *DNI* de la siguiente manera: *"DNI 11.111.111".*')
             
const FlujoDemora = addKeyword(['demoran','tardan','demorar','demora']).addAnswer ('explicacion magistral de que tardas porque sos bueno y CARO a la vez por lo mismo  e informativa.')

const ListaDeAccesorios = addKeyword (['Accesorios','Accesorio','accesorios','covertor','funda','fundas','templado','hydrogel','airpods','cable','cargador']).addAnswer('Encontré este listado para ti:*link* !') 

const ListaDeReparaciones = addKeyword (['reparaciones', 'reparar', 'Reparacion','Reparaciones','arreglar','funciona']).addAnswer('En este drive encontraras los **precios** y los **tiempos** estimados del trabajo a realizarse!')

const VentaCelulares = addKeyword (['venta', 'celulares','Venta']).addAnswer ('En este drive encontrarás los **precios** de nuestros **celulares** nuevos y usados ...📱📱https://')
.addAnswer ('*Lo podés retirar por el local en nuestros horarios de atención!*')

const MedioDePagos = addKeyword(['medios', 'pago','pagar','tarjeta','efectivo']).addAnswer('Hasta el momento contamos con los siguientes medios de pago!')
.addAnswer('**Mercado Pago**, **Tarjeta de crédito y débito** y **Efectivo**')

const FlujoAdios = addKeyword('gracias').addAnswer('A ti ! Estaré aquí por si precisas otra cosa ♥!')





//fin flujo de conversación Norber v 1.0//


const main = async () => {
    
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([FlujoMultimedia,FlujoNotadevoz,FlujoRecibimiento,FlujoDemora,reparacionBateria,FlujoAdios,Dni,Entregas,flujoUbicacion,flujoSaludo,horarios,VentaCelulares,reparacionPantalla,ListaDePrecios,ListaDeReparaciones,ListaDeAccesorios,MedioDePagos,reparacionAudio])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
