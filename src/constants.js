import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export const ROUTES = {
    home : "/",
    signup: "/signup",
}
export const config = {
    navbar: [
        {
            id: Math.random() * 100,
            title: 'Home',
        },
        {
            id: Math.random() * 100,
            title: 'Tours',
        },
        {
            id: Math.random() * 100,
            title: 'Destinations',
        },
        {
            id: Math.random() * 100,
            title: 'About',
        },
        {
            id: Math.random() * 100,
            title: 'Contact',
        },
    ],
    faq: [
        {
            id: Math.random() * 100,
            question: 'What types of touring activities are available in Armenia?',
            answer: 'Armenia offers a wide range of touring activities including cultural tours, hiking and trekking, wine tasting tours, historical sightseeing, adventure tours, and more.'
        },
        {
            id: Math.random() * 100,
            question: 'How can I book a touring activity in Armenia?',
            answer: 'Booking a touring activity in Armenia is easy. Simply browse through our website, select the activity you are interested in, and follow the booking instructions provided.'
        },
        {
            id: Math.random() * 100,
            question: 'Are the touring activities guided?',
            answer: 'Yes, most of the touring activities in Armenia are guided. Our experienced and knowledgeable guides will accompany you throughout the tour to provide valuable insights and ensure a memorable experience.'
        },
        {
            id: Math.random() * 100,
            question: 'What is the best time to visit Armenia for touring activities?',
            answer: 'The best time to visit Armenia for touring activities is during the spring (April to June) and autumn (September to November) seasons when the weather is pleasant and the landscapes are at their most beautiful.'
        },
        {
            id: Math.random() * 100,
            question: 'Are there any age restrictions for participating in touring activities?',
            answer: 'The age restrictions for touring activities in Armenia may vary depending on the specific activity. Some activities may have minimum age requirements for safety reasons. Please check the activity details for any age restrictions before booking.'
        }
    ],
    social_icons: [
        {
            id: Math.random() * 100,
            icon: <FaTwitter />
        },
        {
            id: Math.random() * 100,
            icon: <FaInstagram />
        },
        {
            id: Math.random() * 100,
            icon: <FaFacebookF />
        }
    ]
}