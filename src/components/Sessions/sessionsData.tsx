import { Session } from "@/types/session";

const sessionsData: Session[] = [
  {
    id: 1,
    title: 'Free Call Online',
    description: "Let’s Connect! Schedule a call with me to explore how kundalini activation can enhance your life and discover how we can work together.",
    price: 'Free',
    imageURL: '/images/sessions/free.png',


    booking: true,
    bookingLink: 'https://tidycal.com/danielawakenscarlet/free-call'
  },
  {
    id: 2,
    title: '1:1 Sessions Online',
    description: 'Energy transcends space and time, allowing kundalini activation to be transmitted across the globe. All from the comfort of your own home.',
    price: '50€',
    imageURL: '/images/sessions/online2.png',

    booking: true,
    bookingLink: 'https://tidycal.com/danielawakenscarlet/online'
  },
  {
    id: 3,
    title: '1:1 Sessions Barcelona',
    description: 'In-Person Sessions Now Available in Barcelona! Join me in the vibrant heart of Poble Nou neighborhood for transformative experiences tailored to your journey',
    price: '150€',
    imageURL: '/images/sessions/presential3.png',


    booking: true,
    bookingLink: 'https://tidycal.com/danielawakenscarlet/in-person'
  },

  {
    id: 4,
    title: 'Group Sessions',
    description: 'In a group setting, the energy field is amplified and shared, creating a powerful environment for transformation. Contact me to find out when the next event is happening!',
    price: '50€',
    imageURL: '/images/sessions/group.png',


    booking: false,
  },
];
export default sessionsData;