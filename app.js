let heldValue = null;
let heldOperation = null;
let nextValue = null;


function showValue(location, value) {                       //REORGANIZE Separating Functions and Click Handlers 

    if (value === null){
        $(location).text('');
    } else {
        $(location).text(Number(value));
    }

}

function updateDisplay() {
    showValue('.held-value', heldValue);
    showValue('.next-value', nextValue);

}

function clearAll (){
    heldValue = null;
    heldOperation = null;
    nextValue = null;
}

function clearEntry() {
    nextValue = null;
}


function add(x,y){                                      
    return Number(x) + Number(y);
}


function subtract(x,y){
    return Number(x) - Number(y);
}

function multiply(x,y){
    return Number(x) * Number(y);
}

function divide(x,y){                                   //BONUS when divide 0, return Error
    if (Number(y) === 0){
        return "Error";

    } else {
        return Number(x) / Number(y);
    }
}

function squareroot(){                                  //BONUS
    return Math.sqrt(Number(value));

}

function inverse(Number){                               //BONUS
    return Number * -1;
}




function setHelpOperation(operation){                     
    if (heldOperation !== null) {
        heldValue = heldOperation(heldValue, nextValue);
    } else if (nextValue !== null){
        heldValue = nextValue;
    }
    nextValue = null;
    heldOperation = operation;
}





$('.digits button').click(function() {                      //REORGANIZE Separating Function and Click Handlers 
    if (nextValue === null){
        nextValue = "0"
    }
    nextValue += $(this).text();

   
    updateDisplay();                                        //Replace   showValue('.held-value', heldValue);  in Function updateDisplay 
                                                            //Replace   showValue('.next-value', nextValue);

});


$('.add').click(function () {
    setHelpOperation(add)
    $('.next-operation').text('+');                         //Repeat this for other * / - 
    updateDisplay();
  })
  
$('.subtract').click(function () {
    setHelpOperation(subtract)
    $('.next-operation').text('-');                         
    updateDisplay();
    
  });
  
$('.multiply').click(function () {
    setHelpOperation(multiply)
    $('.next-operation').text('x');                         
    updateDisplay();
  });
  
$('.divide').click(function () {
    setHelpOperation(divide)
    $('.next-operation').text('/');                         
    updateDisplay();
  });

  $('.squareroot').click(function () {                          //BONUS
    setHelpOperation(squareroot)
    $('.next-operation').text('Sqrt');                         
    updateDisplay();
  });

  $('.inverse').click(function () {                          //BONUS
    setHelpOperation(inverse)
    $('.next-operation').text('');                         
    updateDisplay();
  });

  
$('.equals').click(function () {
    setHelpOperation(null)
    $('.next-operation').text('');                         
    updateDisplay();
  });
  

  $('.clear-all').click(function () {
    clearAll();
    $('.next-operation').text(''); 
    updateDisplay();
  });
  
$('.clear-entry').click(function () {
   clearEntry();
   updateDisplay();
  });





