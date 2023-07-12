import myJson from './example.json' assert {type: 'json'};


 
    function predict() {
    
      var random =  Math.floor(Math.random() * images.length)
      var image = images[random];
      
      // document.getElementById("theImage").src=image; // Replace first image with random picture
      
      var imgElement = document.createElement("img");
      imgElement.src = image;
      imgElement.width="350";

      gif.innerHTML = ""; // Clear previous image
      gif.appendChild(imgElement);
     var result = document.getElementById("result");
      result.innerHTML = ""; // Clear previous result
       wanna.textContent = "this is number variable" +number
      wannaa.textContent = "this is random variable" +random

      if (number === random) {
        result.textContent = "You won!";
      } else {
        result.textContent = "You lost!";
      }
    }

    

