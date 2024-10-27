/*let l=287152;
let tot=0;
while(l>0)
{
    let rem=l%10;
    tot+=rem;
    l=Math.floor(l/10);
}
console.log(tot);
//No.of digits
let num=287152;
let c=0;
while(num>0)
{
    c++;
    num=Math.floor(num/10);
}
console.log(c);
//Factorial
let n=0;
let sol=1;
if(n==0)
{
    console.log(1);
}
else{
for(let i=n;i>=1;i--)
{
     sol*=i;
}
console.log(sol);
}
//Maximum number
let max=[5,6,3,4,2,9,7,6,5,1];
let mx=max[0];
for(let i=1;i<max.length;i++)
{
    if(max[i]>mx)
    {
        mx=max[i];
    }
}
console.log(mx);
//object literals
let student={
    name:"Shradha",
    age:23,
    marks:99,
    cgpa:9.5
};
const item={
    price:100.99,
    discount:50,
    colors:["red","pink"]
};
//post
const post={
  username:"@shradhakapra",
  content:"This is my #firstpost",
  likes:50,
  reposts:5,
  tags:["@apnacollege","delta","aman"]
};
const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
const st={
    name:"shradha",
    age:23,
    marks:94.4,
    city:"Delhi"
  };
//Object of objects
const classInfo={
    aman:
    {
        grade:"A",
        city:"Delhi"
    },
    shradha:{
        grade:"A+",
        city:"Mumbai"
    },
    karan:
    {
        grade:"B",
        city:"Pune"
    }
};
//Array of objects
const classi=[
    {
        name:"aman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"shradha",
        grade:"A",
        city:"Pune"
    },
    {
        name:"karan",
        grade:"O",
        city:"Mumbai"
    }

];
//Functions in JS
function hello()
{
    console.log("hello");
}
hello();
function isAdult()
{
    let age=18;
    if(age>=18)
    {
        console.log("Adult");
    }
    else
    {
        console.log("Not an adult");
    }
}
isAdult();
function Poem()
{
    console.log("Twinkle Twinkle little star");
    console.log("how I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}
Poem();
function Dice()
{
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}
Dice();
Dice();
Dice();
Dice();
Dice();
Dice();
//Function with arguements
function funcName(name,age)
{
    console.log(name,age);
}
funcName("shradha",23);
funcName("Aman",23);
funcName(19);
function avg(a,b,c)
{
   let ans=(a+b+c)/3;
   console.log(ans);
}
avg(3,4,6);
function table(num)
{
    for(let i=1;i<=10;i++)
    {
       console.log(num*i);
    }
}
table(20);
//return keyword
function sum(a,b)
{
  return a+b;
}
let s=sum(3,5);
console.log(s);
//different scope
let greet="hello";//global scope
function changeGreet()
{
    let greet="namaste";
    console.log(greet);//function scope
    function innerGreet()
    {
        console.log(greet);//lexical scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();
//Function expression
const ans=function(a,b)
{
    return a+b;
}
sum(2,5);
//High order functions
function multipleGreet(func,n)
{
    for(let i=1;i<=n;i++)
    {
        func();
    }
}
let gree=function()
{
    console.log("hello");
}
multipleGreet(gree,1000);
//High order function with return
/*function OddEvencheck(req)
{
   if(req=="odd")
   {
      return function(n)
      {
        console.log(!(n%2==0));
      }
   }
   else if(req=="even")
   {
    return function(n)
    {
        console.log(n%2==0);
    }
   }
   else
   {
    console.log("Wrong request");
   }
}
let req="odd";*/
//Caluclator
/*const caluclator={
    add:function(a,b)
    {
        return a+b;
    },
    sub:function(a,b)
    {
        return a-b;
    },
    mul:function(a,b)
    {
        return a*b;
    }
};
//Array elements larger than a number
let ma=10;
let arr=[1,2,3,50,10,11,100,68,97];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>ma)
    {
        console.log(arr[i]);
    }
}
//Unique characters from a string
let str="abcdabcdefgggh";
function uni(str)
{
    let ans="";
   for(let i=0;i<str.length;i++)
   {
      let char=str[i];
      if(ans.indexOf(char)==-1)
      {
         ans+=char;
      }
   }
   return ans;
}
uni(str);
//longest country name
let m=0;
let country=["Australia","Germany","United States of America"];
let t="";
for(let i=0;i<country.length;i++)
{
    if(country[i].length>m)
    {
        m=country[i].length;
        t=country[i];
    }
}
console.log(t);
//count the no.of vowels
let r="sahitha";
let count=0;
for(let i=0;i<r.length;i++)
{
    if(r[i]=='a' || r[i]=='e' || r[i]=='i' || r[i]=='o' || r[i]=='u')
    {
       count++;
    }
}
console.log(count);
const stud={
   name:"shradha",
   age:23,
   eng:95,
   math:93,
   phy:97,
   getAvg(){
    console.log(this);
    let avg=(this.eng+this.math+this.phy)/3;
    console.log(`${this.name} got average marks ${avg}`);
   }
};
function getAvg(){
    console.log(this);
}
//try and catch
console.log("hello");
console.log("hello");
try{
    console.log(a);
}
catch(err){
    console.log("Caught an error! a is not defined");
    console.log(err);
}
console.log("hello1");
console.log("hello1");
const sum1=(a,b)=>
{
    console.log(a+b);
};
const cube=(n)=>{
   console.log(n*n*n);
}
const power=(a,b)=>
{
    console.log(a**b);
}
const hell=()=>
{
    console.log("Hello world");
}
//Arrow function with implicit return
const mul=(a,b)=>(a*b);
//setTimeout function
console.log("Hi there");
setTimeout(()=>{
  console.log("Apna College");
},4000);
console.log("Welocme to");
//setInterval 
let id1=setInterval(()=>
{
  console.log("Aman");
},3000);
console.log(id1);
let id2=setInterval(()=>
{
    console.log("Apna College");
},2000);
console.log(id2);
//to clear
clearInterval(id1);
clearInterval(id2);*/
//this with Arrow functions
const stu={
    name:"aman",
    marks:95,
    prop:this,//global scope
    getName:function(){
        console.log(this);
        return this.name;
    },
    getMarks:()=>
    {
        console.log(this);
        return this.marks;
    }
};
//For each loop
let arr=[1,2,3,4,5];
let print=function(el)
{
    console.log(el);
}
arr.forEach(print);
arr.forEach(function(el)
{
    console.log(el);
});
arr.forEach((el)=>
{
 console.log(el);
});
//array of objects
let s=[{
        name:"aman",
        marks:94,
       },
       {
         name:"shardha",
         marks:95,
       },
       {
           name:"rajat",
           marks:92,
       },
];
s.forEach((student)=>
{
   console.log(student);
});
let gpa=s.map((stu)=>
{
   return stu.marks/10;
});

