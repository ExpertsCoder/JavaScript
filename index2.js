let  Arr=[5, 4, 7, 2, 6]


const maxElement = Math.max( ...Arr);
console.log('Maximum Element:', maxElement);

let maxNum = 0

for(i = 0 ; i<Arr.length; i++){
    if(Arr[i]> maxNum){
        maxNum = Arr[i]
    }
}
console.log(maxNum)
