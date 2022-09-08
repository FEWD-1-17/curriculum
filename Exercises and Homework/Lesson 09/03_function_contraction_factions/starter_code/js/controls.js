

// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking(){

    // Create output variables
    var contractionFound = "";
    var logEntry = "";

    // Get words from search forms

    // Create phrase to test by combining wordOne and wordTwo with a space
    // Note - there is already a function called "checkForConjunction(testPhrase)" that will return the conjunction OR false


        // Test phrase

        // if Test Phrase returns false search phrase with words in reverse order


    // If return is true

            // Set the output variable to the result

            // Set the log variable to wordOne wordTwo and the contraction


            // Set the output variable to "None Found"

            // Set the log variable to wordOne wordTwo and no contraction wrapped in paragraph tags


        // Update contractionResult

        // Add wordOne + wordTwo + result to log


        // Empty wordOne

        // Empty wordTwo


} // end conjunctionFormChecking





function resetAllForms(){

    // Empty Result

    // Empty wordOne

    // Empty wordTwo

    // Empty the log

} // resetAllForms




document.addEventListener('DOMContentLoaded', function(event) {

        // Bind conjunctionFormChecking to button


        // Bind reset to button



});