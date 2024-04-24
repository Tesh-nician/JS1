
const button1 = document.getElementById('gooien');
const max = [0,0,0,0,0];

var dobbelGifArray = [
'/Resources/dobbel1.gif',
'/Resources/dobbel2.gif',
'/Resources/dobbel3.gif',
'/Resources/dobbel4.gif',
'/Resources/dobbel5.gif',
'/Resources/dobbel6.gif'];






button1.addEventListener('click', event => {
    
   
    var resultArr = rollDice(); //gives array of random dice rolls
    var resultSortedArr = resultArr.sort(); //sorts the array of random dice rolls
    
    //Hier display van dobbelstenen
    var g = document.getElementById('resultGiffs');
    g.innerHTML = ""; // re-initialise 'resultGiffs' before appending new images, otherwise giffs will not stop being added
    
    resultArr.forEach(n => {
        var img = document.createElement('img');
        img.src = dobbelGifArray[n-1];
        g.appendChild(img); // Append the image to 'resultGiffs'
    });   
        
    
    document.getElementById('resultaat').innerHTML = resultSortedArr; //displays the sorted array of random dice rolls
    
    var arrayOfFrequencies = listOfFrequencies(resultSortedArr); 
    var arrayOfFrequenciesSorted = arrayOfFrequencies.sort(); //sorts the array of frequencies
    
    var countPerFrequency = listOfFrequencies(arrayOfFrequenciesSorted); //gives the count of each frequency
    
    
    document.getElementById('List of frequencies').innerHTML = listOfFrequencies(resultSortedArr);
    //document.getElementById('Count per frequency').innerHTML = countPerFrequency;
    document.getElementById('Multiples of 2,3,4,5').innerHTML = countPerFrequency;
    //max[1] += countPerFrequency[1];
    for (var i = 0; i < 5; i++) {
        max[i] = max[i] + countPerFrequency[i];
    }

    document.getElementById('Max1').innerHTML = max[0]
    document.getElementById('Max2').innerHTML = max[1];
    document.getElementById('Max3').innerHTML = max[2];
    document.getElementById('Max4').innerHTML = max[3];
    document.getElementById('Max5').innerHTML = max[4];





    //end of event listener
});

//button2 for re-setting the max values

const button2 = document.getElementById('resetten');

button2.addEventListener('click', event => {
    max[0] = 0;
    max[1] = 0;
    max[2] = 0;
    max[3] = 0;
    max[4] = 0;

    document.getElementById('Max1').innerHTML = max[0]
    document.getElementById('Max2').innerHTML = max[1];
    document.getElementById('Max3').innerHTML = max[2];
    document.getElementById('Max4').innerHTML = max[3];
    document.getElementById('Max5').innerHTML = max[4];
    
});




//functions:

function rollDice() {
    var randomresult = []
    for (n = 0; n < 5; n++) {
    randomresult[n]= Math.floor(Math.random() * 5)+1;
    }
    return randomresult;
}


function countNumberGiven(number,resultSorted) {
    var countOfNumberGiven = resultSorted.filter(n => n === number).length; 
    
    return countOfNumberGiven;
}

function listOfFrequencies(resultSorted) {
    var freq = [5];
    for (var i = 1; i < resultSorted.length+1; i++) {
        freq[i-1] = countNumberGiven(i,resultSorted);
    }
    return freq;
}


