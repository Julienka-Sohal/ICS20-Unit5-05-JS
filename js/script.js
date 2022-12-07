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
  navigator.serviceWorker.register("/ICS2O-Unit5-04-JS/sw.js", {
    scope: "/ICS2O-Unit5-04-JS/",
  })
}

//process
function myButtonClicked() {
  const day = document.getElementById("week").value
  const typeAge = document.getElementById("typeAge").value

  if (
    day == "Tuesday" ||
    day == "Thursday" ||
    (typeAge >= 12 && typeAge <= 25)
  ) {
    document.getElementById("weekday-discount").innerHTML =
      "You are eligible to get a discount!"
  } else {
    document.getElementById("weekday-discount").innerHTML =
      "You are not eligible to get a discount..."
  }
}
