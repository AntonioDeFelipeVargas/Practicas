const arrayOfMultiples= function(number,length)
{
    let multiplos=[]
    for (let i=1;i<=length;i++)
    {
        multiplos.push(number*i)
    }
    return multiplos
}

console.log(arrayOfMultiples(2,10));

console.log(arrayOfMultiples(17,6));
