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


const randomMessage = arr => {
    const randomMessageOfTheDay = Math.floor(Math.random() * arr.length)
    console.log(`Your Positve Message Of The Day Is: ${messages[randomMessageOfTheDay]}`)
};

randomMessage(messages);