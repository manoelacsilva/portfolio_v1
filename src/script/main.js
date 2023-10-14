AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typed-text");
    const textToType = "Desenvolvedora Front-End";
    let i = 0;

    function typeText() {
        textElement.textContent += textToType.charAt(i);
        i++;
        if (i < textToType.length) {
            setTimeout(typeText, 150); // Ajuste o valor para a velocidade da digitação
        }
    }

    typeText();
});
