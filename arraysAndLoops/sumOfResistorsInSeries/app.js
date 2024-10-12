
const absoluteValueSum = function (aNumeros)
{
    let absoluteTotal=0
    for ( let i=0;i<aNumeros.length;i++)
    {      
        absoluteTotal=absoluteTotal+Math.abs(aNumeros[i])
    }
    console.log(absoluteTotal+" Ohms");
}

let arreglo=[-1,5,6,3]
absoluteValueSum(arreglo);

arreglo=[14,3.5,6]
absoluteValueSum(arreglo);

arreglo=[8,15,100]
absoluteValueSum(arreglo);



// Examples:
// ([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
// ([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// ([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)