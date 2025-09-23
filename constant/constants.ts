import { FaChartLine, FaCar, FaBrain, FaGraduationCap, FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaVideo, FaTv } from "react-icons/fa"
import { LuChartNoAxesCombined } from "react-icons/lu"


export const NavLinks = [
    {
        id: 1,
        url: "#home",
        lable: "Home"
    },
    {
        id: 2,
        url: "#about",
        lable: "About"
    },
    {
        id: 3,
        url: "#experiences",
        lable: "Experiences"
    },
    {
        id: 4,
        url: "#services",
        lable: "Services"
    },
    {
        id: 5,
        url: "#testimonials",
        lable: "Testimonials"
    },
    {
        id: 6,
        url: "#contact",
        lable: "Contact"
    },
    {
        id: 7,
        url: "#gallery",
        lable: "Gallery"
    },
]


export const ServicesList = [
    {
        id: 1,
        name: "Performance Analysis",
        description: "I work with you to break down your driving, using data, video, and feedback to spot where you can improve. The goal is simple: help you find those extra tenths, gain consistency, and feel more confident on track.",
        icon: FaChartLine,
    },
    {
        id: 3,
        name: "Vehicle Setup",
        description: "Getting the car right for you makes all the difference. I’ll help you adjust everything from suspension to tire pressures so the car matches your driving style and the conditions you are racing in.",
        icon: FaCar,
    },
    
    {
        id: 4,
        name: "Mental Training",
        description: "Racing isn’t just physical — it’s mental too. I’ll share tools and techniques that have helped me (and other drivers) stay focused, manage pressure, and keep a clear head when it matters most.",
        icon:FaBrain,
    },
    
]


export const SkillsList = [
    {
        id: 1,
        name: "Performance Analysis",
        icon: LuChartNoAxesCombined,
    },
    {
        id: 2,
        name: "Vehicle Setup",
        icon: FaCar,
    },
    {
        id: 3,
        name: "Data and Video Analysis",
        icon: FaTv,
    },
    {
        id: 4,
        name: "Driver Development",
        icon: FaGraduationCap,
    },
]

export const TestimonialsList = [
    {
        id: 1,
        image: "/images/martin-head.jpeg",
        name: "Martin Ernesto Varga",
        role: "Driver",
        description: "We had a great experience together with Berti. He immediately knew what to fix by just standing outside the track. I told him how I felt after the sessions, and we made some setup changes. After the first two sessions, I was the fastest on the track, and we finished the day feeling confident."
    },
    {
        id: 2,
        image: "/images/szoke-m.jpeg",
        name: "Martin Szőke",
        role: "Driver",
        description: `Thanks to his racing background, he knows the challenges of kart racing.
        He easily finds common ground with everyone
        His enthusiasm, up-to-date knowledge, and supportive attitude make it motivating to work with him, bringing real progress to every training session and race!`
    },
    {
        id: 3,
        image: "/images/kika.jpeg",
        name: "Kristýna Kalistová",
        role: "Driver",
        description: "Berti is really great friend and even better coach. At every experience with him I had lots of fun and also learned a lot. He knows a lot from driving to setting up the kart, he always pushed to find a better way and tried to give me a competitive edge compared to others everytime"
    },
    {
        id: 4,
        image: "/images/hero2.jpg",
        name: "Döme Kisbalázs",
        role: "SimRacer",
        description: "After picking up SimRacing as a hobby, I wanted to improve my skills to compete in the top packs in all games. Bertold helped me with my driving style and car setup, and I was able to improve my skills to compete and win in several races amongs very skilled drivers."
    },
    {
        id: 5,
        image: "/images/hero2.jpg",
        name: "John Doe",
        role: "Driver",
        description: "I had a great experience working with Bertold. He is a very professional and knowledgeable driver."
    },
]

export const ContactList = [
    {
        id: 1,
        name: "instagram",
        url: "https://www.instagram.com/borsberti/",
        icon: FaInstagram,
    },
    {
        id: 2,
        name: "facebook",
        url: "https://www.facebook.com/robinagyker/",
        icon: FaFacebook,
    },
    {
        id: 3,
        name: "tiktok",
        url: "https://www.tiktok.com/robinagyker/",
        icon: FaTiktok,
    },
    {
        id: 4,
        name: "linkedin",
        url: "https://www.linkedin.com/in/döme-marcell-kisbalázs",
        icon: FaLinkedin,
    }
]

export const ExperiencesList = [
    {
        id: 1,
        image: "/images/world-champs.jpg",
        title: "Hungarian National Karting Champion",
    },
    {
        id: 2,
        image: "/images/martinka2.jpeg",
        title: "CEE Karting European Championship 3rd place",
        company: "KSB Racing Team",
    },
    
    {
        id: 3,
        image: "/images/markusz.jpeg",
        title: "Several championships both as a coach and mechanic with BDP",
    },
    
    {
        id: 4,
        image: "/images/rx2.jpg",
        title: "Winning my Debut race in the Hungarian RallyCross Championship",
    },
]

export const GalleryList = [
    {
        id: 1,
        image: "/images/kika.jpg",
    },
    {
        id: 2,
        image: "/images/martinka2.jpeg",
    },
    {
        id: 3,
        image: "/images/markusz.jpeg",
    },
    {
        id: 4,
        image: "/images/rx2.jpg",
    },
    {
        id: 5,
        image: "/images/world-champs.jpg",
    },
    {
        id: 6,
        image: "/images/szoke-m.jpeg",
    },
    {
        id: 7,
        image: "/images/martin-head.jpeg",
    }
]