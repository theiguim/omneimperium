document.addEventListener("DOMContentLoaded", () => {

    ScrollTrigger.defaults({
        markers: false, 
        mobile: true,
    });

    ScrollTrigger.refresh();

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".slide-main", {
        y: -100, 
        opacity: 0, 
        scrollTrigger: {
            trigger: "body", 
            start: "top+=200 top", 
            end: "top+=500 top", 
            scrub: true, 
        }
    });

    gsap.to(".image", {
        width: "300px",  
        opacity: 1,     
        duration: 1.5,
        scrollTrigger: {
            trigger: ".about-container",  
            start: "top 80%",  
            end: "top 30%",
            scrub: true
        }
    });

    gsap.to(".title", {
        x: "-150px", 
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".about-container",
            start: "top 80%",
            end: "top 30%",
            scrub: true
        }
    });

    gsap.to(".description", {
        x: "150px", 
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".about-container",
            start: "top 80%",
            end: "top 30%",
            scrub: true
        }
    });


    gsap.from(".teme-element:first-child", {
        x: "-200px", 
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
        x: "200px", 
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

    gsap.fromTo(".services-link",
        { opacity: 0, x: -100 },
        {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".services-link",
                start: "top 80%", 
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
    gsap.fromTo(".contact-organic .contact-element", 
        { opacity: 0, x: -50 }, 
        {
            opacity: 1, 
            x: 0, 
            duration: 1,
            ease: "power3.out",
            stagger: 0.3, 
            scrollTrigger: {
                trigger: ".contact-organic",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );

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


    const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector(".arrow");

        questions.forEach(item => {
            const otherAnswer = item.nextElementSibling;
            const otherArrow = item.querySelector(".arrow");

            if (otherAnswer !== answer && otherAnswer.style.maxHeight !== "0px") {
                gsap.to(otherAnswer, {
                    maxHeight: 0, opacity: 0, duration: 0.4, onComplete: () => {
                        otherAnswer.style.display = "none";
                        otherArrow.textContent = "↓";
                    }
                });
            }
        });

        if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
            gsap.to(answer, {
                maxHeight: 0, opacity: 0, duration: 0.4, onComplete: () => {
                    answer.style.display = "none";
                    arrow.textContent = "↓";
                }
            });
        } else {
            answer.style.display = "block";
            gsap.fromTo(answer, { maxHeight: 0, opacity: 0 }, { maxHeight: "1000px", opacity: 1, duration: 0.4 });
            arrow.textContent = "↑";
        }
    });
});


});