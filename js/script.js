// definisco le variabili con le quali poi andrò a manipolare il codice HTML
const ex1Out = document.getElementById("ex1Out");
const ex2Out = document.getElementById("ex2Out");
const ex3Out = document.getElementById("ex3Out");
const ex4Out = document.getElementById("ex4Out");

// definisco le variabili dei bottoni che attivano le attività
const ex1Btn = document.getElementById("ex1Btn");
const ex2Btn = document.getElementById("ex2Btn");
const ex3Btn = document.getElementById("ex3Btn");
const ex4Btn = document.getElementById("ex4Btn");

// funzione per verificare se il valore immesso è un numero
const checkNumb = (exNumb, numb1, numb2 = 0) => {
  if (isNaN(numb1) || isNaN(numb2)) {
    alert("Errore");
    document.getElementById(`ex${exNumb}Out`).innerHTML =
      "Inserire solo valori numerici";
    return false;
  } else {
    return true;
  }
};

// esercizio 1
const ex1 = () => {
  let numb1 = parseInt(prompt("Inserisci primo numero"));
  let numb2 = parseInt(prompt("Inserisci secondo numero"));
  let exNumb = 1;

  if (checkNumb(exNumb, numb1, numb2)) {
    if (numb1 > numb2) {
      ex1Out.innerHTML = numb1;
    } else if (numb1 < numb2) {
      ex1Out.innerHTML = numb2;
    } else {
      ex1Out.innerHTML = "I numeri sono  uguali";
    }
  }
};

// esercizio 2
const ex2 = () => {
  let word1 = prompt("Digita la prima parola");
  let word2 = prompt("Digita la seconda parola");
  let exNumb = 2;

  if (word1.length > word2.length) {
    ex2Out.innerHTML = `La parola più corta è '${word2}' e quella più lunga è '${word1}'`;
  } else if (word1.length < word2.length) {
    ex2Out.innerHTML = `La parola più corta è '${word1}' e quella più lunga è '${word2}'`;
  } else {
    ex2Out.innerHTML = `Le due parole hanno lunghezza uguale`;
  }
};

// esercizio 3
const ex3 = () => {
  let numb = parseInt(prompt("Inserisci un numero"));
  let pariDispari = numb % 2;
  let exNumb = 3;

  if (checkNumb(exNumb, numb)) {
    if (pariDispari == 0) {
      ex3Out.innerHTML = `Il numero immesso è ${numb} ed è PARI`;
    } else {
      ex3Out.innerHTML = `Il numero immesso è ${numb} ed è DISPARI, quindi ${
        numb + 1
      }`;
    }
  }
};

// esercizio 4
const ex4 = () => {
  let numb = parseInt(prompt("Inserisci un numero"));
  let random = Math.floor(Math.random() * 10);
  let exNumb = 4;

  if (checkNumb(exNumb, numb)) {
    ex4Out.innerHTML = `Il numero immesso è ${numb}, il numero random è ${random}, la loro somma è ${
      numb + random
    }`;
  }
};

// definisco i trigger
ex1Btn.addEventListener("click", ex1);
ex2Btn.addEventListener("click", ex2);
ex3Btn.addEventListener("click", ex3);
ex4Btn.addEventListener("click", ex4);
