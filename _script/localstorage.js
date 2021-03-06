	

	
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
			// list.innerHTML += '<li>'+valeur+'<button class="remove">Delete</button></li>';
			list.innerHTML += $('<li/>').addClass('list--element').text(valeur)+$('<button/>').addClass('list--small list--small__delete');

		
			//sauver le contenu
			localStorage.setItem("list", list.innerHTML);

		}
		
		// toujours remettre le focus dans le champs
		input.focus();
		
		// empêcher le formulaire d'envoyer sur une autre page (ou de recharger celle-ci)
		event.preventDefault();
	}



// CODE MR.DELFOSSE


	var structData=[ ];

$.each(structData,function(index,obj){
	//console.log(obj);
	ulCreate=$("<ul/>").addClass("list__article").text(obj.name);
		
	//console.log(ulCreate);
		$.each(obj.contents,function(i,ingredient){
		liCreate=$("<li/>").text(ingredient).addClass("list--element");
		ulCreate.append(liCreate);
	})
		//console.log(ulCreate);
		$("#maListe").append(ulCreate);
	})
//console.log(JSON.stringify(structData));
