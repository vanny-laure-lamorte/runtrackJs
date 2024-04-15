function bisextile(année) {
    if ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0) {
        return true; 
    } else {
        return false;
    }
}

const année1 = 2024;
const année2 = 2023;

console.log(bisextile(année1)); 
console.log(bisextile(année2)); 

