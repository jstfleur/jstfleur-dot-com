function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});




const cursor = document.querySelector('.cursor');

const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
};

window.addEventListener('mousemove', editCursor);

const links = document.querySelectorAll('a, .hover-this')

links.forEach(link => {
    link.addEventListener('mouseenter', e => {
        cursor.classList.add('enlarged')
    })
    link.addEventListener('mouseout', e => {
        cursor.classList.remove('enlarged')
    })
});








$(document).ready(function(){
    $('.accordion-list > li > .answer').hide();
    $('.imageContainer > li > img').hide();

    
    $('.accordion-list > li > h3').click(function() {
        if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).parent().addClass("active").find(".answer").slideDown();
        }

        return false;
    });
    
    
    $('.accordion-list > .project1 > h3').click(function() {
        if ($(this).parent().hasClass("active")) {
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li img").hide();
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li.project1 img").show();
            
        } else {
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li.project1 img").hide();
        }

        return false;
    });
    
    $('.accordion-list > .project2 > h3').click(function() {
        if ($(this).parent().hasClass("active")) {
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li img").hide();
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li.project2 img").show();
            
        } else {
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li.project2 img").hide();
        }

        return false;
    });
    
    $('.accordion-list > .project3 > h3').click(function() {
        if ($(this).parent().hasClass("active")) {
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li img").hide();
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li.project3 img").show();
            
        } else {
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li.project3 img").hide();
        }

        return false;
    });
    
    $('.accordion-list > .project4 > h3').click(function() {
        if ($(this).parent().hasClass("active")) {
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li img").hide();
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li.project4 img").show();
            
        } else {
            $(this).parent().parent(".accordion-list").siblings(".imageContainer").find("li.project4 img").hide();
        }

        return false;
    });
    
  
});




































