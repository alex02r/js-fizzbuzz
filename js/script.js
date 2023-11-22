//iniziamo il ciclo for da 1 a 100
for(let i=1; i<=100; i++){
    let num="";
    const list = document.querySelector('ul'); 
    //controlliamo se i è multiplo di 3 e multiplo di 5
    if (i % 3 == 0 && i % 5 == 0) {
        //siamo qui perchè i è multiplo sia di 3 che di 5
        num = `<li class="text-primary">FizzBuzz</li>`;
        list.innerHTML += num;

        console.log(num);
    } else if (i % 3 == 0) {
        //siamo qui perchè i è multiplo di 3 e non di 5
        num = `<li class="text-secondary">Fizz</li>`;
        list.innerHTML += num;
        console.log(num);
    }else if(i % 5 == 0){
        //siamo qui perchè i è multiplo di 5 e non di 3
        num = `<li class="text-success">Buzz</li>`;
        list.innerHTML += num;
        console.log(num);
    }else{
        num = `<li class="text-danger">${i} non è divisibile</li>`;
        list.innerHTML += num;
        console.log(num);
    }
    
    
}