

/*

This function will look to see if there is a conjunction listed in the global variable contractionList and return the conjunction.  It returns false if no conjunction is found.

@param searchPhrase text Input of two words that need to be checked

 */

function checkForConjunction(searchPhrase){

    // If searchPhrase is a string of at least 2 characters
    if(searchPhrase.length <2){
        return false;
    }

    // Loop through contractionList.
    for (var i = 0; i < contractionList.length; i++) {

        // If value is an array
        if(Array.isArray(contractionList[i])){
            // if position 1 matches
            if(contractionList[i][1]==searchPhrase){
                // Return position 0
                return contractionList[i][0];
            }
        }

    }


    // Return false
        return false;


}



