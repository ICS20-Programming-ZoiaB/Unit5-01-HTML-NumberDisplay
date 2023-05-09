// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function numbersSent() {
  
  //initializing the numbers and message variable to an empty string
  let numbers = "";
  let message = "";

  //getting the user values for the minimum and maximum numbers
  let minNumber = parseInt(document.getElementById("min-number").value);
  let maxNumber = parseInt(document.getElementById("max-number").value);

  //initializing the counter variable to the minimum number
  let counter = minNumber;

  //if statement to create an error message if user enters a minimum that is greater than maximum
  if (minNumber > maxNumber) {
    message = "Ensure that minimum value is less than or equal to maximum value.";
  }
  //elseif: if textfields are empty or invalid
  else if ((isNaN(minNumber)) || (isNaN(maxNumber))){
  message = "Ensure that both minimum and maximum numbers are entered.";
}
  
  //else, complete while loop and create list of numbers from minimum to maximum
  else {
    //while loop that specifies the range, so the code executes as long as the maximum is greater than the minimum
    while ((counter >= minNumber) && (counter <= maxNumber)) {
      numbers = numbers + counter + "<br>";
      counter = counter + 1;
      message = "Here are all the numbers between the minimum and maximum numbers that you entered:<br><br>" + numbers;
    }
  }

  //displaying the range of numbers back to the user
  document.getElementById("results").innerHTML = message;
}