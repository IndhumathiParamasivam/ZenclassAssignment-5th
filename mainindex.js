
   
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