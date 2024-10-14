const secretSocietyName = function (names)
{
    let secretName =""

    for(let i=0;i<names.length;i++)
    {
        secretName+=names[i][0]
    }
    return secretName
}

let nombres=["Esperanza", "Franco", "Nia"]

console.log(secretSocietyName(nombres));

nombres=['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']

console.log(secretSocietyName(nombres));
