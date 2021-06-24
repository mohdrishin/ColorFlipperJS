let initialText = 'Select a New Color';
let ColorCodeReset = 'Simple Hex';
// console.log(initialText);

//redbutton
function redBackgroundChange(){
    let redColor = 'ff0000';
    document.getElementById('mainbody').style.backgroundColor = '#ff0000';
    document.getElementById('text').innerHTML = 'Background Color: Red';
    document.getElementsByClassName('colorcode')[0].innerHTML = `Hex Code ${redColor}`;
    console.log("redbuttonclicked");
}

//greenbutton
function greenBackgroundChange(){
    let greenColor = '#008000';
    document.getElementById('mainbody').style.backgroundColor = '#008000';
    document.getElementById('text').innerHTML = 'Background Color: Green';
    document.getElementsByClassName('colorcode')[0].innerHTML = `Hex Code ${greenColor}`;
    console.log("greenbuttonclicked");
}

//bluebutton
function blueBackgroundChange(){
    let blueColor = '#00308F';
    document.getElementById('mainbody').style.backgroundColor = '#00308F';
    document.getElementById('text').innerHTML = 'Background Color: Blue';
    document.getElementsByClassName('colorcode')[0].innerHTML = `Hex Code ${blueColor}`;
    console.log("bluebuttonclicked");
}

//yellowbutton
function yellowBackgroundChange(){
    let yellowColor = '#FFFF00';
    document.getElementById('mainbody').style.backgroundColor = "#FFFF00";
    document.getElementById('text').innerHTML = 'Background Color : Yellow';
    document.getElementsByClassName('colorcode')[0].innerHTML = `Hex Code ${yellowColor}`;
    console.log("yellowbuttonclicked");
}



//resetbutton
function resetBackgroundColor(){
    console.log("resetbuttonclicked");
    document.getElementById('mainbody').style.backgroundColor = '#fff';
    document.getElementById('text').innerHTML =  initialText;
    document.getElementsByClassName('colorcode')[0].innerHTML = ColorCodeReset;
}

redbtn.addEventListener("click", redBackgroundChange);
greenbtn.addEventListener("click", greenBackgroundChange);
bluebtn.addEventListener("click", blueBackgroundChange);
yellowbtn.addEventListener("click", yellowBackgroundChange);
resetbtn.addEventListener("click", resetBackgroundColor);