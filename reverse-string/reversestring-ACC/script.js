document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const textInput = document.getElementById('textInput');
    const reverseButton = document.getElementById('reverseButton');
    const resultDiv = document.getElementById('result');
    
    // Function to reverse the string if it has 3 or more characters
    function reverseString() {
        const originalText = textInput.value;
        
        if (originalText.length >= 3) {
            const reversedText = originalText.split('').reverse().join('');
            resultDiv.textContent = reversedText;
        }
    }
    
    // Function to check input length and show/hide button accordingly
    function checkInputLength() {
        if (textInput.value.length >= 3) {
            reverseButton.style.display = 'inline-block';
        } else {
            reverseButton.style.display = 'none';
            // Clear result if input is less than 3 characters
            resultDiv.textContent = '';
        }
    }
    
    // Check input length on page load (fixes the reload bug)
    checkInputLength();
    
    // Add input event listener to show/hide the button based on input length
    textInput.addEventListener('input', checkInputLength);
    
    // Add click event listener for the reverse button
    reverseButton.addEventListener('click', reverseString);
    
    // Add keypress event listener for the Enter key
    textInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && textInput.value.length >= 3) {
            event.preventDefault(); // Prevent form submission if in a form
            reverseString();
        }
    });
});