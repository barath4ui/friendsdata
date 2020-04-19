
"use strict";


  fetch('https://barath4ui.github.io/json/sample.json')
  .then(response => response.json() )
  
  .then(result => displayData(result));


  function displayData(result)
  {
    let i;
    let outputDiv = document.getElementById("outputDiv");
    outputDiv.innerHTML ="";

    for(i =0; i<result.length; i++){

      outputDiv.innerHTML += `
            <div id="outputItem" class="outputItems">
              <h3>${result[i].Friend_Name}</h3>
              <h5>Mobile: ${result[i].Friend_Mobile}</h5>
              <p>${result[i].Friend_Location}</p>
            </div>
      `
    }
  }

