//random value generated
var y=Math.floor(Math.random()*10+1);

//counting the number of guesses
//made for the correct guess
var guess=1;
document.getElementById("submitGuess").onclick=function(){

//number guessed by user
var x=document.getElementById("guessField").value;

if (x==y)
{
  alert("Congratulations! You guessed it right in" + guess + "guess(s)");
}

else if(x>y) /*if guessed number is greater than answer*/
{
  guess++;
  alert("Oops sorry! Try a smaller number.");
}

else
{
  guess++;
  alert("Oops sorry! Try a larger number.")
}

}
