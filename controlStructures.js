


let num1=15;
let num2=10;
let num3=5;



if(num1 > num2)
{
console.log(num1);
}
else {
if(num1 > num2)
console.log(num2);
}

/*  odd or even */

if(num1 % 2 == 0) {
    console.log("The number is even");
}

else {
    console.log("The number is odd");
}

/*largest to smallest */
if (num1>num2 && num1>num3)
{
        if (num2>num3)
        {
            console.log(num1 + ", " + num2 + ", " +num3);
        }
        else
        {
            console.log(num1 + ", " + num3+ ", " +num2);
        }
}


/*   positive and negative */
let amount=30;


if (amount > 0) {
    console.log("The number is positive");
}

else if (amount < 0) {
 

     console.log("The number is negative");
}

    amount = parseInt(prompt("please Enter a number: "));
/*loggin */


let i=0; 
while (i <= 20) {
    console.log(i); 
    i++;
  }

  let g=0;
  for (g =20 ; g >= 0 ; g--) 

  {
    console.log(g); 
  }

  




for (let x=0; x<=20; x++) {
    if (x === 0) {
            console.log(x +  " even");
    }
    else if (x % 2 === 0) {
            console.log(x + "even");   
    }
}

