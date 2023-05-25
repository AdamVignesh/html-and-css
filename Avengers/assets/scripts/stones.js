const card = document.createElement('div');
card.classList.add('card','col-lg-3','col-sm-6','col-md-3');
// card.classList.add('col-sm-6');

console.log("in stones");


// Set card content
card.innerHTML = `
<img src="../images/bot.png" class="card-img-top" alt="Image">
  <div class="card-img-overlay col-lg-12 col-md-12 col-sm-12">
    <h5 class="card-title">stone1</h5>
    <p class="card-text">descp</p>
  </div>
    `;

// Set card ID
card.id = 'hero';

document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    // ...
    document.body.appendChild(card);
  });
  
// Append card to the document body or any desired parent element
// document.getElementById('infiStones').appendChild(card);
// document.body.appendChild(card);
//  document.body.appendChild(card);
