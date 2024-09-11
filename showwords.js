<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Counter</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        #container {
            width: 300px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            text-align: center;
        }
        input[type="text"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }
        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        ul {
            list-style-type: none;
            padding: 0;
            margin-top: 20px;
        }
        li {
            background-color: #f2f2f2;
            margin: 5px 0;
            padding: 10px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div id="container">
        <input type="text" id="userInput" placeholder="Enter your text">
        <button onclick="displayWords()">Display Words</button>
        <ul id="wordList"></ul>
    </div>

    <script>
        function displayWords() {
            // Get the user input
            var userInput = document.getElementById("userInput").value;

            // Split the input into words
            var words = userInput.trim().split(/\s+/);

            // Get the word list element
            var wordList = document.getElementById("wordList");

            // Clear any existing content in the word list
            wordList.innerHTML = '';

            // Add each word as a list item
            words.forEach(function(word) {
                var listItem = document.createElement("li");
                listItem.textContent = word;
                wordList.appendChild(listItem);
            });
        }
    </script>
</body>
</html>
