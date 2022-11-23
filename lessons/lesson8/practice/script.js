let styles = ['Jaz', 'Blues'];

styles.push('Rock');

styles[Math.floor((styles.length - 1)/2)] = ('Classic');

console.log(styles.shift());
styles.unshift("Rap", "Reggi");
console.log(styles)

let arr = [1,4,2,5,3];
let sqrt = [];

for (let elem in arr){
    sqrt.push(arr[elem]**2);
}

console.log(sqrt)

let arr = [-1, 'lol', 5, 4, 2, 5, 3, 'space', -10, 11, 0, -999, 999, 3, -6, 11, -0, 0.1, 0.001, 23, 'asdas'];

let tresh = [];

for (let elem in arr){ // or  for (let elem = 0; elem < arr.length; elem++){
    if (arr[elem] >= 0){
        console.log(arr[elem])
    }
    else if(arr[elem]!= Number){
        tresh.push(arr[elem])
    }
}
console.log(tresh);


let sum = 0;
let arr = [-1, 'lol', 5, 4, 2, 5, 3, 'space', -10, 11, 0, -999, 999, 3, -6, 11, -0, 0.1, 0.001, 23, 'asdas'];


for(let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        sum += arr[i];
    }
    else{
        continue;
    }
}
console.log('sum = ')
console.log(sum)


sum1 = 0;
for (let elem in arr){
    if (arr[elem]%2==0){
        sum1+= arr[elem]
    }
    else{
        continue;
    }
}
console.log('sum = ' + sum1)
