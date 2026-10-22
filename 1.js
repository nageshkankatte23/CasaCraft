// 1. MENU
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.onclick = () => {
    navLinks.classList.toggle("show");
};


// 2. DARK MODE
let darkMode = document.getElementById("darkMode");

darkMode.onclick = () => {
    document.body.classList.toggle("dark");
};


// 3. ABOUT BUTTON
function showAbout() {
    alert("CasaCraft creates beautiful interior designs.");
}


// 4. COUNTER
document.querySelectorAll(".counter").forEach(counter => {
    let number = 0;
    let target = Number(counter.dataset.target);
 
    let timer = setInterval(() => {
        counter.innerText = ++number;

        if (number >= target) {
            clearInterval(timer);
        }
    }, 20);
});


// 5. PROJECT FILTER
let filters = document.querySelectorAll(".filter");
let cards = document.querySelectorAll(".project-card");

filters.forEach(button => {
    button.onclick = () => {
        let type = button.dataset.filter;

        filters.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        cards.forEach(card => {
            card.style.display =
                type == "all" || card.dataset.category == type
                ? "block"
                : "none";
        });
    };
});


// 6. FAVORITE BUTTON
function favorite(button) {
    if (button.innerText == "♡") {
        button.innerText = "♥️";
        button.classList.add("active");
    } else {
        button.innerText = "♡";
        button.classList.remove("active");
    }
}


// 7. VIEW PROJECT
let projectTitle = document.getElementById("projectTitle");
let projectModal = document.getElementById("projectModal");

function viewProject(name) {
    projectTitle.innerText = name;
    projectModal.style.display = "flex";
}


// 8. CLOSE POPUP
function closeModal() {
    projectModal.style.display = "none";
}


// 9. START SIMILAR PROJECT
function contactFromProject() {
    closeModal();

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// 10. CONTACT FORM
let contactForm = document.getElementById("contactForm");

contactForm.onsubmit = function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your inquiry has been received.");

    contactForm.reset();
};