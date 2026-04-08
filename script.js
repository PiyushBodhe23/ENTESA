function showTeam(type, btn) {
    document.querySelectorAll(".team-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));

    document.getElementById(type).classList.add("active");
    btn.classList.add("active");
}

function toggleMembers(type, btn) {
    const cards = document.querySelectorAll(`.${type}-hidden`);
    const isHidden = cards[0].classList.contains("hidden");

    cards.forEach(card => card.classList.toggle("hidden"));

    btn.querySelector("span").innerText = isHidden ? "View Less" : "View More";
    btn.classList.toggle("active");
}

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.onclick = () => navMenu.classList.toggle("active");

window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = link.getAttribute("href").substring(1);
        const section = document.getElementById(id);

        window.scrollTo({
            top: section.offsetTop - 70,
            behavior: "smooth"
        });
    });
});

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 100) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href").includes(current)
        );
    });
});

const text = "ENTESA";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.querySelector(".typing-text").innerHTML += text[i++];
        setTimeout(typeEffect, 120);
    }
}

window.onload = typeEffect;

const eventsData = [
    {
        title: "Womens Day",
        desc: "Celebrating women in technology",
        media: [
            { type: "image", src: "assets/Womens_day/1.jpeg" },
            { type: "image", src: "assets/Womens_day/2.jpeg" },
            { type: "image", src: "assets/Womens_day/3.jpeg" },
            { type: "image", src: "assets/Womens_day/4.jpeg" },
            { type: "image", src: "assets/Womens_day/5.jpeg" }
        ]
    },
    {
        title: "Rising Stars Of ENTC",
        desc: "Competition winners",
        media: [
            { type: "image", src: "assets/Rising_Stars/10.jpeg" },
            { type: "image", src: "assets/Rising_Stars/1.jpeg" },
            { type: "image", src: "assets/Rising_Stars/2.jpeg" },
            { type: "image", src: "assets/Rising_Stars/3.jpeg" },
            { type: "image", src: "assets/Rising_Stars/4.jpeg" },
            { type: "image", src: "assets/Rising_Stars/5.jpeg" },
            { type: "image", src: "assets/Rising_Stars/6.jpeg" },
            { type: "image", src: "assets/Rising_Stars/7.jpeg" },
            { type: "image", src: "assets/Rising_Stars/8.jpeg" },
            { type: "image", src: "assets/Rising_Stars/9.jpeg" },
            { type: "image", src: "assets/Rising_Stars/11.jpeg" }
        ]
    },
    {
        title: "Teachers Day",
        desc: "Celebration",
        media: [
            { type: "image", src: "assets/Teachers_day/1.jpeg" },
            { type: "video", src: "assets/Teachers_day/video.mp4" },
            { type: "image", src: "assets/Teachers_day/2.jpeg" },
            { type: "image", src: "assets/Teachers_day/3.jpeg" },
            { type: "image", src: "assets/Teachers_day/4.jpeg" },
            { type: "image", src: "assets/Teachers_day/5.jpeg" }
        ]
    },
    {
        title: "Recent Trends in ENTC",
        desc: "Seminar session",
        media: [
            { type: "image", src: "assets/Trends_Seminar/1.jpeg" },
            { type: "image", src: "assets/Trends_Seminar/2.jpeg" },
            { type: "image", src: "assets/Trends_Seminar/3.jpeg" },
            { type: "image", src: "assets/Trends_Seminar/4.jpeg" }
        ]
    },
    {
        title: "onboarding ceremony",
        desc: "Celebration",
        media: [
            { type: "image", src: "assets/onboarding/5.jpg"},
            { type: "video", src: "assets/onboarding/video.MOV" },
            { type: "image", src: "assets/onboarding/1.jpg" },
            { type: "image", src: "assets/onboarding/2.jpg" },
            { type: "image", src: "assets/onboarding/3.jpg" },
            { type: "image", src: "assets/onboarding/4.jpg" }
        ]
    },

    {
        title: "Meditation Session",
        desc: "Session for mental well-being",
        media: [
            { type: "image", src: "assets/Meditation/img4.jpeg"},
            { type: "image", src: "assets/Meditation/img2.jpeg" },
            { type: "image", src: "assets/Meditation/img3.jpeg" },
            { type: "image", src: "assets/Meditation/img1.jpeg" },
        ]
    }
];

let currentEvent = 0;
let currentSlide = 0;

function openEvent(index) {
    currentEvent = index;
    currentSlide = 0;
    document.getElementById("eventModal").classList.add("active");
    updateSlider();
}

function closeEvent() {
    document.getElementById("eventModal").classList.remove("active");
}

function updateSlider() {
    const event = eventsData[currentEvent];
    const item = event.media[currentSlide];
    const container = document.getElementById("modalMedia");

    container.innerHTML = "";

    if (item.type === "image") {
        container.innerHTML = `<img src="${item.src}">`;
    } else {
        container.innerHTML = `<video src="${item.src}" controls autoplay></video>`;
    }

    document.getElementById("modalTitle").innerText = event.title;
    document.getElementById("modalDesc").innerText = event.desc;
}

function nextSlide() {
    const event = eventsData[currentEvent];
    currentSlide = (currentSlide + 1) % event.media.length;
    updateSlider();
}

function prevSlide() {
    const event = eventsData[currentEvent];
    currentSlide =
        (currentSlide - 1 + event.media.length) % event.media.length;
    updateSlider();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.2 });

document.querySelectorAll(".section, .domain-card, .club-card, .team-card")
    .forEach(el => {
        el.classList.add("fade-in");
        observer.observe(el);
    });