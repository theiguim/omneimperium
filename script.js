gsap.registerPlugin(ScrollTrigger);

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
        start: "top 80%",
        end: "top 50%",
        scrub: true
    }
});

gsap.from(".teme-element:last-child", {
    x: "200px", // Move para a direita
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".teme-elements",
        start: "top 80%",
        end: "top 50%",
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


document.querySelectorAll('.service-link').forEach((link, index) => {
    link.addEventListener('click', () => {
      // Remove a classe 'active' de todas as divs
      document.querySelectorAll('.services-element').forEach(element => {
        element.classList.remove('active');
      });
  
      // Adiciona a classe 'active' na div correspondente ao título clicado
      document.getElementById(`service-${index + 1}`).classList.add('active');
    });
  });
  
  // Para exibir o primeiro item por padrão ao carregar
  document.getElementById('service-1').classList.add('active');



  const serviceLinks = document.querySelectorAll(".service-link");
const serviceElements = document.querySelectorAll(".services-element");

let lastIndex = 0; // Para detectar se estamos voltando à div anterior

serviceLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    if (index === lastIndex) return; // Se clicar no mesmo, não faz nada

    // Remove a classe 'active' da anterior
    serviceElements.forEach((element) => {
      element.classList.remove("active");
    });

    const currentService = serviceElements[index];

    // Alterar a posição do background dinamicamente para criar o efeito de deslocamento
    if (index > lastIndex) {
      currentService.style.backgroundPosition = "center right"; // Indo para frente
    } else {
      currentService.style.backgroundPosition = "center left"; // Indo para trás
    }

    // Adiciona um pequeno delay para garantir a transição
    setTimeout(() => {
      currentService.style.backgroundPosition = "center center"; // Retorna ao centro suavemente
      currentService.classList.add("active");
    }, 50);

    lastIndex = index; // Atualiza a última posição clicada
  });
});

// Exibir a primeira div por padrão
serviceElements[0].classList.add("active");
  