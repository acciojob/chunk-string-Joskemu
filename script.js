// Function to chunk a string
function chunkString(str, chunkLength) {
    if (str === null || chunkLength <= 0) {
        return [];
    }

    let result = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.slice(i, i + chunkLength));
    }
    return result;
}

// Handling button click event
document.getElementById('chunkButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const chunkLength = parseInt(document.getElementById('chunkLength').value);

    if (inputString && !isNaN(chunkLength)) {
        const chunks = chunkString(inputString, chunkLength);
        document.getElementById('result').innerHTML = chunks.join(', ');
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid input!';
    }
});
