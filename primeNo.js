    //This is a programme to find num is Prime or not.   
    
    let num = 14; //Change the value here.
    let prime = true;
    
    for(let i = 2; i<num; i++) {
        if(num%i==0) {  
            prime=false;
            break;
        }
    }
    if(prime) {
        console.log(num,'is a prime number.');
    } else {
        console.log(num,'is a not prime number.');
    }
