const mx=prompt("Enter the max number");
const random=Math.floor(Math.random()*mx)+1;
let guess=prompt("Guess the number");
while(true)
{
    if(guess=="quit")
    {
        console.log("user quit");
        break;
    }
    if(guess==random)
    {
        console.log("You are right!congrats!!Your random number was",random);
        break;
    }
    else if(guess<random)
    {
        guess=prompt("hint:Your guess was too small.Please try again");
    }
    else if(guess>random)
    {
        guess=prompt("hint:Your guess was too big.Please try again");
    }
    
}