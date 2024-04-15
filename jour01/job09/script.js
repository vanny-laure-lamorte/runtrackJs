function tri(numbers, order) {
    // "asc" ou "desc"

    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        })
        
    } else if (order === "desc") {
        const sortDesc = (a,b) => b-a;
        numbers.sort(sortDesc);
    }

    return numbers;
}

let tab_nb = [9, 7, 2, 4, 3, 5, 8, 1, 6];

console.log(tri(tab_nb.slice(), "asc")); 
console.log(tri(tab_nb.slice(), "desc"));

