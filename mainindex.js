
   
   //Print odd numbers in an array
    // 1-a) Anonymous  Function
   let inputarray=[1,3,4,5,9,10,2,11,12,11111];
    let oddMembers = function (inputarray) {
        let oddElementArray=[];
        for(let i=0;i<inputarray.length;i++)
            if(inputarray[i]%2!=0)
                oddElementArray.push(inputarray[i]);
         return oddElementArray;
    };
    console.log("Priniting odd numbers in the array: "+inputarray.join(' '));
    console.log(oddMembers(inputarray));
        //2-a) Arrow Function
            console.log(inputarray.filter( value => value%2!=0 ));
    console.log("**************************************************************");
            
    //Convert all the strings to title caps in a string array
            // 1-b) Anonymous  Function
    let inputStrings = ["indhu","dad","mom","computer","laptop","chocalate","malayalam"];
    (function (inputarray)
    { let str; 
      console.log("Priniting strings with title caps in the array : "+inputarray);
        for(let i=0;i<inputarray.length;i++)
                inputarray[i]=inputarray[i].replace(inputarray[i][0],inputarray[i][0].toUpperCase());
            console.log(inputarray);
    })(inputStrings);

        //2-b) Arrow Function
            console.log (inputStrings.map( str => str[0].toUpperCase()+str.substring(1,str.length) ));
    console.log("**************************************************************");



    //Sum of all numbers in an array
       // 1-c)Anonymous  Function
    let sumOfElements = function (inputArray)
        {   let sum=0;
            for (let index in inputArray)
                sum+=inputArray[index];
            return sum;
        }
    console.log("Total sum of the elements of the array : "+ inputarray.join(' '));
    console.log(sumOfElements(inputarray));
        // 2-c) Arrow Function
        let sum=0;
        let sumofEle = ( value )  => 
        {
                sum+=value;
        }
        inputarray.forEach(sumofEle);
    console.log(sum);
    console.log("**************************************************************");


    //Return all the prime numbers in an array
        //1-d)Anonymous  Function
(function ()
    { let arrayofnumbers=[1,3,4,5,9,10,2,11,12,11111];
        console.log("Priniting prime numbers in the array: "+arrayofnumbers.join(' '));
        for(let  index=0;index<arrayofnumbers.length;index++)
         if ( arrayofnumbers[index]!=2 && arrayofnumbers[index] % 2===0 || arrayofnumbers[index] ===0 || arrayofnumbers[index] ===1)
                {
                    arrayofnumbers.splice(index,1);
                    index--;
                }
        else
        { 
            for(let i=3;i*i<=arrayofnumbers[index];i+=2)
                if( arrayofnumbers[index] % i ==0)
                {
                    arrayofnumbers.splice(index,1);
                    index--;
                }

        }
        console.log(arrayofnumbers);
    })();

        //2-d)Arrow  Function
let primeElements = inputarray.map ( value =>
    {
     if ( value !=2 && value % 2===0 || value ===0 || value ===1)
            return false;
        else
        { 
            for(let i=3;i*i<=value;i+=2)
                if( value % i ==0)
                    return false;
             return value;

        }
    });

    console.log(primeElements.filter( element => Number.isInteger(element) ));
    console.log("**************************************************************");

    //Return all the palindromes in an array
            //1-e)Anonymous  Function
            (function ()
            {    let inputstrs = ["indhu","dad","mom","computer","laptop","chocalate","malayalam"];
                let str;
                console.log("palindromes in the array : "+inputstrs);
                for ( let index=0 ;index<inputstrs.length;index++)
                    {
                        str = inputstrs[index].toLowerCase().split('');
                        if(str.join('') != str.reverse().join(''))
                        {inputstrs.splice(index,1);
                          index--;
                        }
                    }
              console.log(inputstrs);
            })();
            //2-e)Anonymous  Function
        console.log (inputStrings.filter( str => 
            str.toLowerCase() === str.toLowerCase().split('').reverse().join('')));
        console.log("**************************************************************");

    //1 f)Return median of two sorted arrays of same size
    let sortarray1 = [ 10, 13,19,20,21];
    let  sortarray2 = [1,4,23,45,46];
    (function (sortarray1,sortarray2)
    {
        let mergedsortarray = sortarray1.concat(sortarray2)
                                    .sort ( (a,b) => a-b );
        console.log("Median of the sorted array: "+ mergedsortarray.join(' '));
        console.log( ( mergedsortarray [mergedsortarray.length/2] + mergedsortarray [(mergedsortarray.length/2)-1] ) / 2);                              
    })(sortarray1,sortarray2);
    console.log("**************************************************************");


    // 1 g)Remove duplicates from an array
    let arraywithDuplicates = [1,2,3,4,8,7,2,6,7,8];
    let arraywithoutDuplicates = function (inputarray)
        {
            let uniqueSet = new Set (inputarray);
            return Array.from(uniqueSet);
        }
        console.log("Removing duplicates from the array : "+arraywithDuplicates.join(' '));
        console.log(arraywithoutDuplicates(arraywithDuplicates));
    console.log("**************************************************************");

    // 1 h)Rotate an array by k times
    (function (inputArray,k)
    {
        console.log("Rotating  the elements of an  array "+ inputArray.join(' ')+" for "+k+" times: ");
        if(inputArray.length != k)
            for (let i=0;i<k;i++)
                {
                    inputArray.unshift(inputArray.pop());
                }
        console.log(inputArray);                              
    })(inputarray,5);


