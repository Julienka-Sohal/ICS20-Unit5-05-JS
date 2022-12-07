// Copyright (c) 2022 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-05-JS/sw.js", {
    scope: "/ICS20-Unit5-05-JS/",
  })
}

//process
function myButtonClicked() {
  const lengthA = document.getElementById("lengthOne").value
  const lengthB = document.getElementById("lengthTwo").value
  const lengthC = document.getElementById("lengthThree").value
  
  // using the cosine law
  const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
  const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
  const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)

  //180 or not?
  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  if (sumOfAngles == 180) {
    if (angleA == angleB && angleA == angleC) {
      document.getElementById("triangles").innerHTML =
        "This is an equilateral triangle!"
    } else if (angleA == angleB || angleB == angleC) {
      document.getElementById("triangles").innerHTML =
        "This is an isosceles triangle!"
    } else {
      document.getElementById("triangles").innerHTML =
        "This is an scalene triangle!"
    }
  } else {
    document.getElementById("triangles").innerHTML =
      "This is not a triangle?!"
  }
}
