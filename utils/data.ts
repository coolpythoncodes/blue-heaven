// images
import family from "../public/assets/images/family.svg";
import couples from "../public/assets/images/couples.svg";
import girl from "../public/assets/review/girl.svg";
import michel from '../public/assets/clinicians/michel.svg'
import vivianeMobile from '../public/assets/clinicians/viviane-mobile.svg'
import goalOne from '../public/assets/images/goal-1.svg'
import goalTwo from '../public/assets/images/goal-2.svg'
import goalThree from '../public/assets/images/goal-3.svg'
import goalFour from '../public/assets/images/goal-4.svg'
import sittingManWoman from "../public/assets/about/sitting-man-woman.svg"



export const navLinks = [
    {
        text: "Home",
        to: '/'
    },
    {
        text: "About Us",
        to: '/about'
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
        to: '/faq'
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
                to: "/about"
            },
            {
                text: "FAQs",
                to: "/faq"
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
        href: '/'
    },
    {
        heading: 'Couple’s Therapy',
        description: 'Lymphatic drainage vitamins and supplements wellness spa boost your mood metaboloism boosting superpowder self love bone broth nutrient dense. Irritable bowel syndrome hyaluronic acid glow serum',
        image: couples,
        href: '/'
    }
]

export const reviews = [
    {
        name: 'The Wesley’s Family',
        review: 'Blue haven is honestly the best. We highly recommend Michel and Viviane',
        image: girl,
    },
    {
        name: 'The Wesley’s Family',
        review: 'To live is to travelled Asian adventure thrill seekers captain’s table the bird dance born to wander romance at sea back packers shore tours.',
        image: girl,
    },
    {
        name: 'The Wesley’s Family',
        review: 'To live is to travelled Asian adventure thrill seekers captain’s table the bird dance born to wander romance at sea back packers shore tours.',
        image: girl,
    },
]

export const services = [
    {
        heading: 'Individual Counselling',
        description: 'Blue Haven Counselling and Coaching (BHCC) offers Individual counselling and psychotherapy services to support children, adolescents, or adults. Therefore, clients have the unique opportunity to collaborate with the therapist on their goals in a supportive therapeutic environment with a personalized treatment plan.',
        price: '$150',
        href: '/',
    },
    {
        heading: 'Couples Therapy',
        description: 'Blue Haven Counselling and Coaching (BHCC) also offers therapy services for couples dealing with a wide range of issues that emerge in relationships between partners. Also, we encourage couples to enter Therapy to strengthen their relationship by building strong connections.',
        price: '$150',
        href: '/',
    },
    {
        heading: 'Individual Counselling',
        description: 'Blue Haven Counselling and Coaching (BHCC) also addresses all family issues, relationships, communication patterns and interactions between family members. We believe that families that receive ongoing support through different phases of the relationship have a better chance of strengthening the family relationships and functioning. ',
        price: '$150',
        href: '/',
    },
]

export const cliniciansDetails = [
    {
        name: 'Michel Ndiom',
        role: "Founder",
        bio: "Michel Ndiom holds a Bachelor of Arts in English and French and a Bachelor of Leadership. He graduated with a Bachelor of Social Work from UVIC and a Master of Social Worker from the University of the Fraser. Michel formerly works at the Ministry of Children and Family Development but works at Vancouver General Hospital and BC Children's Hospital as a Clinical Social Worker. Michel is registered with the BC College of Social Workers and the BC Association of Social Workers.",
        image: michel,
    },
    {
        name: 'Viviane Ndiom',
        role: "Co-Founder",
        bio: "Viviane Njuitchou holds a Bachelor of Arts in English and French, a Bachelor of Social Worker and a Master of Social Worker. She works with the Ministry of Children and Family Development and Ridge Meadows Hospital. Her approach is warm, person-centred & trauma-informed. She is excited to provide Counselling to clients she can identify with and advocate for due to the various systemic discrimination they face in accessing mental health. Viviane is registered with the BC College of Social Workers and the BC Association of Social Workers.",
        image: vivianeMobile,
    },
]

export const goals = [
    {
        goal: "BHCC aims to support individuals and families to develop new skills and take ownership of their lives following a program that is tailor-made to match everyone's needs.",
        icon: goalOne,
    },
    {
        goal: "BHCC's philosophy is based on the belief that one of us is unique and has particular challenges and aspirations, and our coaching program reflects that uniqueness.",
        icon: goalTwo,
    },
    {
        goal: "BHCC works with the organization following Integral Theory, highlighting personal effectiveness, leadership development and communications courses that I design and facilitate.",
        icon: goalThree,
    },
    {
        goal: "Thus, BHCC's services will help develop new skills and improve existing and allow clients to see blockages and limiting factors in their day-to-day interaction with their surroundings.",
        icon: goalFour,
    },
]

