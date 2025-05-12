document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const textInput = document.getElementById('textInput');
    const reverseButton = document.getElementById('reverseButton');
    const resultDiv = document.getElementById('result');
    
    // Add input event listener to show/hide the button based on input length
    textInput.addEventListener('input', function() {
        if (textInput.value.length >= 3) {
            reverseButton.style.display = 'inline-block';
        } else {
            reverseButton.style.display = 'none';
        }
    });
    
    // Add click event listener for the reverse button
    reverseButton.addEventListener('click', function() {
        const originalText = textInput.value;
        const reversedText = originalText.split('').reverse().join('');
        resultDiv.textContent = reversedText;
    });
});