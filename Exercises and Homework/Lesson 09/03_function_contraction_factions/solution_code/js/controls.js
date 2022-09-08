

// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking(){

    // Create output variables
    var contractionFound = "";
    var logEntry = "";

    // Get words from search forms
    var wordOne = document.querySelector("#firstWord").value.trim();
    var wordTwo = document.querySelector("#secondWord").value.trim();

    // Create phrase to test by combining wordOne and wordTwo with a space

        // Test phrase
        var testPhrase = wordOne + " " + wordTwo;

        // if Test Phrase returns false search phrase with words in reverse order
        var phraseResult = checkForConjunction(testPhrase);
        if(phraseResult == false){
            testPhrase = wordTwo + " " + wordOne;
            phraseResult = checkForConjunction(testPhrase);
        }


    // If return is true
        if(phraseResult != false){
            // Set the output variable to the result
            contractionFound = phraseResult;

            // Set the log variable to wordOne wordTwo and the contraction
            logEntry = document.createElement("p");
            logEntry.innerText = wordOne + " " + wordTwo + ": "+phraseResult;

        }else{
            // Set the output variable to "None Found"
            contractionFound = "None Found";

            // Set the log variable to wordOne wordTwo and no contraction wrapped in paragraph tags
            logEntry = document.createElement("p");

            logEntry.innerText = wordOne + " " + wordTwo + ": No Contraction";

        }

        // Update contractionResult
        document.querySelector("#contractionResult").innerText = contractionFound;

        // Add wordOne + wordTwo + result to log
        document.querySelector(".playAreaResultsLog").appendChild(logEntry);


        // Empty wordOne
        document.querySelector("#firstWord").value = "";

        // Empty wordTwo
        document.querySelector("#secondWord").value = "";

} // end conjunctionFormChecking





function resetAllForms(){

    // Empty Result
    document.querySelector("#contractionResult").innerHTML = "";

    // Empty wordOne
    document.querySelector("#firstWord").value = "";

    // Empty wordTwo
    document.querySelector("#secondWord").value = "";

    // Empty the log
    document.querySelector(".playAreaResultsLog").innerHTML = "";


} // resetAllForms




document.addEventListener('DOMContentLoaded', function(event) {

        // Bind conjunctionFormChecking to button
        document.querySelector("#btnCheckConjunction").addEventListener('click',function(e){
            e.preventDefault();
            conjunctionFormChecking();
        });

        // Bind reset to button
        document.querySelector("#btnReset").addEventListener('click',function(e){
            e.preventDefault();
            resetAllForms();
        });


});