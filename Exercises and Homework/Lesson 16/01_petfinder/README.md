#FEWD Week #6: Pet Finder


---


###Exercise Problem

You've been asked to build a pet information page where visitors can read about the different types of pets they might want to adopt, what sort of food/care they need, and see pictures of the animals.

The client has had a designer create the basic html and css they need but now need a front end developer to make it work.

Additionally, their CMS has exported all their content into a JSON object in data.js.

What should happen:
1. The user selects a pet type at the top of the page.
2. The content is loaded from the JSON object.
3. The content is then populated into the HTML
    * The basic specifications should be rendered in a Definition List (dl/dt/dd tags)
    * The fields trainability and fitsOnLap should have images displayed instead of text.  A checkmark for when one of them is possible, and an X when it's not.
    * Food should be an unordered list
4. Images
    * Show each thumbnail
    * Wrap each thumbnail with a link to the full image
    * When a thumbnail is clicked on, the full image is loaded into the large image
5.  The adoption group and ideal owner sections should be unordered lists.
6.   The adoption groups should open new windows when their links are clicked on.
7. When the page first loads, it should show the data from the default selection in the SELECT tag.
8. General Tips
    * The designer created some classes to help with the layout and sizing. Look through the CSS to find them all.
    * Once the javascript is written, clean out any unecessary html left in the original document. There may be tags that are not needed in the original html that are leftovers from the design process.

 #### Helpful jQuery Function List

 * empty()
 * append()
 * val()
 * text()
 * attr()
 * on()
 * children()

Some of these may be used in multiple ways.  For example, attr() can be used to GET an attribute or to SET an attribute.

#### Other hints and tips

* You will need to use compound selectors such as ".myClass > p"
* The JSON object contains arrays in some places
* You can use a For Loop on arrays but not objects
* A specific element of an array can be addressed with square brackeds such as: myArray[1]
* A specific element of an object can be addressed with dot notation OR square brackets.  Both of these are valid: myObject['indexName'] or myObject.indexName

### Bonus Goals

#### Bonus One: More Animals

Add a new animal type to the data.js. Don't forget to fill out every required part.

#### Bonus Two: Armor the Code

This exercise by default has full and complete data in the JSON object. What happens if the client forgets to fill in something? Will the code still work if a particular field is missing?  How can the code be designed so that it will not crash is a field has been omitted?

Hint: "if(typeof variableName == 'undefined'){}" may be of use here.

#### Bonus Three: Image Description

The client has asked if the alt attribute of the thumbnail can be displayed when the thumbnail is hovered over. Add functionality to show the image's text title/alt attribute when the most hovers on it.

Hint: jQuery's mouseover() and mouseout() can be of help here.


#### Bonus Four: AJAX!

Instead of linking to the data.js file, use the jQuery.getJSON() function to:
1) pull the json data from the url https://kasigi.github.io/petfinderJSON/data.json
2) process the data and bind the on change event for pet selection only after the data loads