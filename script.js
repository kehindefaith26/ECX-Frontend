// Select all the questions
const faqQuestions = document.querySelectorAll(".faq-question");

// Loop through each question and add event listeners
faqQuestions.forEach((question) => {
    // Click event
    question.addEventListener("click", () => {
        toggleFAQ(question);
    });

    // Keyboard accessibility
    question.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault(); // Prevent default scrolling behavior
            toggleFAQ(question);
        }
    });
});

// Function to toggle FAQ
function toggleFAQ(question) {
    // Close other active FAQ items
    faqQuestions.forEach((otherQuestion) => {
        const otherFaqItem = otherQuestion.parentElement;
        if (otherFaqItem !== question.parentElement) {
            otherFaqItem.classList.remove("active");
            otherFaqItem.querySelector(".faq-answer").classList.remove("visible");
            otherFaqItem.querySelector(".plus-icon").hidden = false;
            otherFaqItem.querySelector(".minus-icon").hidden = true;
            otherQuestion.setAttribute("aria-expanded", "false");
            otherFaqItem.querySelector(".faq-answer").setAttribute("aria-hidden", "true");
        }
    });

    // Toggle the 'active' class on the parent faq-item
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");

    // Toggle visibility of plus and minus icons
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");

    if (faqItem.classList.contains("active")) {
        plusIcon.hidden = true; // Hide plus icon
        minusIcon.hidden = false; // Show minus icon
        question.setAttribute("aria-expanded", "true");
        faqItem.querySelector(".faq-answer").setAttribute("aria-hidden", "false");
    } else {
        plusIcon.hidden = false; // Show plus icon
        minusIcon.hidden = true; // Hide minus icon
        question.setAttribute("aria-expanded", "false");
        faqItem.querySelector(".faq-answer").setAttribute("aria-hidden", "true");
    }

    // Toggle the FAQ answer visibility
    const faqAnswer = faqItem.querySelector(".faq-answer");
    faqAnswer.classList.toggle("visible");
}
