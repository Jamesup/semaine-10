$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$score = document.getElementById("score");
score = 0;
nbMultiplicateur = 1;

function afficherScore() {
  $score.innerHTML =  score;
}

function afficherNbMultiplicateur() {
  $multiplicateur.innerHTML = "Poissons x" + nbMultiplicateur + " (prix prochain lvl : " + prix() + "P)";
}

function clic() {
  score = score + nbMultiplicateur;
  afficherScore();
}

function prix() {
  return 50 * nbMultiplicateur * nbMultiplicateur;
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


function autoClic() {
    if (score >= 200){
        score = score + 1 ;
        setTimeout(autoClic, 3000);
        
    afficherScore();
    
   
    }else {
  
  afficherScore();
  setTimeout(autoClic, 3000);
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
afficherScore();
afficherNbMultiplicateur();
