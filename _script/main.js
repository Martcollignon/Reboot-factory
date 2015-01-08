$(document).ready(function(){

/* SCRIPT AUTOCOMPLETE LISTE */

	var data = [
				"thon",
				"carotte",
				"steak",
				"eau",
				"coca"
				];
	  
	$( "#produit" ).autocomplete({
	  source:data,
	  autoFocus: true ,

	});

	$('.list--element').click(function(){
		$(this).remove();
	});

});