var wordtotal = 0;
var generated = false;

function generate(){

  for (n = 1 ; n < 7 ; n++){
    document.getElementById('guess').innerHTML = ""
  }

  var cases = "";
  var firstcasex = 0;
  var firstcasey = 0;
  var letter = 0;
  var direction = 0;
  var word = "";
  var ram = ""
  wordtotal = 0;

  if (document.getElementById("correct2")){
    document.getElementById("correct2").id = "correct"
  }

  var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for(i = 1; i < 11; i++){
    for (o = 1; o < 11; o++){
      cases += "<div class='case'><p>" + alpha[Math.floor((Math.random() * 26))] + "</p></div>";
    }
    document.getElementById("line_" + i).innerHTML = cases;
    cases = "";
  }

  for (w = 1 ; w < 7 ; w++){
    cases = ""
    letter = 0
    word = document.getElementById('word'+w).value;
    for (n = 1 ; n < word.length+1 ; n++){
      document.getElementById('guess').innerHTML += " _ "
    }
    if (w != 6){
      if (document.getElementById('word'+(w+1)).value != "" && w != 3){
        document.getElementById('guess').innerHTML += "&nbsp&nbsp&nbsp"
      }
    }
    if (w == 3){
      document.getElementById('guess').innerHTML += "<br>"
    }
    word = word.toUpperCase();
    wordtotal += word.length
    console.log(wordtotal)
    firstcasex = Math.floor((Math.random() * 9)+1);
    firstcasey = Math.floor((Math.random() * 9)+1);
    direction = Math.floor((Math.random() * 4)+1);;

    if (direction == 1 && word != ""){
      if (firstcasex + word.length >= 10){
        firstcasex += 10-(firstcasex+word.length)
      }
      for(o = firstcasex; o < firstcasex+word.length ; o++){
        console.log(document.getElementsByClassName("case")[o + 10 * firstcasey].innerHTML.charAt(7))
        if (document.getElementsByClassName("case")[o + 10*firstcasey].innerHTML.charAt(7) == "l"){
          console.log("restart")
          generate()
          break;
        }
        document.getElementsByClassName("case")[o + 10*firstcasey].innerHTML = "<p id='letter'>" + word.charAt(letter) + "</p>";
        letter += 1;
      }
    }

    if (direction == 2 && word != ""){
      if (firstcasey + word.length >= 10){
        firstcasey += 10-(firstcasey+word.length)
      }
      for(o = firstcasey; o < firstcasey + word.length ; o++){
        console.log(document.getElementsByClassName("case")[o + 10 + firstcasex].innerHTML.charAt(7))
        if (document.getElementsByClassName("case")[o * 10 + firstcasex].innerHTML.charAt(7) == "l"){
          console.log("restart")
          generate()
          break;
        }
        document.getElementsByClassName("case")[o * 10 + firstcasex].innerHTML = "<p id='letter'>" + word.charAt(letter) + "</p>";
        letter += 1;
      }
    }

    if (direction == 3 && word != ""){
      if (firstcasex + word.length >= 10){
        firstcasex += 10-(firstcasex+word.length)
      }
      for(o = firstcasex; o < firstcasex+word.length ; o++){
        console.log(document.getElementsByClassName("case")[o + 10 * firstcasey].innerHTML.charAt(7))
        if (document.getElementsByClassName("case")[o + 10 * firstcasey].innerHTML.charAt(7) == "l"){
          console.log("restart")
          generate()
          break;
        }
          document.getElementsByClassName("case")[o + 10 * firstcasey].innerHTML = "<p id='letter'>" + word.charAt(word.length - letter -1) + "</p>";
          letter += 1;
      }
    }

    if (direction == 4 && word != ""){
      if (firstcasey + word.length >= 10){
        firstcasey += 10-(firstcasey+word.length)
      }
      for(o = firstcasey; o < firstcasey + word.length ; o++){
        console.log(document.getElementsByClassName("case")[o + 10 + firstcasex].innerHTML.charAt(7))
        if (document.getElementsByClassName("case")[o * 10 + firstcasex].innerHTML.charAt(7) == "l"){
          console.log("restart")
          generate()
          break;
        }
        document.getElementsByClassName("case")[o * 10 + firstcasex].innerHTML = "<p id='letter'>" + word.charAt(word.length - letter - 1) + "</p>";
        letter += 1;
      }
    }
  }
}

function correct(){
  if (document.getElementById("correct")){
    for (i = 0; i < wordtotal; i++){
      document.getElementById("letter").id = "letter_2"
    }
    document.getElementById("correct").id = "correct2"
  } else {
    for (i = 0; i < wordtotal; i++){
      document.getElementById("letter_2").id = "letter"
    }
    document.getElementById("correct2").id = "correct"
  }
}

function printit(){
  document.getElementById("everything").style.opacity = 0;
  print()
  document.getElementById("everything").style.opacity = 1;
}
