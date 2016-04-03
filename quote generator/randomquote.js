$(document).ready(function() {
  $("#newQuote").click(function() {    
    var quote = [
      {
        quotes: "Only assholes feel sorry for themeselves.",
        speaker: "Haruki Murakami"
      },
      {
        quotes: "Pain is evitable, suffering is optional.",
        speaker: "Haruki Murakami"
      },
      {
        quotes: "If you remember me, then I don't care if anyone forgets.",
        speaker: "Haruki Murakami"
      },
      {
        quotes: "Cherish your human connections: your relationships with friends and family.",
        speaker: "Joseph Brodsky"
      },
      {
        quotes: "Life is 10% what happens to you and 90% how your react to it.",
        speaker: "Charles R. Swindoll"
      },
      {
        quotes: "In order to succed, we must first believe that we can.",
        speaker: "Nikos Kazantzakis"
      },
      {
        quotes: "Anything is possible, your will just has to be stronger than the force of giving up.",
        speaker: "Soulero"
      },
      {
        quotes: "Don't watch the clock; do what it does. Keep going.",
        speaker: "Sam Levenson"
      },
      {
        quotes: "If you can dream it, you can do it.",
        speaker: "Walt Disney"
      },
      {
        quotes: "With the new day comes new strength and new thoughts.",
        speaker: "Eleanor Roosevelt"
      },
      {
        quotes: "The secret of getting ahead is getting started.",
        speaker: "Mark Twain"
      },
      {
        quotes: "Never complain and never explain.",
        speaker: "Benjamin Disraeli"
      },
      {
        quotes: "Aim for the moon. If you miss, you may hit a star.",
        speaker: "W. Clement Stone"
      },
      {
        quotes: "You have to learn the rules of the game. And then you have the play better than anyone else.",
        speaker: "Albert Einstein"
      },
      {
        quotes: "Problems are not stop signs, they are guidelines.",
        speaker: "Robert H. Schuller"
      },
      {
        quotes: "By failing to prepare, you are preparing to fail.",
        speaker: "Benjamin Franklin"
      },
      {
        quotes: "Things do not happen. Things are made to happen.",
        speaker: "John F. Kennedy"
      },
      {
        quotes: "If you're going through hell, keep going.",
        speaker: "Winston Churchill"
      },
      {
        quotes: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
        speaker: "Samuel Beckett"
      },
      {
        quotes: "Quality is not an act, it is a habit.",
        speaker: "Aristotle"
      },
      {
        quotes: "Setting goals is the first step in turning the invisible into the visible.",
        speaker: "Anthony Robbins"
      },
      {
        quotes: "Expect problems and eat them for breakfast.",
        speaker: "Alfred A. Montapert"
      }
    ];
      var randomQuote = Math.floor(Math.random() * quote.length);
    
      $("#quote").fadeOut('fast', function() {
        $("#quote").text(quote[randomQuote].quotes).fadeIn();
      });
      
      $("#speaker").fadeOut('fast', function() {
        $("#speaker").text("-" + quote[randomQuote].speaker).fadeIn();
      });
});     
});