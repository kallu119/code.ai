document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to code.ai!");
    
    const form = document.querySelector("#contact form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We will get back to you soon.");
        form.reset();
    });
});
