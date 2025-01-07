import { Session } from "@/types/session";

const sessionsData: Session[] = [
  {
    id: 1,
    title: 'Llamda gratuita',
    description: "Agenda una llamada conmigo si deseas conocerte a través de mi. Puedes preguntarme lo que desees, conocerme mejor y, reconocerte. En las transmisiones energéticas, lo más importante es establecer una conexión auténtica con la energía de tu facilitador.",
    price: 'Gratis',
    imageURL: '/images/sessions/free.png',


    booking: true,
    bookingLink: 'https://tidycal.com/danieldaka/free-call'
  },
  {
    id: 2,
    title: 'Session Privada Online',
    description: 'La energía trasciende el espacio y el tiempo, permitiendo que la energia se transmita a cualquier lugar del mundo. Todo desde la comodidad de tu espacio sagrado, tu templo, tu casa.',
    price: '133€',
    imageURL: '/images/sessions/online2.png',

    booking: true,
    bookingLink: 'https://tidycal.com/danieldaka/online'
  },
  {
    id: 3,
    title: 'Session Privada Barcelona',
    description: 'Sesiones privadas en Barcelona: Son ideales si deseas trabajar aspectos específicos de tu bienestar y recibir una atención más personalizada, adaptada a tus necesidades individuales.',
    price: '222€',
    imageURL: '/images/sessions/presential3.png',


    booking: true,
    bookingLink: 'https://tidycal.com/danieldaka/in-person'
  },

  {
    id: 4,
    title: 'Session Grupo Barcelona',
    description: 'En un ambiente grupal, el campo energético se amplifica y se comparte, creando un entorno poderoso para la transformación. ¡Contáctame para saber cuándo será el próximo evento!',
    price: '55€',
    imageURL: '/images/sessions/group.png',


    booking: false,
  },
];
export default sessionsData;