const textMessages = ["You are awsome", "Every day counts", "Do what you love", "No one is you and that is your power", "You look fine", "Life begins at the end of your comfort zone", "I'm doing this for me", "Don't compare your chapter 1 to someone else's chapter 20", "Falling down is an accident. Staying down is a choice", "You matter"];

function getRandom () {

    const randomNumber = Math.random();
    const test = randomNumber*(textMessages.length-1);
    const flooredNumber = Math.floor(test);

    document.getElementById("result").innerText = textMessages[flooredNumber];
  }