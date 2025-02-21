document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".slide-main", {
        y: -100, // Move para cima 100px
        opacity: 0, // Opcional: faz desaparecer enquanto sobe
        scrollTrigger: {
            trigger: "body", // A animação ocorre com o scroll do body
            start: "top+=200 top", // Começa após 100px de rolagem
            end: "top+=500 top", // Termina após 300px de rolagem
            scrub: true, // Suaviza a animação com o scroll
        }
    });

    gsap.to(".image", {
        width: "300px",  // Faz a imagem crescer até 300px
        opacity: 1,      // Faz ela aparecer
        duration: 1.5,
        scrollTrigger: {
            trigger: ".about-container",  // Corrigido para a seção correta
            start: "top 80%",  // Começa quando a seção estiver 80% visível
            end: "top 30%",
            scrub: true
        }
    });

    gsap.to(".title", {
        x: "-150px", // Move o título para a esquerda
        opacity: 0.7,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".about-container",
            start: "top 80%",
            end: "top 30%",
            scrub: true
        }
    });

    gsap.to(".description", {
        x: "150px", // Move o texto para a direita
        opacity: 0.7,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".about-container",
            start: "top 80%",
            end: "top 30%",
            scrub: true
        }
    });


    gsap.from(".teme-element:first-child", {
        x: "-200px", // Move para a esquerda
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".teme-elements",
            start: "top 50%",
            end: "top 10%",
            scrub: true
        }
    });

    gsap.from(".teme-element:last-child", {
        x: "200px", // Move para a direita
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".teme-elements",
            start: "top 50%",
            end: "top 10%",
            scrub: true
        }
    });


    gsap.set(".white-section", { opacity: 0, scaleY: 0.5 });

    gsap.to(".white-section", {
        scaleY: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".white-section",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
        }
    });

    // gsap.to(".faq-container", {
    //     x: "165px", // Move o título para a esquerda
    //     opacity: 0.7,
    //     duration: 1.5,
    //     scrollTrigger: {
    //         trigger: ".faq-container",
    //         start: "top 80%",
    //         end: "top 30%",
    //         scrub: true
    //     }
    // });

    gsap.fromTo(".services-link",
        { opacity: 0, x: -100 },
        {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".services-link",
                start: "top 80%", // Inicia quando 80% do elemento entrar na tela
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".services-elements",
        { opacity: 0, x: 100 },
        {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".services-elements",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo(".contact", 
        { opacity: 0, y: 100 }, 
        {
            opacity: 1, 
            y: 0, 
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".contact",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Animação para os elementos de contato (deslizam da esquerda)
    gsap.fromTo(".contact-organic .contact-element", 
        { opacity: 0, x: -50 }, 
        {
            opacity: 1, 
            x: 0, 
            duration: 1,
            ease: "power3.out",
            stagger: 0.3, // Efeito de "delay" entre os elementos
            scrollTrigger: {
                trigger: ".contact-organic",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Animação para as redes sociais (deslizam de baixo para cima)
    gsap.fromTo(".social-icon", 
        { opacity: 0, y: 50 }, 
        {
            opacity: 1, 
            y: 0, 
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".social-icon",
                start: "top 100%",
                toggleActions: "play none none reverse"
            }
        }
    );


    const serviceLinks = document.querySelectorAll(".service-link");
    const serviceElements = document.querySelectorAll(".services-element");

    let lastIndex = 0;

    serviceLinks.forEach((link, index) => {
        link.addEventListener("click", () => {
            if (index === lastIndex) return;

            // Remove a classe 'active' dos elementos anteriores
            serviceElements.forEach((element) => element.classList.remove("active"));
            serviceLinks.forEach((el) => el.classList.remove("active")); // Removendo o destaque do link anterior

            const currentService = serviceElements[index];

            // Alterar a posição do background dinamicamente para criar o efeito de deslocamento
            if (index > lastIndex) {
                currentService.style.backgroundPosition = "center right";
            } else {
                currentService.style.backgroundPosition = "center left";
            }

            setTimeout(() => {
                currentService.style.backgroundPosition = "center center";
                currentService.classList.add("active");
                serviceLinks[index].classList.add("active"); // Destacar o link selecionado
            }, 50);

            lastIndex = index;
        });
    });

    // Exibir a primeira div por padrão e destacar o primeiro link
    serviceElements[0].classList.add("active");
    serviceLinks[0].classList.add("active");




    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const arrow = question.querySelector(".arrow");

            questions.forEach(item => {
                const otherAnswer = item.nextElementSibling;
                const otherArrow = item.querySelector(".arrow");

                if (otherAnswer !== answer && otherAnswer.style.display === "block") {
                    gsap.to(otherAnswer, {
                        height: 0, opacity: 0, duration: 0.4, onComplete: () => {
                            otherAnswer.style.display = "none";
                            otherArrow.textContent = "↓";
                        }
                    });
                }
            });

            if (answer.style.display === "block") {
                gsap.to(answer, {
                    height: 0, opacity: 0, duration: 0.4, onComplete: () => {
                        answer.style.display = "none";
                        arrow.textContent = "↓";
                    }
                });
            } else {
                answer.style.display = "block";
                gsap.fromTo(answer, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.4 });
                arrow.textContent = "↑";
            }
        });
    });


});