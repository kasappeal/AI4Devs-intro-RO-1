# Prompts

AI used: Claude 3.7 Sonnet 

## First prompt:

```markdown
## Task description

Starting with this code:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>

Create a web that ask for text as input from the user and when the users clicks in a button, reverse the text introduced by the user as input.

## Acceptance criteria

    The button must appear hidden by default
    The button will show up when user inputs more than three characters

Step by step example:

    The user wants to input the string "matrix"
    The user inputs the character "m". The button doesn't show up.
    The user inputs the character "a". The button doesn't show up.
    The user inputs the character "t". The button shows up!
    The user deletes the last character. The button hides.
    The user deletes the last character. The button doesn't show up.
    The user adds the character "a". The button doesn't show up.
    The user adds the character "t". The button shows up!
    The user adds the character "r". The button keeps shown.
    The user adds the character "i". The button keeps shown.
    The user adds the character "x". The button keeps shown.
    The user clicks the button.
    Below the input, appears the text input by the user "matrix" but in reverse: "xirtam"

## Expected output

The expected output is the final code to be placed in the index.html and script.js files.
```

## Second prompt

```markdown
New acceptance criteria: the user can click the button or push the "enter" key to reverse the string. 

Remember: only must reverse and show the string if the input text has 3 or more characters.
```

## Third prompt

```markdown
I've detected a bug: if I enter a text with more than 3 characters and reload the page, the input keeps the same text but the button is not shown.
```

## Fourth prompt

```markdown
Acceptance criteria change:

Instead of the string is reversed when users press the enter key or clicks on the button, the string must be reversed every time the user enter a new character only when the input string has at least 3 characters.

If the user inputs a string and reloads the page, if the string that is in the input has at least 3 characters must be reversed automatically once the web is loaded.
```

## Fifth prompt

```markdown
Remove the button because it is not needed anymore
```