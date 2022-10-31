// 1. Write a function to check whether the `input` is a string or not.

function is_string(input) {
    if (typeof input === 'string' || input instanceof String)
    {
    return true;
    }
    else 
    {
    return false;
}
};
console.log("1. Zadatak: "+ is_string("ooo"));

// 2. Write a function to check whether a string is blank or not.
 function is_Blank(input1) 
 {
    if (input1.length == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log("2. Zadatak: "+is_Blank('w'));

// 3. Write a function that Catenates a given string n times (default is 1).

function catenates(string, times) 
{
    var catenatesString = string;
    while (times -1> 0) 
    {
        catenatesString += string;
        times--;
    }
    return catenatesString;
}
console.log("3. Zadatak: "+ catenates("Ha", 6));

// 4. Write a function to count the number of letter occurrences in a string.
var k=0;
function countNumb(string1, m)
{
    for(j=0;j<string1.length;j++)
    {
        if(string1[j]==m)
        {
        k+=1;
        }
    }
    return k;
}
console.log("4. Zadatak: "+ countNumb("okokmmm","m"));

// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

function positionCar(string2, p)
{
    var h=-1;
    for(l=0;l<string2.length;l++)
    {
        if(string2[l]==p)
        {
        h=l+1;
        break;
        }
    }
return h;
}
console.log("5. Zadatak: "+ positionCar("okpklop","k"));

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.
var s=-1;
function positionCar2(string3, p1)
{
    for(l1=0; l1<string3.length; l1++)
    {
    if(string3[l1]==p1)
    {
    s=l1+1;
    }
}
return s;
}
console.log("6. Zadatak: "+ positionCar2("okpklop","k"));

// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.
function convertString(str)
{
    strArray = str.split("");
    str=str.replaceAll(" ",null);

    return strArray;
}
console.log("7. Zadatak: "+ convertString("Simic Dimitrije"));

// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function numberIsPrime(num1)
{
    pr=true;
    for (let i = 2; i < num1; i++) 
    {
        if(num1%i==0)
        {
        pr=false;
        break;
        }
    }
    return pr;
}
console.log("8. Zadatak: "+ numberIsPrime(6));

// 9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.

function replacesS(string4, operat)
{
    if(operat)
    {
        string4=string4.replaceAll(" ",operat);
    }
    else
    {
    string4=string4.replaceAll(" ","-"); 
    }
return string4;
}
console.log("9. Zadatak: "+ replacesS("ioioio ouououo y y y","+"));

// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

function firstNCaracters(string5, n3)
{
    var k8="";
    for(t=0; t<n3; t++)
    {
        k8+= string5[t];
    }
    return k8+"...";
}
console.log("10. Zadatak: "+ firstNCaracters("kokokok mi", 6));

// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.
function convertsStoN(array6)
{
    d="";
for (let i = 0; i < array6.length; i++) 
{
    if(isNaN(array6[i])==false)
    {
     d=[d,array6[i]] //funkcija radi, ali nisam nikako mogo da pronadjem lepsi nacin za ispisivanje dobijenog rezultata
    }
}
return d;
}
console.log("11. Zadatak: "+convertsStoN([1, 'test', 3, null]));

// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function retirement(dateOfBirdh, gender)
{
    var e="vi ste vec u penziji"
    if (gender=="male" && dateOfBirdh<65)
    {
    e=65-dateOfBirdh;
    }
    if(gender=="female" && dateOfBirdh<60)
    {
    e= 60-dateOfBirdh;
    }
return e;
} 
console.log("12. Zadatak: Do penzije vam je potrebno jos: " + retirement(12,"male")+" godina!");

// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanize(number) 
{
    if(number % 100 >= 11 && number % 100 <= 13)
    {
        return number + "th";
    }
    switch(number % 10) 
    {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    
    return number + "th";
}
console.log("13. Zadatak:"+ humanize(120003));