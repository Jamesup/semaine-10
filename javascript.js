$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$score = document.getElementById("score");
score = 390;
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

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
afficherScore();
afficherNbMultiplicateur();
