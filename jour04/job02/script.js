function jsonValueKey(JSON, clé) { 
    const result = JSON[clé]
    return result
}; 

const json = {
    "name": "La Plateforme", 
    "address": "8 rue d'hozier", 
    "city": "Marseille", 
    "nb_staff": "11", 
    "creation": "2019"
};

const city = "city";
const addr = "address";

console.log(jsonValueKey(json, city));
console.log(jsonValueKey(json, addr));