//2)**************************************************************************************************************************


var num = 10;
function addFive(num) { 
return num+5;
}
var result = addFive(num);
console.log(result);

var num = 5;
function getOpposite(num) {
    if(num==0)
    return 0;
    else if(Number.isInteger(num))
    return num * -1;
    else
    return -1;
}
var result = getOpposite(num);
console.log(result);

var min = 5;
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min);
console.log(secs);

var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr);
console.log(myint);

var myint = -3;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint);
console.log(myNextint);

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);
console.log(data);


var hours = 2;
function hourToSeconds(hrs) {
    return hrs*60*60;
}
var seconds = hourToSeconds(hours);
console.log(seconds);

function findPerimeter(num1,num2) {
    return 2*(num1+num2);
}
var peri = findPerimeter(6,7);
console.log(peri);

function lessThan100(num1,num2) {
    if(num1+num2 >=100)
        return false;
    else
        return true;
}
var res = lessThan100(22,15);
console.log(res);

function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(-9,45);
console.log(res);


function CountAnimals(tur,horse,pigs) {
    return tur*2+horse*4+pigs*4;
}
var legs = CountAnimals(2,3,5);
console.log(legs);


function frames(num1,num2) {
    return num1*num2*60;
}
var fps = frames(1,2);
console.log(fps);

function divisibleByFive(num1) {
    if(num1%5 === 0)
    return true;
    else
    return false;
}
var divisible = divisibleByFive(-55);
console.log(divisible);


function isEven(num){
    if(Number.isInteger(num) === false)
        return -1;
    else if (num%2 ===0)
        return true;
    else
        return false;
   }
   var even = isEven("895a");
   console.log(even);

   function areBothOdd(num1, num2){
    if(num1%2 !=0 && num2%2 !=0)
        return true;
    else
        return false;
   }
   var res = areBothOdd(0,0);
   console.log(res);



   function getFullName(firstName, lastName){
    if(lastName=== undefined)
      return firstName;
    else
        return firstName+' '+lastName;
   }
   var fullName = getFullName('GUVI',);
   console.log(fullName);

   function getLengthOfWord(word1){
    if(word1 === undefined || Number.isInteger(word1))
     return -1;
     else
   return word1.length;
  }
  var length = getLengthOfWord();
  console.log(length);

  function isSameLength(word1, word2){
    if(word1.length === word2.length)
        return true;
    else   
        return false;
   }
   var samelength = isSameLength("GUVI","HELLO");
   console.log(samelength);

   console.log(getDistance(100, 100, 400, 300));
    function getDistance(x1, y1, x2, y2)
    {   let x = x2-x1;
        let y = y2-y1;
        return Math.sqrt(x*x + y*y);
    }

    console.log(getNthElement([], 1));
    function getNthElement(array,n){
        return array[n];
       }

       function getLastElement(array){
        if(array.length ===0)
        return -1;
        else
        return array[array.length-1];
       }
       console.log(getLastElement([1,2]));

       var obj = {
        mykey: 'value'
        };

        function getProperty(obj, key) {
            if(obj[key] === undefined)
                return 'NA';
            else
                return obj[key];
           }
        console.log(getProperty(obj,'mykey'));

        var obj = {};
           function addProperty(obj, key){
            obj[key]=true;
            return obj;
           }
           console.log(addProperty(obj,'mykey'));

           var obj = {
            mykey: 'value'
           };
           function removeProperty(obj, key){
            delete obj[key];
            return obj;
           }
           console.log(removeProperty(obj,'mykey'));
           var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
           var ar2 = function countPositivesSumNegatives(arr) {
               let sum1=0,sum2=0;
               arr.forEach(element =>{
                   if(element>0)
                        sum1+=element;
                    else
                        sum2+=element;
               })
               return [sum1,sum2];

        }
        console.log(ar2(arr));

        function powersOfTwo(n){
            let res=[];
            for(let i=0;i<=n;i++)
                res.push(Math.pow(2,i));
            return res;
          }
          console.log(powersOfTwo(2));

function findMax(ar)
{
return Math.max(...ar);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
function isPrime(n)
{
if ( n !=2 && n % 2===0 || n ===0 || n ===1)
return false;
else
{ 
for(let i=3;i*i<=n;i+=2)
    if( n % i ==0)
        return false;
 return true;

}
}
printPrimes(100);

console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
let primenumbers=[],i=1;
 while(i<=nPrimes)
 {
     if(isPrime(startAt))
       { primenumbers.push(startAt);i++;}
       startAt++;
}
return primenumbers;
}

var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   let reverse = s.toLowerCase().split('').reverse().join('');
   return reverse[0].toUpperCase()+reverse.substring(1,reverse.length);  
}
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 for(let el of ar2)
 {
 result.push(el);
 }
 return result;
}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  let numarr = s.split(',');
  let sum=0;
  numarr.forEach(element => {
      sum += Number(element);
  })
  return sum;
}
