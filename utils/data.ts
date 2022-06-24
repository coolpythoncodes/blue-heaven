// images
import family from "../public/assets/images/family.svg";
import couples from "../public/assets/images/couples.svg";

export const navLinks = [
    {
        text: "Home",
        to: '/'
    },
    {
        text: "About Us",
        to: '/'
    },
    {
        text: "Services",
        categories: [
            {
                text: "Counselling",
                to: '/'
            },
            {
                text: "Coaching",
                to: '/'
            },
            {
                text: "Workshops",
                to: '/'
            },
        ]
    },
    {
        text: "FAQ",
        to: '/'
    },

]

export const footer_links = [
    {
        header: "Company",
        links: [
            {
                text: "Home",
                to: "/"
            },
            {
                text: "About Us",
                to: "/"
            },
            {
                text: "FAQs",
                to: "/"
            }
        ]
    },
    {
        header: "Services",
        links: [
            {
                text: "Counselling",
                to: "/"
            },
            {
                text: "Coaching",
                to: "/"
            },
            {
                text: "Workshops",
                to: "/"
            }
        ]
    },
]

export const footer_contact = {
    header: "Contact",
    text: ["bhc@bhc.com", "(1) 778 218 3964"]
}

export const whoWeArDetails = [
    {
        heading: 'Family Therapy',
        description: 'At BHCC, we propose different therapeutic approaches that will allow family members to express themselves in a unique manner considering their ages and the family dynamic. Sessions might include different parts of the family unit by focusing on various collaborative goals of the family.',
        image: family,
        href:'/'
    },
    {
        heading: 'Couple’s Therapy',
        description: 'Lymphatic drainage vitamins and supplements wellness spa boost your mood metaboloism boosting superpowder self love bone broth nutrient dense. Irritable bowel syndrome hyaluronic acid glow serum',
        image: couples,
        href:'/'
    }
]