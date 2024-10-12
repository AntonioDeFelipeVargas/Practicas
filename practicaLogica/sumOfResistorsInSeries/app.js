const getUserData= function ()
{
    const userInfo={};
    userInfo.name=prompt("Ingrese su usuario");
    userInfo.age=+prompt("Ingresa tu edad");
    userInfo.fMovies=[];
    while(true)
    {
        let movieToAdd= prompt("Ingresa tu pelicula favorita!, o escribe salir para terminar tu lista!")
        if(movieToAdd.toLowerCase()=="salir"){break;}
        userInfo.fMovies.push(movieToAdd );
    }
    console.log("Datos del Usuario\n Username: "+userInfo.name);
    console.log("Edad: "+userInfo.age);
    userInfo.fMovies.forEach(movie=>console.log("Me gusta tambien la pelicula: "+movie+"!" )) ; 
}
getUserData();