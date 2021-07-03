// convert Age in days
//  we wnat year that in which year we were born 
//  we will take our age nd multiply with 365 days to convert age in days

//  connect thie click button with the above variable
//  to do this we are gonna merge this in a function

function ageInDays(){
    var birthYear = prompt('What year were you born.. Good Friend?')
    var ageinDayss = (2021-birthYear)*365;
    console.log(ageinDayss);// tgis will give our age in days but it will display our age in console . so to print this age in web page what we need to use a DOM here and crete a h1 variable and add it to DOM. And we will place it i an empy box places below the conatine in which buttons are present.

    var h1 = document.createElement('h1');
    var textAnswer = document. createTextNode('you are ' + ageinDayss + 'days old');
//  once the textAnswer is created it is thyen added to h1 variable
h1.setAttribute('id','ageInDays')
  console.log(ageinDayss);
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

//  in html add this fuction in click button which will display the prompt after clicking the click button


// now we need to create a reset button work for us
//  to do this create function

function reset(){
    document.getElementById('ageInDays').remove();//removes the previous data
    // in html in reset button
}
