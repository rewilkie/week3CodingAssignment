console.log ("hello")


// All questions should be printed to your Browser’s console using console.log()

console.log("1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");
    var ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(ages);

console.log('1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.')  
    console.log(ages[ages.length -1] - ages[0]);

console.log('1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).')
    ages.push(21);
    console.log(ages[ages.length -1] - ages[0]);
console.log('1c. Use a loop to iterate through the array and calculate the average age.') 
    var avgAge = sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum = sum + ages[i];
    }
    console.log(sum / ages.length);

console.log('2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.')
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
        console.log(names);

console.log('2a. Use a loop to iterate through the array and calculate the average number of letters per name.') 
sum = 0;
for (let i = 0; i < names.length; i++) {
    sum = sum + names[i].length;
}
    console.log(sum /names.length);
console.log('2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.') 
    var concatenate = names[0];
    for (let i = 1; i < names.length; i++) {
        concatenate = concatenate.concat(" ", names[i]);
    }      
    console.log(concatenate);  
console.log('3.  How do you access the last element of any array?')
    console.log('the last element is arrayName -1')

console.log('4.  How do you access the first element of any array?')
    console.log('the first elemnat is arrayName[0]')
console.log('5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.')
    var nameLengths = []
    for (let i = 0; i < names.length; i++) {
        nameLengths.push(names[i].length);
    }
    console.log(nameLengths);
console.log('6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.') 
    sum = 0
    for (let i = 0; i < nameLengths.length; i++) {
        sum = sum + nameLengths[i]
    }
    console.log(sum)
console.log('7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.')
    function repeat(word, n) {
        var concatWord = " ";
        for(let i = 0; i < n; i++) {
            concatWord = concatWord + word;
        }
        return(concatWord);
     }
     console.log(repeat ("Hello", 3));

console.log('8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.')
     function fullName (firstName, lastName) {
        return(firstName + " " + lastName);
     }
     console.log(fullName("Leon", "Kennedy"));
console.log('9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.')

        function sumOfNumbers (array) {
        sum = 0;
        for(let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        if (sum > 100) {
            return true;
        }
        else {
            return false;
        }
        }    
        console.log(sumOfNumbers(ages));
     
        
console.log('10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.')
        function avgOfNumbers (array) {
            sum = 0
            for(let i = 0; i < array.length; i++) {
                sum = sum + array[i];
        }
            return(sum / array.length);
    }
    console.log(avgOfNumbers(ages));
console.log('11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.')
        function avgOfElements (array1, array2) {
            sum = 0
            for(let i = 0; i < array1.length; i++) {
                sum = sum + array1[i];
        }
        var average1 = (sum / array1.length);
            sum = 0
            for(let i = 0; i < array2.length; i++) {
            sum = sum + array2[i];
        }
        var average2 = (sum / array2.length);
        if (average1 > average2) {
            return true;
        }
        else {
            return false;
        }
    }
    console.log(avgOfElements(nameLengths, ages));
console.log('12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.')
function willBuyDrink (isHotOutside, moneyInPocket) {
    if ((isHotOutside) && (moneyInPocket > 10.50)) {
        return true;
    }
    else {
        return false;
    }

}
        console.log(willBuyDrink(false, 30));
console.log('13.  Create a function of your own that solves a problem.') 
function toBrainardtomorrow (weatherForcastOk, availableFunds) {
    if ((weatherForcastOk) && (availableFunds > 200)) {
        return ("Go to Brainard");
    }
    else {
        return("Don't go to Brainard");
    }
}
    console.log(toBrainardtomorrow(true, 201));

console.log('In comments, write what the function does and why you created it.')
console.log('My son is trying to qaulify for the state wrestling tournament. This function helps decide if we make the 2 1/2 hour trip tomorrow morning.')
