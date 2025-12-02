 function getRandomDog() { // Define the function
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            console.log(data); // You'll likely want to display this on the page
            document.getElementById('result').innerHTML = `<img src="${data.message}" alt="Random Dog">`;
        })
        .catch(error => {
            console.error('Something went wrong!', error);
        });
}
 function getRandomAdvice() { // Define the function
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            console.log(data); // You'll likely want to display this on the page
            document.getElementById('result').innerHTML = `${data.slip.advice}`;
        })
        .catch(error => {
            console.error('Something went wrong!', error);
        });
}
 function getRandomWord() { // Define the function
    fetch('https://random-word-api.vercel.app/api?words=1')
        .then(response => response.json())
        .then(data => {
            console.log(data); // You'll likely want to display this on the page
            document.getElementById('result').innerHTML = `${data.word}`;
        })
        .catch(error => {
            console.error('Something went wrong!', error);
        });
}

function getRandomJoke() { // Define the function
    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(data => {
            console.log(data); // You'll likely want to display this on the page
            document.getElementById('result').innerHTML = `${data.setup}`
        })
        .catch(error => {
            console.error('Something went wrong!', error);
        });
}