$(document).ready(function(){

// Autocomplete

	// var data = [
	// 			"thon",
	// 			"carotte",
	// 			"steak",
	// 			"eau",
	// 			"coca",
	// 			"cotelette de poule",
	// 			"saumon",
	// 			"pain blanc"
	// 			];
	  
	// $( "#addproduct" ).autocomplete({
	//   source:data,
	//   autoFocus: true ,

	// });

	$('.section__banner').click(function(){
		$('.section__banner').toggleClass("active");
	});

// Supprimer element liste

	// $('.list--small__delete').click(function(){
	// 	$(this).parent().remove();
	// 	localStorage.removeItem();
	// });

//

// Naviguer avec les listes dans le plan

	$(".course").on("click", function(){
    
        var el = $(".liste").children().not(".liste__el--achete").first();
        el.children("input").prop('checked', true);
        el.addClass("liste__el--achete").hide();
        
    });
    
    $(".check").on("click", function(){
        if($(this).prop('checked')){
            $(this).parent().addClass("liste__el--achete").hide();
        } else {
            $(this).parent().removeClass("liste__el--achete").show();
        }
    });
    
    $( ".afficher" ).toggle(function() {
      $(".liste__el--achete").show();
    }, function() {
      $(".liste__el--achete").hide();
    });
    
    $(".delete").on("click", function(){
        $(this).parent().remove();
    });

});