
function estPremier(n) {

    for (let i = 2; i <= n - 1; i++)
      if ((n % i == 0) || (n <= 1) ) return false;
    return true;
  }

function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        somme = a+b
        return somme; 
    } 
    else {
        return false;
    }
}

console.log(sommeNombresPremiers(3, 5)); 
console.log(sommeNombresPremiers(7, 12));
console.log(sommeNombresPremiers(11, 13));