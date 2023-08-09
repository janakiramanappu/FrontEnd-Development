// JavaScript Interview Questions - Simplilearn

// Removing Duplicates

let arrDuplicate = ['a', 'b', 'c', 'a', 'b', 'd'];

let call = arrDuplicate.filter((c, index) => {
    console.log(c, " ", index, " ", arrDuplicate.indexOf(c));
    return arrDuplicate.indexOf(c) == index;
});

console.log(call);