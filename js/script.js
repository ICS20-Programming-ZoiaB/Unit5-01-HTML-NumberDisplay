// Copyright (c) 2022 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

function numbersSent() {
  
  //initializing the numbers and message variable to an empty string
  let numbers = "";
  let message = "";

  //getting the user values for the minimum and maximum numbers
  let minNumber = parseInt(document.getElementById("min-number").value);
  let maxNumber = parseInt(document.getElementById("max-number").value);

  //initializing the counter variable to the minNumber
  let counter = minNumber;

  //if statement checks if minNumber > maxNumber (there is an error)
  if (minNumber > maxNumber) {
    message = "Ensure that minimum value is less than or equal to maximum value.";
  }
    
  //else, complete while loop to create list of even numbers between min and max
  else {
    //while loop that specifies the range, so the code within the loop executes as long as the counter is greater than or equal to the minimum and less than or equal to the maximum
    while ((counter >= minNumber) && (counter <= maxNumber)) {
      numbers = numbers + counter + "<br>";
      counter = counter + 1;
      message = "Here are all the numbers between the minimum and maximum that you entered:<br><br>" + numbers;
    }
  }

  //displaying the results (the range of even numbers) back to the user
  document.getElementById("results").innerHTML = message;
}