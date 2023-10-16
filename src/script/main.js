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

// Modal - Projetos

const buttonFecharModal = document.querySelector('.fechar');
const modalProjetos = document.querySelector('.modal');
let saibaMais = document.querySelectorAll('.saiba-mais');
let titulo = document.querySelector('.title');
let texto = document.querySelector('.text');
let modalImgProjeto = document.querySelector('.modal-img-projeto');
let codeGithub = document.querySelector('#button-github-modal');
let deployVercel = document.querySelector('#button-deploy-modal');

const projetos = [
    {
        title: 'QUIZ - O Próximo Mundo',
        src: './dist/images/O Próximo Mundo _ QUIZ.png',
        text: 'teste1',
        code: 'https://github.com/manoelacsilva/quiz_opm',
        deploy: 'https://mcs-quiz-opm.vercel.app/'
    },
    {
        title: 'Jogo da Memória - Hora de Aventura',
        src: './dist/images/Jogo da Memória _ Login.png',
        text: 'teste2',
        code: 'https://github.com/manoelacsilva/jogo_hora_de_aventura',
        deploy: 'https://mcs-jogo-hora-de-aventura.vercel.app/'
    },
    {
        title: 'Calculadora IMC ReactJS',
        src: './dist/images/Calculadora IMC _ ReactJS.png',
        text: 'teste3',
        code: 'https://github.com/manoelacsilva/calculadora_imc_react',
        deploy: 'https://mcs-calculadora-imc-react.vercel.app/'
    },
    {
        title: 'Calculadora VueJS',
        src: './dist/images/Calculadora VueJS (1).png',
        text: 'teste4',
        code: 'https://github.com/manoelacsilva/calculadora_vue',
        deploy: 'https://mcs-calculadora-vue.vercel.app/'
    },
    {
        title: 'Clone da Landing Page da Disney+',
        src: './dist/images/Disney+ _ Clone.png',
        text: 'teste5',
        code: 'https://github.com/manoelacsilva/disneyplus_clone',
        deploy: 'https://disneyplus-clone-theta.vercel.app/'
    },
    {
        title: 'Landing Page do Fuoco Degli Dei',
        src: './dist/images/Fuoco Degli Dei _ Ristorante Italiano.png',
        text: 'teste6',
        code: 'https://github.com/manoelacsilva/fuocodeglidei_bs',
        deploy: 'https://mcs-fuocodeglidei-bs.vercel.app/'
    }
]

const abrirModal = () => {
    modalProjetos.classList.add('modal-visivel')
};

const fecharModal = () => {
    modalProjetos.classList.remove('modal-visivel')
};

const setProjeto = (title, src, text, code, deploy) => {
    titulo.textContent = title
    modalImgProjeto.src = src
    texto.textContent = text
    codeGithub.href = code
    deployVercel.href = deploy
};

saibaMais.forEach((projeto, index) => {
    const projetoAtual = projetos[index];

    projeto.addEventListener('click', () => {
        setProjeto(
            projetoAtual.title,
            projetoAtual.src,
            projetoAtual.text,
            projetoAtual.code,
            projetoAtual.deploy
        )
        abrirModal()
    })
})

buttonFecharModal.addEventListener('click', fecharModal);
// modalProjetos.addEventListener('click', fecharModal);