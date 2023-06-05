// your code here
// Get the form and the h3 element
const form = document.querySelector('#urlForm');
const urlH3 = document.querySelector('#url');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get the input values
  const name = document.querySelector('#name').value;
  const year = document.querySelector('#year').value;
  
  // Update the query string in the h3 element
  urlH3.textContent = `https://localhost:8080/?name=${name}&year=${year}`;
  
  // Reset the form
  form.reset();
});
