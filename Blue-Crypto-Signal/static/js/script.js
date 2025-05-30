// script.js
const blogEntries = document.querySelectorAll('.h-full.border-2.border-gray-200.border-opacity-60.rounded-lg.overflow-hidden.image-container');

const options = {
  root: null,
  threshold: 0.2,
};

function animateOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');
      observer.unobserve(entry.target);
    }
  });
}

// JavaScript to toggle the visibility of menu items when clicking the hamburger icon
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const menuItems = document.getElementById('menuItems');

  menuBtn.addEventListener('click', function () {
      menuItems.classList.toggle('active');
  });
});


// Connect to the SocketIO server
const socket = io.connect('http://' + document.domain + ':' + location.port);
    
// Function to add a new signal to the container
function addSignalToContainer(signal) {
  // Create a new signal card element
  const signalCard = document.createElement('div');
  signalCard.className = 'p-4 lg:w-1/3 md:w-1/2 w-full';
  signalCard.innerHTML = `
    <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${signal[1]}</h2>
      <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">${signal[2]}</h1>
      <p class="leading-relaxed mb-3">Timestamp: ${signal[4]}</p>
    </div>
  `;

  // Append the new signal card to the container
  const freeSignalsContainer = document.getElementById('free_signals_container');
  freeSignalsContainer.appendChild(signalCard);
}

// Listen for the 'new_signal' event from the server
socket.on('new_signal', function(signal) {
  addSignalToContainer(signal);
});


    document.addEventListener("DOMContentLoaded", function () {
        const calculateBtns = document.querySelectorAll(".calculate-btn");

        calculateBtns.forEach((calculateBtn) => {
            calculateBtn.addEventListener("click", function () {
                const card = calculateBtn.closest(".signal-card");
                const portfolioSize = parseFloat(card.querySelector(".portfolio-size").value);
                const riskPercentage = parseFloat(card.querySelector(".risk-percentage").value);
                const entryPrice = parseFloat(card.querySelector(".entry-price").value);
                const stopLossPrice = parseFloat(card.querySelector(".stop-loss").textContent);

                const totalAmountAtRisk = (portfolioSize * riskPercentage) / 100;
                const positionSize = totalAmountAtRisk / (entryPrice - stopLossPrice);

                const resultElement = card.querySelector(".result");
                resultElement.innerHTML = `Position Size: ${positionSize.toFixed(2)}`;
            });
        });
    });

  

    
    
  

  




