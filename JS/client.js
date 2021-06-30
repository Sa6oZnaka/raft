
let steps = 3;

let goats = [313000, 111000,666000,42000,7000,13000,400000,511000,600000,200000,202000,94000,280000,72000,42000];
//let goats = [666,42,7,13,400,511,600,200,202,111,313,94,280,72,42];

goats = goats.sort((a,b) => b-a);
console.log(validCapacity(goats, 54))
let i = goats[0];
let last = goats.length - 1;

let step = Math.floor(goats[0] / 10);
while(! validCapacity(goats, i)){
    i += step;
}
let j = i - step;
for(;  j < i + step; j ++){
    if(validCapacity(goats, j)){
        console.log(j);
        break;
    }
}

function validCapacity(arr, maxCapacity){
    let currentCapacity = 0;
    let temp;
    temp = [...arr];
    for(let i = 0; i < steps; i ++){
        currentCapacity = 0;
        for(let j = 0; j < temp.length; j ++){

            if(currentCapacity + temp[j] <= maxCapacity){
                currentCapacity += temp[j];
                temp.splice(j, 1);
                j--;
                
            }
        }
    }
    if(temp.length > 0)
        return false;
    return true;
}