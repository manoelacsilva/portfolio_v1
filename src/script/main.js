AOS.init();

// Título h1 - Hero

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
let techs = document.querySelector('.techs');
let modalImgProjeto = document.querySelector('.modal-img-projeto');
let codeGithub = document.querySelector('#button-github-modal');
let deployVercel = document.querySelector('#button-deploy-modal');

const projetos = [
    {
        title: 'Efood',
        src: './dist/images/efood.png',
        text: 'Este é o Efood, um e-commerce de restaurantes para delivery. A página possui 6 estabelecimentos, cada um com seu respectivo cardápio.',
        tech: 'Feito com: React, TypeScript, Styled-Components, Redux, Yup, Formik e Prettier.',
        code: 'https://github.com/manoelacsilva/efood_tarefa_final_ebac',
        deploy: 'https://mcs-efood-tarefa-final-ebac.vercel.app/'
    },
    {
        title: 'EPLAY',
        src: './dist/images/EPLAY.png',
        text: 'Este é o EPLAY, um e-commerce para compra de jogos on-line, tudo muito dinâmico e prático para facilitar a experiência do usuário.',
        tech: 'Feito com: React, TypeScript, Styled-Components, Redux, Yup, Formik e Eslint.',
        code: 'https://github.com/manoelacsilva/eplay_projeto_final_ebac',
        deploy: 'https://mcs-eplay-projeto-final-ebac.vercel.app/'
    },
    {
        title: 'Minhas Tarefas',
        src: './dist/images/Minhas-Tarefas.png',
        text: 'Esta To-Do List possui a função de organizar tarefas, podendo criar, editar, remover, concluir e buscar tarefas a qualquer momento.',
        tech: 'Feito com: React, TypeScript, Styled-Components, Redux, Eslint, EditorConfig e Prettier.',
        code: 'https://github.com/manoelacsilva/minhas-tarefas',
        deploy: 'https://mcs-minhas-tarefas.vercel.app/'
    },
    {
        title: 'QUIZ - O Próximo Mundo',
        src: './dist/images/O Próximo Mundo _ QUIZ.png',
        text: 'Este QUIZ é sobre "O Próximo Mundo", uma série de animação brasileira. Elaborei 14 perguntas que só quem é fã consegue responder sem errar! Quer tentar gabaritar?',
        tech: 'Feito com: Git, JS puro, CSS3 e HTML5.',
        code: 'https://github.com/manoelacsilva/quiz_opm',
        deploy: 'https://mcs-quiz-opm.vercel.app/'
    },
    {
        title: 'Jogo da Memória - Hora de Aventura',
        src: './dist/images/Jogo da Memória _ Login.png',
        text: 'Este jogo só é acessível após inserir um nickname de pelo menos 2 caracteres. Para vencer, é preciso encontrar os 15 pares. Divirta-se e jogue quantas vezes quiser!',
        tech: 'Feito com: Git, CSS3, JS puro e HTML5.',
        code: 'https://github.com/manoelacsilva/jogo_hora_de_aventura',
        deploy: 'https://mcs-jogo-hora-de-aventura.vercel.app/'
    },
    {
        title: 'Clone da Landing Page da Disney+',
        src: './dist/images/DisneyPlusClone.png',
        text: 'Esta Landing Page é um clone do site da Disney+. Usei JavaScript para criar a dinâmica do header, nas abas da section de atrações e para fazer o accordion da section FAQ.',
        tech: 'Feito com: Git, HTML5, SCSS, Gulp e JS.',
        code: 'https://github.com/manoelacsilva/disneyplus_clone',
        deploy: 'https://disneyplus-clone-theta.vercel.app/'
    },
    {
        title: 'Landing Page do Fuoco Degli Dei',
        src: './dist/images/Fuoco Degli Dei _ Ristorante Italiano.png',
        text: 'Criei o site do Fuoco Degli Dei, meu fictício ristorante italiano. Ele é composto por um carousel de imagens, sections sobre, eventos e cardápio e um form para contato.',
        tech: 'Feito com: Git, HTML5, Bootstrap, CSS3 e jQuery (para colocar máscara no campo "Seu telefone").',
        code: 'https://github.com/manoelacsilva/fuocodeglidei_bs',
        deploy: 'https://mcs-fuocodeglidei-bs.vercel.app/'
    },
    {
        title: 'Expert Notes',
        src: './dist/images/Expert-Notes.png',
        text: 'Este software é um bloco de notas que permite criar notas por meio de digitação ou gravação de aúdio, usando uma API externa para reconhecimento de voz e transcrição.',
        tech: 'Feito com: React, TypeScript, TailwindCSS, Vite, Radix UI e Sonner.',
        code: 'https://github.com/manoelacsilva/nlw-expert-notes',
        deploy: 'https://mcs-nlw-expert-notes.vercel.app/'
    },
    {
        title: 'Calculadora Aritmética VueJS',
        src: './dist/images/Calculadora VueJS (1).png',
        text: 'Com esta calculadora é possível realizar cálculos de adição, subtração, multiplicação e divisão. Ao adicionar os valores, o resultado aparece automaticamente.',
        tech: 'Feito com: Git, Vue + Vite, JS, CSS3 e HTML5.',
        code: 'https://github.com/manoelacsilva/calculadora_vue',
        deploy: 'https://mcs-calculadora-vue.vercel.app/'
    },
]

const abrirModal = () => {
    modalProjetos.classList.add('modal-visivel')
};

const fecharModal = () => {
    modalProjetos.classList.remove('modal-visivel')
};

const setProjeto = (title, src, text, tech, code, deploy) => {
    titulo.textContent = title
    modalImgProjeto.src = src
    texto.textContent = text
    techs.textContent = tech
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
            projetoAtual.tech,
            projetoAtual.code,
            projetoAtual.deploy
        )
        abrirModal()
    })
})

buttonFecharModal.addEventListener('click', fecharModal);
modalProjetos.addEventListener('click', fecharModal);

// Botão subir para Hero - Fixo

document.addEventListener('DOMContentLoaded', function() {
    function scrollFunction() {
        let heroSection = document.querySelector(".hero");
        let button = document.querySelector(".voltar-ao-topo");

        if (document.body.scrollTop > heroSection.clientHeight || document.documentElement.scrollTop > heroSection.clientHeight) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    document.querySelector(".voltar-ao-topo").addEventListener("click", function() {
        document.body.scrollTop = 0;          // para navegadores Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
    });

    window.onscroll = function() {
        scrollFunction()
    };
});

// Menu Hamburguer - Mobile

const activeMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('.header .primary-navgation')

activeMenu.addEventListener('click', () => {
    activeMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('active')
})

const menuLinks = document.querySelectorAll('.primary-navgation')


for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            activeMenu.classList.remove('fa-x');
            navMenu.classList.remove('active');
        }
    });
}
