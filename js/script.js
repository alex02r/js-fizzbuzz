//iniziamo il ciclo for da 1 a 100
for(let i=1; i<=100; i++){
    let num="";
    const list = document.querySelector('.list'); 
    //controlliamo se i è multiplo di 3 e multiplo di 5
    if (i % 3 == 0 && i % 5 == 0) {
        //siamo qui perchè i è multiplo sia di 3 che di 5
        num = `FizzBuzz, `;
        list.innerHTML += num;

        console.log(num);
    } else if (i % 3 == 0) {
        //siamo qui perchè i è multiplo di 3 e non di 5
        num = `Fizz, `;
        list.innerHTML += num;
        console.log(num);
    }else if(i % 5 == 0){
        //siamo qui perchè i è multiplo di 5 e non di 3
        num = `Buzz, `;
        list.innerHTML += num;
        console.log(num);
    }else{
        num = `${i}, `;
        list.innerHTML += num;
        console.log(num);
    }
    
    
}