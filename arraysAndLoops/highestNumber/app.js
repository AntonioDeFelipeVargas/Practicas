const highestNumber = function()
{   let userNumbers=[]
    

    for(let i=1; i<=10;i++)
    {   
        let numero= +prompt("Ingresa un numero, seran 10 en total vas en el "+i)
        userNumbers.push(numero)
    }
    let biggestNumber=userNumbers[0];
    
    for(let i=0;i<userNumbers.length;i++)
    {       
        if(userNumbers[i]>biggestNumber)
        {
            biggestNumber=userNumbers[i]
        }
    }

    console.log("El numero mas grande es: "+biggestNumber+"!");
}
highestNumber();

