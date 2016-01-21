$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$jackpot = document.getElementById("jackpot");
$autoclic = document.getElementById("autoclic");
$score = document.getElementById("score");
score = 0;
nbMultiplicateur = 1;
nbJackpot =  1;
nbAutoclic = 1;

function afficherScore() {
  $score.innerHTML =  score;
}

function afficherNbMultiplicateur() {
  $multiplicateur.innerHTML = "Poissons x" + nbMultiplicateur + " au clic</br> (prix prochain lvl : " + prix() + "P)";
}

function afficherJackpot() {
  $jackpot.innerHTML = "Poissons 1+ +" + nbJackpot + " au clic</br> (prix prochain lvl : " + prixDeux() + "P)";
}

function afficherAutoclic() {
  $autoclic.innerHTML = "Poissons +" + nbAutoclic + " par second</br> (prix prochain lvl : " + prixTrois() + "P)";
}

function clic() {
  score = score + nbMultiplicateur  + nbJackpot  ;
  afficherScore();
}

function prix() {
  return 20 * nbMultiplicateur * nbMultiplicateur;
}

function acheterMultiplicateur() {
  if (score >= prix()) {
    score = score - prix();
    nbMultiplicateur = nbMultiplicateur + 1;
    afficherNbMultiplicateur();
    afficherScore();
  } else {
    alert("Pas assez de poisson pour acheter ce booster !");
  }
}

function prixDeux() {
  return 25 * nbJackpot ;
}

function acheterJackpot() {
  if (score >= prixDeux()) {
    score = score - prixDeux();
    nbJackpot = nbJackpot + 1;
     
    afficherJackpot();
    afficherScore();
  } else {
    alert("Pas assez de poisson pour acheter ce booster !");
  }
}

function prixTrois() {
  return 15 * nbAutoclic + nbAutoclic ;
}


function acheterAutoclic() {
  if (score >= prixTrois()) {
    score = score - prixTrois();
     nbAutoclic = setTimeout(autoClic, 3600) + 1;
   
     
   afficherAutoclic();
    afficherScore();
  } else {
    alert("Pas assez de poisson pour acheter ce booster !");
  }
}


function autoClic() {
    if (score){
        score = score + nbAutoclic  ;
        setTimeout(autoClic, 3600)
        
    afficherScore();
    
   
    }else {
  
  afficherScore();
  
    }
   
}

setTimeout(autoClic);


window.onload=function()
{
	// Les coordonnées de chaque coin du conteneur
	var bottomLeft=[10,100];
	var bottomRight=[900,100];

	
	
	// On crée un objet littéral pour stocker nos valeurs
	var objet=
	{
		// Notre div à déplacer
		'div': document.getElementById('moveDiv'),
		
		// La position vers laquelle elle se dirige
		'position': bottomRight,
		
		// Et une fonction pour la faire bouger !
		'move': function()
		{
			this.div.style.left=this.position[0]+'px';
			this.div.style.top=this.position[1]+'px';
		}
	}
		
	var navigatorsProperties=['transitionend','OTransitionEnd','webkitTransitionEnd'];				
	for(var i in navigatorsProperties)
	{
		objet.div.addEventListener(navigatorsProperties[i],function(e)
		{
			/*Lorsque la div a fini son déplacement, on lui
			indique un autre point à atteindre*/
			switch(objet.position)
			{
				
				
				case bottomRight:
					objet.position=bottomLeft;
				break;
				
				case bottomLeft:
					objet.position=bottomRight;
				break;
				
				
			}
			
			// Et on lui demande de se rendre à ce point !
			objet.move();
		},false);
	}
	
	// On lance le déplacement de notre div !
	objet.move();
};


$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$jackpot.onclick = acheterJackpot;
$autoclic.onclick = acheterAutoclic;
afficherScore();
afficherNbMultiplicateur();
afficherJackpot();
afficherAutoclic();