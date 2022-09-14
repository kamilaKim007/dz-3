function numMin(myarr){
    let al = myarr.length;
    minimum = myarr[al-1];
    while (al--){
        if (myarr[al] < minimum){
            minimum = myarr[al]
        }
    }
    return minimum;
}
let numArr = [1, 5, -30, 89];
let n = numMin (numArr);
console.log(n);