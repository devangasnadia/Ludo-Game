
document.addEventListener("DOMContentLoaded", function () {
    const featuredMedia = document.querySelector(".featured-media");
    const zoomableImage = document.querySelector(".zoomable-image");

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const mediaOffset = featuredMedia.offsetTop;
        const windowHeight = window.innerHeight;

        const maxScaleFactor = 2; 

        if (scrollY > mediaOffset - windowHeight / 2) {
            let scaleFactor = 1 + (scrollY - (mediaOffset - windowHeight / 2)) / windowHeight;
            scaleFactor = Math.min(scaleFactor, maxScaleFactor);

            zoomableImage.style.transform = `scale(${scaleFactor})`;
            featuredMedia.style.height = `${400 * scaleFactor}px`;
        }
    });
});

// info file
document.addEventListener("DOMContentLoaded", function () {
    const historySection = document.querySelector(".history");
    const gameRulesSection = document.querySelector(".game-rules");
    const tipsSection = document.querySelector(".tips-section");

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        const slideInFromLeft = (section) => {
            const sectionOffset = section.offsetTop;
            if (scrollY > sectionOffset - windowHeight / 2) {
                section.style.opacity = "1";
                section.style.transform = "translateX(0)";
            }
        };

        slideInFromLeft(historySection);
        slideInFromLeft(gameRulesSection);
        slideInFromLeft(tipsSection);
    });
});
 
// review cards
window.reviewData = [
    {
        name: "Chaitanya Prajapati",
        date: "2020-06-12",
        rating: 5,
        text: "Awesome Game! Felt Nostalgic",
    },
    {
        name: "Harsh Patel",
        date: "2022-06-12",
        rating: 4,
        text: "Fun Game",
    },
    {
        name: "Neel Prajapati",
        date: "2021-05-09",
        rating: 5,
        text: "Remind of my old days!",
    },
    {
        name: "Nayan Modi",
        date: "2021-09-17",
        rating: 3,
        text: "Not my favourite but, I like it",
    },
    {
        name: "Het Shah",
        date: "2023-11-13",
        rating: 2,
        text: "Worst game, I always loose",
    },
];

// review card containers
document.addEventListener("DOMContentLoaded", function () {
    const reviewCardsContainer = document.querySelector("#review-cards");

    reviewData.forEach(review => {
        const card = document.createElement("div");
        card.classList.add("card");

        const container = document.createElement("div");
        container.classList.add("container");

        const name = document.createElement("h4");
        name.innerHTML = `<b>${review.name}</b>`;
        container.appendChild(name);

        const reviewText = document.createElement("p");
        reviewText.textContent = review.text;
        container.appendChild(reviewText);

        card.appendChild(container);
        reviewCardsContainer.appendChild(card);
    });
});

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}

function openSignUpModal(){
    const modal = document.getElementById('id01')
    if(modal){
        modal.style.display = 'block';
    }
}


