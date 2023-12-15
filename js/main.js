var quotes = [
    `
   “In three words I can sum up everything I've learned about life: it goes on.”
   ― Robert Frost
   `,

    `
   “If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
   ― J.K. Rowling, Harry Potter and the Goblet of Fire
   `,

    `
   “Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
   ― C.S. Lewis, The Four Loves
   `,

    `
“A friend is someone who knows all about you and still loves you.”
― Elbert Hubbard
   `,

   `
   “Live as if you were to die tomorrow. Learn as if you were to live forever.”
   ― Mahatma Gandhi
   `
];

function GenerateQuote(){
    var randomIndex= Math.floor(Math.random()* quotes.length);
    var randomQuote= quotes[randomIndex];
    document.getElementById("quote").innerHTML=randomQuote;
}