export const statement = [
    {
        name: "Mission",
        description: "To provide a holistic and trauma-informed approach to Individuals and families through a team of therapists that help them with the most competent, responsive, flexible and diverse services needed to address their concerns.",
        image: sittingManWoman,
    },
    {
        name: "Vision",
        description: "To see individuals and families improve relationships, make healthy choices, and discover resilience in an environment that honours and nurtures their potential. We are eager to support you throughout your mental health and wellness journey towards connecting your power, cultivating your confidence, and increasing your peace of mind.",
        image: sittingManWoman,
    },
]

export const faq = [
    {
        heading:'Services',
        // subheading: 'Coaching',
        faq: [
            {
                id: 1,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
            {
                id: 2,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
            {
                id: 3,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
            {
                id: 4,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
        ]
    },
    {
        heading:'Bookings',
        // subheading: 'Coaching',
        faq: [
            {
                id: 5,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
            {
                id: 6,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
            {
                id: 7,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
            {
                id: 8,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
        ]
    },
    {
        heading:'Payments & Services',
        // subheading: 'Coaching',
        faq: [
            {
                id: 9,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
            {
                id: 10,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
            {
                id: 11,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
            {
                id: 12,
                question: "How many services do you offer?",
                answer: "Cut education funding just took up surfing when I was a kid I got a free education lemme ask you this still saying the skinny prepaid funerals funding my kids.",
            },
        ]
    },
]


// // Set this to 0 for slides to directly overlap
// let sliderOffset = 20;
// // Tablet and Mobile Only
// if (window.innerWidth < 992) {
// 	sliderOffset = 0;
// }
// // On page load
// $(".slide_contain").each(function (index) {
//   $(this).find(".slide_item").first().addClass("is--current");
// });
// // On arrow click
// $(".slide_arrow").on("click", function () {
//   // Set variables
//   let slideWidth = $(".slide_item").eq(0).outerWidth() - sliderOffset;
//   let slideParent = $(this).closest(".slide_contain");
//   let currentSlide = slideParent.find(".slide_item.is--current");
//   // Update current slide
//   slideParent.find(".is--current").removeClass("is--current");
//   if ($(this).hasClass("is--right")) {
//     // Update current slide if right
//     if (currentSlide.next().length) {
//       currentSlide.next().addClass("is--current");
//     } else {
//       slideParent.find(".slide_item").eq(0).addClass("is--current");
//       slideParent.find(".slide_arrow.is--right").addClass("is--disabled-arrow");
//     }
//   } else {
//     // Update current slide if left
//     if (currentSlide.prev().length) {
//       currentSlide.prev().addClass("is--current");
//     } else {
//       slideParent.find(".slide_item").eq(0).addClass("is--current");
//       slideParent.find(".slide_arrow.is--left").addClass("is--disabled-arrow");
//     }
//   }
//   // Update arrows
//   slideParent.find(".slide_arrow").removeClass("is--disabled-arrow");
//   if (
//     slideParent.find(".slide_item.is--current").index() ==
//     slideParent.find(".slide_item").first().index()
//   ) {
//     slideParent.find(".slide_arrow.is--left").addClass("is--disabled-arrow");
//   }
//   if (
//     slideParent.find(".slide_item.is--current").index() ==
//     slideParent.find(".slide_item").last().index()
//   ) {
//     slideParent.find(".slide_arrow.is--right").addClass("is--disabled-arrow");
//   }
//   // Figure out move distance
//   let currentNumber = slideParent.find(".slide_item.is--current").index();
//   let slideMove = slideWidth * currentNumber;
//   slideParent.find(".slide_item.is--current").addClass("is--animating");
//   $(".slide_item.is--animating ~ .slide_item, .slide_item.is--animating").css(
//     "transform",
//     `translateX(-${slideMove}px)`
//   );
//   slideParent.find(".slide_item.is--current").removeClass("is--animating");
// });
// // On window resize
// $(window).resize(function () {
//   if (window.innerWidth > 767) {
//     $(".slide_arrow.is--right").removeClass("is--disabled-arrow");
//     $(".slide_arrow.is--left").addClass("is--disabled-arrow");
//     $(".slide_item.is--current").removeClass("is--current");
//     $(".slide_contain").find(".slide_item").first().addClass("is--current");
//     $(".slide_item").css("transform", `translateX(0px)`);
//   }
// });