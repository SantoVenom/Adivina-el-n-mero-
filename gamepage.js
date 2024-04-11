// valor aleatorio generado
var y= Math.floor(Math.random() * 10 + 1);
  
var x= document.getElementById("guessField").value;

if(x==y)

{
    alert("¡¡¡FELICITACIONES!!!"+playername+"LO ADIVINASTE BIEN" +guess + "INTENTO");
    guess=1;
}

else if(x > y)
{
    guess++;
    alert("¡OOPS LO SIENTO! INTENTA UN NÚMERO MÁS PEQUEÑO");
}
else
{
    guess++;
    alert("¡OOPS LO SIENTO! INTENTA NÚMERO MÁS GRANDE")
}
 
function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}