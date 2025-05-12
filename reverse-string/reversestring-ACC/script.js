document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const textInput = document.getElementById('textInput');
    const resultDiv = document.getElementById('result');
    
    // Function to reverse the string if it has 3 or more characters
    function reverseString() {
        const originalText = textInput.value;
        
        if (originalText.length >= 3) {
            const reversedText = originalText.split('').reverse().join('');
            resultDiv.textContent = reversedText;
        } else {
            resultDiv.textContent = '';
        }
    }
    
    // Check input length on page load (auto-reverses existing text if 3+ characters)
    reverseString();
    
    // Add input event listener to automatically reverse the string when typing
    textInput.addEventListener('input', reverseString);
});