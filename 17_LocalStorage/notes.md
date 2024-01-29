To access DOM elements from two HTML pages using a single JavaScript file and store some data locally, you can use the localStorage API along with the shared JavaScript file. Here's a simple example to demonstrate this:

Let's assume you have two HTML pages, page1.html and page2.html, and a shared JavaScript file, script.js.

page1.html:

<code>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page 1</title>
</head>
<body>
    <h1>This is Page 1</h1>
    
    <!-- Input field for data -->
    <input type="text" id="dataInput" placeholder="Enter data">

    <!-- Button to save data to local storage -->
    <button onclick="saveData()">Save Data</button>

    <!-- Include the shared JavaScript file -->
    <script src="script.js"></script>
</body>
</html>

</code>

<hr>

page2.html:

<code>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page 2</title>
</head>
<body>
    <h1>This is Page 2</h1>
    
    <!-- Display saved data from local storage -->
    <p id="savedData"></p>

    <!-- Include the shared JavaScript file -->
    <script src="script.js"></script>
</body>
</html>

</code>

<hr>

script.js:

<code>

// Function to save data to local storage
function saveData() {
    // Get the input value from page1.html
    var inputData = document.getElementById('dataInput').value;

    // Save the data to local storage
    localStorage.setItem('savedData', inputData);
}

// Function to display saved data on page2.html
function displaySavedData() {
    // Get the saved data from local storage
    var savedData = localStorage.getItem('savedData');

    // Display the saved data on page2.html
    document.getElementById('savedData').innerText = 'Saved Data: ' + savedData;
}

// Call the function to display saved data on page load
displaySavedData();


</code>


In this example, the saveData function is used to save data from an input field in page1.html to the localStorage. The displaySavedData function is responsible for retrieving the saved data and displaying it on page2.html. The shared JavaScript file, script.js, is included in both HTML pages to provide the common functionality.