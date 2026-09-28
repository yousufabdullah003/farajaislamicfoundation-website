const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("nav-active");});

    const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("nav-active");
    });
});

const chatToggle = document.querySelector("#chat-toggle");
const chatWindow = document.querySelector("#chat-window");
const chatClose = document.querySelector("#chat-close");
const chatQuestions = document.querySelectorAll("#chat-questions li");
const chatAnswer = document.querySelector("#chat-answer");

chatToggle.addEventListener("click", function () {
    chatWindow.classList.remove("hidden");
});

chatClose.addEventListener("click", function () {
    chatWindow.classList.add("hidden");
});

const chatMessages = document.querySelector("#chat-messages");

chatQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const userMsg = document.createElement("div");
        userMsg.className = "user-msg";
        userMsg.textContent = question.textContent;
        chatMessages.appendChild(userMsg);

        const botMsg = document.createElement("div");
        botMsg.className = "bot-msg";
        botMsg.textContent = question.dataset.answer;
        chatMessages.appendChild(botMsg);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
});