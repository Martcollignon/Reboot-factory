$(document).ready(function(){

// Modifier la toolbar au scroll

function init() {

    window.addEventListener('scroll', function(e){

        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            pointY = 20,
            toolbar = $(".toolbar"),
            toolbarElement = $(".toolbar--element");
            input = $(".input"),
            planH1 = $(".plan--h1");

        if (distanceY > pointY) {
            toolbar.addClass("scroll");
            toolbarElement.addClass("scroll");
            input.addClass("scroll");
            planH1.addClass("scroll");
        } else {
                toolbar.removeClass("scroll");
                toolbarElement.removeClass("scroll");
                input.removeClass("scroll");
                planH1.removeClass("scroll");
        }
    });
}

window.onload = init();

// Autocomplete des inputs

/*
	var data = [
				"thon",
				"carotte",
				"steak",
				"eau",
				"coca",
				"cotelette de poule",
				"saumon",
				"pain blanc"
				];
	  
	$( "#addproduct" ).autocomplete({
	   source:data,
	   autoFocus: true ,

	 });
*/	
		

		$('.btn--check').toggleClass("btn--check__translate");
		$('.check').toggleClass("pouf");

        if ($(".list--element--buy").hide()) {
            $(".list--element--buy").show();
        } else {
        	$(".list--element--buy").hide();
        }

// On coche/décoche les éléments de la liste à même le plan

        $('.list--element__plan').click(function(){
			$(this).children().toggleClass("checked");
			// $('.section--banner').addClass("section--banner__open");
		});
	});

// Supprimer element liste

/*
	$('.list--small__delete').click(function(){
		$(this).parent().remove();
		localStorage.removeItem();
	});
*/

// Ajout d'une classe achetée/pas achetée

	$(".btn--check").on("click", function(){
	    var buy = $(".list--plan").children().not(".list--element--buy").first();
	    buy.children("input").prop('checked', true);
	    buy.addClass("list--element--buy").hide();
	    buy.children().addClass("checked");
	});

	$(".check").on("click", function(){
	    if($(this).prop('checked')){
	        $(this).parent().addClass("list--element--buy").hide();
	    } else {
	        $(this).parent().removeClass("list--element--buy").show();
	    }
	});

// fait coulisser les inputs entre les sections
	$(".btn--picto__plus").on("click", function(){
		$(".input__add").addClass('down')
	});

});