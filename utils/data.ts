// images
import family from "../public/assets/images/family.svg";
import couples from "../public/assets/images/couples.svg";
import girl from "../public/assets/review/girl.svg";


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