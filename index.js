const messages = [
    
    "Your are doing great",
    "Keep your head up",
    "You can do this",
    "Believe in yourself",
    "You've got this",
    "Your the best",
    "Take your time",
    "You do you",
    "Stay Strong",
    "You can do anything you set your mind to",
    "Do your best"

];

const positiveButton = document.getElementById('positive-button');

const randomMessage = arr => {
    const randomMessageOfTheDay = Math.floor(Math.random() * arr.length)
        return (`Your Positve Message Of The Day Is: ${arr[randomMessageOfTheDay]}`)
};

            positiveButton.addEventListener('click', function () {

                document.getElementById('positive-text').innerHTML = randomMessage(messages);
        });
