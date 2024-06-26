# lead-card-breath-effect

o implement the lead card component with the specified features, including dynamic color indicators and breathing effects based on lead age, follow the steps below. We’ll focus on creating a basic lead card view using HTML, CSS for styling, and JavaScript for dynamic behavior. Let’s start with the HTML structure and basic styling, and then we’ll add the dynamic features for color and breathing effect based on lead age.




HTML Structure (index.html)




<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sales Lead Card</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="lead-card">
    <div class="lead-header">
      <h2>Lead Information</h2>
    </div>
    <div class="lead-details">
      <div class="lead-name">
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name">
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name">
      </div>
      <div class="lead-phone">
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone">
      </div>
      <div class="lead-source">
        <label for="source">Lead Source:</label>
        <input type="text" id="source" name="source">
      </div>
      <div class="lead-salesman">
        <label for="salesman">Salesman Assigned:</label>
        <input type="text" id="salesman" name="salesman">
      </div>
      <div class="lead-rv">
        <label for="rv">RV Unit Interested:</label>
        <input type="text" id="rv" name="rv">
      </div>
      <div class="lead-date">
        <label for="capture-date">Capture Date:</label>
        <input type="date" id="capture-date" name="capture-date">
      </div>
    </div>
    <div class="lead-stage">
      <p>Sales Pipeline Stage:</p>
      <div class="stage-indicator" id="stage-indicator"></div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>




CSS Styles (styles.css)




body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}




.lead-card {
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}




.lead-header {
  text-align: center;
}




.lead-details {
  margin-bottom: 20px;
}




.lead-details label {
  display: block;
  margin-bottom: 5px;
}




.lead-details input {
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}




.lead-stage {
  text-align: center;
}




.stage-indicator {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: 10px;
  animation: breathe 2s infinite alternate; /* Initial breathing animation */
}




@keyframes breathe {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1.1);
    opacity: 0.7;
  }
}




JavaScript (script.js)




// Example to dynamically change breathing effect based on lead age
document.addEventListener("DOMContentLoaded", function() {
  const captureDateInput = document.getElementById('capture-date');
  const stageIndicator = document.getElementById('stage-indicator');




  // Calculate lead age in days
  function calculateLeadAge() {
    const captureDate = new Date(captureDateInput.value);
    const today = new Date();
    const diffTime = Math.abs(today - captureDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  }




  // Function to determine breathing animation duration based on lead age
  function setBreathingEffect() {
    const leadAgeInDays = calculateLeadAge();
    const breathDuration = leadAgeInDays * 1000; // Convert days to milliseconds for animation duration
    stageIndicator.style.animationDuration = `${breathDuration}ms`;
  }




  captureDateInput.addEventListener('change', setBreathingEffect);
});




Explanation:




	1.	HTML Structure: Defines the basic structure of the lead card with input fields for lead information and a div for the stage indicator.
	2.	CSS Styles: Styles the lead card and its components, including input fields, headers, and the stage indicator.
	3.	JavaScript: Provides functionality to calculate the lead age based on the capture date input, and adjusts the breathing animation duration accordingly. The setBreathingEffect function calculates the animation duration dynamically based on the lead age in days.




This setup allows you to visualize the lead card with dynamic breathing effects and customizable styling based on the lead’s stage in the sales pipeline. Adjust the colors and breathing animations further based on your design preferences and specific requirements.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/lead-card-breath-effect.git
cd lead-card-breath-effect
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
