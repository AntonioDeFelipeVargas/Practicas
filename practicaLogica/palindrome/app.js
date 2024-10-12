
const isPalindrome= function (cadena)
{
    const cleanString= cadena.toLowerCase().replace(/[^a-z0-9]/g,"");
    const invertedCleanString=cleanString.split("").reverse().join("");
    if(cleanString==invertedCleanString)
        {
            return ("ES PALINDROMO!")
        }
        else { return ("Nones")}
}

let prueba="Anita lava  tina" ; 

console.log(isPalindrome(prueba));

 prueba="Anita lava la tina" ; 

console.log(isPalindrome(prueba));
