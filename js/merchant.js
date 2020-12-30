$( document ).ready(function() {
    //******************* Richiamo funzioni Carousel
    $('.prev').click(function() {
        prevImg();
    });

    $('.next').click(function() {
        nextImg();
    });

    $(document).keydown(function (event) {
		if (event.keyCode == 39) {
			nextImg();
		} else if (event.keyCode == 37) {
			prevImg();
		}
    });

    //*********** Collapse Product
    var coll = $(".collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
        });
    }
});

//************FUNZIONI MERCHANT
// *******Funzione freccia destra (avanti)
function nextImg() {
    var activeImg = $('.images img.active'); //Imposto variabili
    var cerchio = $('.nav i.active');

    activeImg.removeClass('active'); //Rimuovo classe active
    cerchio.removeClass('active');

    if (activeImg.hasClass('last')) {  //Aggiungo active al successivo con if per l'ultimo
        $('.images img.first').addClass('active');
        $('.nav i.first').addClass('active');
    } else {
        activeImg.next().addClass('active');
        cerchio.next().addClass('active');
    }
};

// ********Funzione freccia sinistra (indietro)
function prevImg() {
    var activeImg = $('.images img.active');  //Imposto variabili
    var cerchio = $('.nav i.active');

    activeImg.removeClass('active');  //Rimuovo classe active
    cerchio.removeClass('active');

    if (activeImg.hasClass('first')) {  //Aggiungo active al precedente con if per il primo
        $('.images img.last').addClass('active');
        $('.nav i.last').addClass('active');
    } else {
        activeImg.prev().addClass('active');
        cerchio.prev().addClass('active');
    }
};

// ********Funzione per cambiare foto al click su pallino
$(function() {
    $('.nav i').click(function () {
		$('.active').removeClass('active');
		let circleDot = $(this).index();
		$(this).addClass('active');
		$('img').eq(circleDot).addClass('active');
	})
});

// ********input
$(".dec").click(function() {
    var input_el = $(this).next('input');
    if (input_el.val() > 0) {
        var value = input_el.val()-1;
    }
    input_el.val(value);
});


$(".inc").click(function() {
    var input_el = $(this).prev('input');
    var value = input_el.val()*1+1;
    input_el.val(value);
});