//map function
let num=[1,2,3,4,5];
let double=num.map((el)=>{
    return el*el;
}
);
//filter function
let nums=[2,4,1,5,6,2,7,8,9];
let even=nums.filter((num)=>
{
    return num%2==0; //even->true,odd->false
});
//every method
//Returns true if every element of array gives true for some function.Else returns false.
//like logical and
[1,2,3,4].every((el)=>el%2==0);

//some method
//like logical or
[1,2,3,4].some((el)=>el%2==0);

//reduce method
//Reduces the array to single value
//arr.reduce(reducer function with 2 variables for(accumulator,element));
let ans=[1,2,3,4].reduce((res,el)=>(res+el));
console.log(ans);
//maximum using reduce function
let max=[7,9,0,8,4].reduce((mx,el)=>
{
    if(el>mx)
    {
        return el;
    }
    else
    {
      return mx;
    }
}
);
console.log(max);
//check all numvbers in array are multiples of 10 or not.
let sol=[10,20,30].every((el)=>{
    return el%10==0;
});
console.log(sol);
//Default parameters
function func(a,b=2)
{
    //do something
}
function sum(a=1,b)
{
    return a+b;
}
sum(2);
sum(1,3);
sum(1); //it takes as a=1 and b=undefined; //gives output as NaN

//Spread
//Expands an iterable into multiple values
function func(...arr)
{
    //do something
}
//minimum using spread function

console.log(Math.min(...arr));
let college="apna college";
console.log(...college);  //a p n a   c o l l e g e

//Spread with array literals
let n=[1,2,3,4,5];
let newarr=[...n];//makes copy of the above array
console.log(newarr);

let e=[2,4,6,8,10];
let o=[1,3,5,7,9];
let c=[...e,...o];

//Spread with object literals
let data={
    email:"shradhakapra@gmail.com",
    name:"sharadha"
};
const datacopy={...data,name:"aman",country:"India"};
let a=[1,2,3,4,5];
const ob={...a}; //array elements are stored in object as 
                   //{0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
//Rest 
//Allows a function to take an indefinite number of arguments and bundle them in ana array
/*function sum(...args)
{
    return args.reduce((add,el)=>add++el);
}*/
function total(...args)//arguments
{
   for(let i=0;i<args.length;i++)
   {
    console.log(`U gave us :${args[i]}`);
   }
}
function min(a,b,c,d)
{
    console.log(arguments); //arguments is a collection it is not an array
}
//sum
function sumtot(...args)
{
    return args.reduce((sum,el)=>{
        return sum+el;
    });
}
//min
function small(...args)
{
    return args.reduce((min,el)=>
    {
        if(el<min)
        {
            return el;
        }
        else
        {
            return min;
        }
    });
}
//Destructing
//storing values of array into multiple variables
let names=["tony","bruce","steve","peter"];
let[winner,runnerup,...others]=names;
console.log(winner,runnerup);  //tony bruce
console.log(others);
//Destructing objects
const child={
    name:"aman",
    age:24,
    class:9,
    subjects:["eng","hindi","maths"],
    username:"karan@123",
    password:"abcd"
};
/*let username=child.username;
let pass=child.password;*/
//let{username,password}=child;
let{username:user,password:pass,city="tenali"}=child;
//1st Q
let p=[1,2,3,4,5];
let solution=p.map((el)=>el*el);
let an=solution.reduce((sum,el)=>sum+el);
console.log((an)/p.length);
//2nd Q
let newa=p.map((el)=>el+5);
//3Q
let words=["hello","HI","SHRADHA","aman"];
console.log(words.map((string)=>string.toUpperCase()));
//4Q
const doubleAndReturnArgs=(p,...args)=>
[
    ...arr,...args.map((v)=>v*2),
]
doubleAndReturnArgs([1,2,3],4,4);
//5Q
const obj1={
    name:"aman",
    grade:"A+",
};
const obj2={
    name:"shradha",
    grade:"A",
};
const merge=(obj1,obj2)=>({...obj1,...obj2});





