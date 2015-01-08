

	
	var input = document.getElementById("addproduct");
	var list = document.getElementById("maListe");	
	
	//si il y a quelque chose dans le local storage on l'affiche
	if ( localStorage['list'] ) {
		list.innerHTML = localStorage.getItem("list");
	}
	
	//on valide le formulaire
	function addValueToList(event) {
		// récupérer ce qu'on a tapé dans l'input		
		var valeur = input.value;
		
		// si il y a du contenu...
		if ( valeur.length > 0 ) {
			// vider l'input
			input.value = "";
		
			// ajouter à la liste la valeur en question
			list.innerHTML += '<li class="list--element">' +valeur+ '<a class="list--small list--small__delete" href="#">Supprimer</a></li>';
		
			//sauver le contenu
			localStorage.setItem("list", list.innerHTML);

		}
		
		// toujours remettre le focus dans le champs
		input.focus();
		
		// empêcher le formulaire d'envoyer sur une autre page (ou de recharger celle-ci)
		event.preventDefault();

		$('.list--small__delete').click(function(){
			$(this).parent().remove();
			localStorage.removeItem();
		});
	}

	