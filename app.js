/*console.log("Hello World");
console.log("Apna College");
let a=10;
let b=5;
console.log("Sum is:",a+b);
let pp=20;
let e=30;
let op="The price of pencil and eraser is:"+(pp+e)+"Rupees";
console.log(op);
//template variables
let eraser=5;
let output=`The price of eraser is ${eraser} Rupees`;
console.log(output);
//comparison operators
let age=18;
console.log(age>18);
console.log(5==5);
console.log(5=='5');
console.log(5=="5");
console.log(5==="5");
console.log(0=='');
console.log(null==undefined);
console.log(0==null);
let years=20;
if(years>=18)
{
    console.log("You can vote");
}
let name="sahitha";
if(name=="sahitha")
{
    console.log(`Hi ${name}`);
}*/

/*let color="green";
if(color=='red')
{
    console.log("Stop");
}
if(color=='orange')
{
    console.log("Wait");
}
if(color=='green')
{
    console.log("You can go");
}*/
/*let age=19;
if(age>=18)
{
    console.log("You are an adult,so you can vote");
}
 if(age>=18 && age==19)
{
    console.log("You are having write age");
}*/
let popsize="L";
if(popsize=="XL")
{
    console.log(`The size of popcorn is Rs.250`);
}
else if(popsize=="L")
{
    console.log(`The size of popcorn is Rs.200`);
}
else if(popsize=="M")
{
    console.log(`The size of popcorn is Rs.100`);
}
else if(popsize=="S")
{
    console.log(`The size of popcorn is Rs.50`);
}
else
{
    console.log(`Popcorn is not available here`);
}
let sum=true+true+true*3;
console.log(sum);
let st="sahitha";
if(st[0]=='a' && st.length==3)
{
    console.log("Good String");
}
else
{
    console.log("Not a good string");
}
if('sahitha')
{
  console.log("It has true value");
}
else
{
  console.log("It has false value");
}
if(0n)
{
    console.log("It has true value");
}
else
{
    console.log("It has false value");
}
//switch statement

/*let color="orange";
switch(color){
    case "red":console.log("Stop");
               break;
    case "green":console.log("Go");
                 break;
    case "orange":console.log("Wait")
                  break;
          default:console.log("Broken light")
}
let day=10;
switch(day){
    case 1:console.log("Monday");
           break;
    case 2:console.log("Tuesday");
           break;
    case 3:console.log("Wednesday");
           break;
    case 4:console.log("Thursday");
           break;
    case 5:console.log("Friday");
           break;
    case 6:console.log("Saturday");
           break;
    case 7:console.log("Sunday");
           break;
    default:console.log("Not a valid input");

}*/
/*alert("Something is wrong!");
console.error("There is an error");
console.warn("this is a warning msg");
let firstname=prompt("Enter your firstname");
let lastname=prompt("Enter your lastname");
console.log(firstname+" "+lastname);*/
/*let num=25;

if(num%10==0)
{
    console.log("Good");
}
else
{
    console.log("Bad");
}
let name=prompt("Enter your name");
let age=prompt("Enter your age");
let msg=`${name} is ${age} years old`;
alert(msg);

let q=3;
switch(q)
{
    case 1:console.log(`January,Febraury,March`);
           break;
    case 2:console.log(`April,May,June`);
           break;
    case 3:console.log(`July,August,September`);
           break;
    case 4:console.log(`October,November,December`);
           break;
    default:console.log(`Not a valid quarter`);
}*/
let string="Pkuraa";
if((string[0]=='A' || string[0]=='a')&& string.length>5)
{
    console.log("Good string");
}
else
{
    console.log("Bad string");
}
//largest of three numbers
let a=10;
let b=15;
let c=5;
if(a>b && a>c)
{
    console.log(`The greatest is a and its value is ${a}`);
}
else if(b>a && b>c)
{
    console.log(`The greatest is b and its value is ${b}`);
}
else if(c>a && c>b)
{
    console.log(`The greatest is c and its value is ${c}`);
}
//last digit check
let num1=2;
let num2=19;
if(num1%10==num2%10)
{
    console.log("true");
}
else{
    console.log("false");
}
let msg="           He                     llo                                ";
console.log(msg.trim().toUpperCase());
let name="SAHITHA";
console.log(name.toLowerCase());
let msg1="Ilovecoding";
console.log(msg1.indexOf("love"));
console.log(msg1.slice(1,5));
console.log(msg1.slice(-3));
console.log(msg1.replace("o","p"));
let str="Mango";
console.log(str.repeat(1000000));
let st1="hello!";
console.log(st1.trim().toUpperCase());
let name1="Apna College";
console.log(name1.slice(4,9));
console.log(name1.indexOf("na"));
console.log(name1.replace("Apna","Our"));
//Array
students=["Aman","Shradha","Rajat"];
let stu=[31721,"Sahitha",9.5,true];
console.log(stu);
console.log(stu[1][0]);
let cars=["bmw","ferrari","porsche"];
console.log(cars.indexOf("ferrari"));
console.log(cars.includes("porsche"));
//arrays concatenation
console.log(students.concat(cars));
//reversing of array
console.log(students.reverse());

