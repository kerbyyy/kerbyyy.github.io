function calculateFibonacci() {
    var fibTermInput = document.getElementById('fibTermInput');
    var fibonacciResult = document.getElementById('fibonacciResult');
  
    // Get the input value and parse it as an integer
    var fibTerm = parseInt(fibTermInput.value);
  
    // Check if the input value is a valid integer
    if (isNaN(fibTerm) || fibTerm < 0 || fibTerm > 1474) {
        fibonacciResult.innerHTML = "Invalid Input. Please enter a valid integer between 0 and 1474.";
        return;
    }
  
    // Calculate the square root of 5
    const squareFive = Math.sqrt(5);
  
    // First part of Binet's Formula: (1 + √5 / 2)^n
    const form1 = 1 + squareFive;
    const stageDiv1 = form1 / 2;
    const stagePow1 = Math.pow(stageDiv1, fibTerm);
  
    // Second part of Binet's Formula: (1 - √5 / 2)^n
    const form2 = 1 - squareFive;
    const stageDiv2 = form2 / 2;
    const stagePow2 = Math.pow(stageDiv2, fibTerm);
  
    // Final part of Binet's Formula
    const lastStg = stagePow1 - stagePow2;
    const finalAns = lastStg / squareFive;
  
    fibonacciResult.innerHTML = `F<sub>${fibTerm}</sub> = (${stageDiv1.toFixed(20)})<sup>${fibTerm}</sup> - (${stageDiv2.toFixed(20)})<sup>${fibTerm}</sup> ÷ ${squareFive.toFixed(20)}<br><br>` +
      `F<sub>${fibTerm}</sub> = (${stagePow1.toLocaleString("en-US", { maximumFractionDigits: 20 })}) - (${stagePow2.toLocaleString("en-US", { maximumFractionDigits: 20 })}) ÷ ${squareFive.toFixed(20)}<br><br>` +
      `F<sub>${fibTerm}</sub> = ${lastStg.toLocaleString("en-US", { maximumFractionDigits: 20 })} ÷ ${squareFive.toLocaleString("en-US", { maximumFractionDigits: 20 })}<br><br>` +
      `F<sub>${fibTerm}</sub> = ${finalAns.toLocaleString("en-US", { maximumFractionDigits: 20 })}`;
  
    // Clear the text box
    fibTermInput.value = '';
  
    // Focus back on the input field after calculating
    fibTermInput.focus();
  }
  
  // Function to handle Enter key press
  function handleEnterKey(event) {
    if (event.key === 'Enter') {
      calculateFibonacci();
    }
  }
  
  var fibTermInput = document.getElementById('fibTermInput');
  var fibonacciResult = document.getElementById('fibonacciResult');
  
  // Add an event listener to the input field for Enter key press
  fibTermInput.addEventListener('keyup', handleEnterKey);
  
  
  // Toggle dark mode
  const lightModeToggle = document.getElementById('lightModeToggle');
  const body = document.body;
  const modeLabel = document.getElementById('modeLabel');
  
  lightModeToggle.addEventListener('change', () => {
    if (lightModeToggle.checked) {
        body.classList.add('light-mode');
        modeLabel.textContent = "Dark Mode";
    } else {
        body.classList.remove('light-mode');
        modeLabel.textContent = "Light Mode";
    }
  });