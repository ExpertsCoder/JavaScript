let x = 11; 
let flag = true; 
for (i =2 ; i< x ; i++){
    if( x % i == 0){
        console.log("its a not prime number ")
        flag = false
        break ;
    } 
    
}
if(flag === true ){
    console.log("its a prime number")
}else{
    console.log("its not  a prime no")
}