//tic tac toe
let tic=[["X"," ","O"],[" ","X"," "],["O"," ","X"]];
console.log(tic);
//first n elements
let arr=[7,9,0,-2];
console.log(arr.slice(0,3));
//last n elements
console.log(arr.slice(-3));

let nam="";
if(nam.length==0)
{
    console.log(`true`);
}
else
{
    console.log(`false`);
}
//To check whether the charecter is in lowercase or not
let id=2;
let s="raJi"
if(s[id]==s[id].toLowerCase)
{
    console.log(`true`);
}
else{
    console.log(`false`);
}
//To check whether element exists or not in array
let num=3;
let ar=[1,2,3,4];
if(ar.indexOf(num)!=-1)
{
    console.log(`true`);
}
else{
    console.log(`false`);
}
for(let i=1;i<=5;i++)
{
  console.log(i);
}
//odd numbers
for(let i=1;i<=15;i++)
{
    if(i%2!=0){
        console.log(i);
    }
  
}
//even numbers
for(let i=2;i<=10;i+=2)
{
    
        console.log(i);
  
}
//multiplication table
/*let n=5;
for(let i=1;i<=10;i++)
{
    console.log(n*i);
}
//Guess movie name
let movie="Sanam teri kasam";
let guess=prompt("Guess movie name");
while((movie!=guess) && (guess!="quit"))
{
    console.log("Wrong");
    guess=prompt("Guess movie name");
}*/
/*let fruits=["Apple","Mango","Banana","Mango"];
for(let i=0;i<fruits.length;i++)
{
    console.log(i,fruits[i]);
}
let heroes=[["iron","spider","thor"],["super","wonder","flash"]];
for(let i=0;i<heroes.length;i++)
{
    console.log(i,heroes[i],heroes.length);
    for(let j=0;j<heroes[i].length;j++)
    {
        console.log(`j=${j},${heroes[i][j]}`);
    }
}*/
let stud=[["aman",95],["shradha",90],["dhattarwal",99]];
for(let i=0;i<stud.length;i++)
{
    console.log(`${i+1}th student data ${stud[i]}`);
   for(let j=0;j<stud[i].length;j++)
   {
      console.log(`Every detail of the student ${stud[i][j]}`);
   }
}
let fruits=["Apple","Mango","Banana","Mango"];
for(fruit of fruits)
{
    console.log(fruit);
}
let heroes=[["superman","batman","wonder woman"],["spiderman","ironman","thor"]];
for(list of heroes)
{
  console.log(list);
  for(hero of list)
   {
    console.log(hero);
   }
}
//Todo app
/*let todo=[];
let req=prompt("Enter your request here:");

while(true)
{
    if(req=="quit")
    {
        console.log("quitting app");
        break;
    }
    if(req=="list")
    {
        console.log("-------------");
        for(let i=0;i<todo.length;i++)
        {
            console.log(`${i+1}  ${todo[i]}`);
        }
        console.log("--------------");
        
    }
    else if(req=="add")
    {
        let task=prompt("Enter the task");
        todo.push(task);
        console.log("added");
    
        
    }
    else if(req=="delete")
    {
        let idx=prompt("Enter the task number to deleted");
        todo.splice(idx,1);
        console.log("task deleted successfully");
    }
    else
    {
        console.log("Wrong request");
    }
    req=prompt("Enter your request here:");
}*/
/*let nums=[1,2,3,4,5,6,2,3];
let n=2;
for(let i=0;i<nums.length;i++)
{
   if(n==nums[i])
   {
     console.log(i);
     nums.splice(i,1);
   }
   console.log(nums);
}*/
//No.of digits in a number
let l=287152;
let tot=0;
while(l>0)
{
    let rem=l%10;
    tot+=rem;
}
console.log(tot);


