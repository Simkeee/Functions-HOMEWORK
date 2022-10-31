// 1. Write a program to insert a string within a string at a particular position (default is 1,
// beginning of a string).
function insert(str, index, value) 
{
    return str.substr(0, index) + value + str.substr(index);
}
console.log("1. Zadatak: "+ insert("oooooooo",5, "kol"));

//2. Write a program to join all elements of the array into a string skipping elements that are
//undefined, null, NaN or Infinity.

function filter_array(array1) 
{ 
    array2=[];
    for (let i = 0; i < array1.length; i++) 
    {
    if(!isNaN(array1[i]) && typeof array1[i]!=null &&typeof array1[i]!=Infinity)
    {
    array2=array2+array1[i];
    }
    array3=array2.toString();
    }
    return array3;
}
console.log("2. Zadatak: " + filter_array([NaN, 0, 15, false, -22, undefined, 47, null]));

//3. Write a program to filter out falsy values from the array.
function bouncer(arr) {
    return arr.filter(item => item);
    }
console.log("3. Zadatak: " + bouncer([NaN, 0, 15, false, -22, undefined, 47, null]));


// 4. Write a function that reverses a number. The result must be a number.
function reversedNum(num) 
{
    return (
      parseFloat(num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }
console.log("4. Zadatak: " + reversedNum(123456) );

// 5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
//  last &#39;n&#39; elements of the array.

function getTheLE(array,n) 
{
    if (array == null) return void 0;
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}
console.log("5. Zadatak: " + getTheLE([9,0,8,5,4,9,8],2));

// 6. Write a function to create a specified number of elements with pre-filled numeric value
// array.
//     6, 0 -&gt; [0, 0, 0, 0, 0, 0]
//     2, &quot;none&quot; -&gt; [&quot;none&quot;, &quot;none&quot;]
//     2 -&gt; [null, null]

function preFilledNumeric(array,n)
{
    array=Array(n).fill(array);
    return array;
}
console.log("6. Zadatak: " + preFilledNumeric(false,7));

//     7. Write a function that says whether a number is perfect.
//     28 -&gt; 28 is a perfect number.
//     Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
//     of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
//     as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
//     (including itself).
//     E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
    
//     Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
//     perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function perfectN(n)
{
    var b=0;
    for (let i = 1; i < n; i++) 
    {
        if(n%i==0)
        {
        b+=i;
        }
    }
    if(b==n)
    {
    return "Number is perfect!";
    }
    else
    {
    return "Number is NOT perfect!";
    }
}
console.log("7. Zadatak: " + perfectN(16));

//8. Write a function to find a word within a string.
function search_word(text, word)
{    
    var x = 0, y=0;  
    for (i=0;i< text.length;i++)
    {
        if(text[i] == word[0])
        {
            for(j=i;j< i+word.length;j++)
            {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length)
                {
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found " + x + " times.";
}

console.log("8. Zadatak: "+ search_word('The quick brown fox', 'fox'));

// 9. Write a function to hide email address.
function hideEmail(email) 
{
    email1=email.replace(/(.{2})(.*)(?=@)/, "..." )
    return email1; 
} 
  console.log("9. Zadatak: " + hideEmail("myemailaddress@bgit.rs"));


// 10. Write a program to find the most frequent item of an array.
function mostFrequent(arr1){
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
return item+" ( " +mf +" times ) ";
}
console.log("10. Zadatak: " + mostFrequent([3, 2 , 2, 4, 3, 9, 3]));