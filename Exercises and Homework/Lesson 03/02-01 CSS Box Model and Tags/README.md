# Nested Selectors: Tags and Boxes

### Description

Use nested selectors to target specific elements on the page.


### Requirements and Instructions

#### Images

* This selector and rule should ONLY affect images with this class.
* There should be a 3px border with a color of #131e27
* The TOTAL size of the image and border should be no more than exactly half the width of the container (hint: the total container width is 960px)

#### Feature Box

There's a section in the page with the class "featureBox" that has separate styling from the rest of the corestyles.  Implement the following:
* The TOTAL size of the box should be a maximum of exactly half of the container
* There should be 20px of space between the limit of the background and any content
* The H1 tag should be 30px and uppercase
* Reduce the left margin of UL and OL elements to 30px
* Style the strong tags in featurebox to have a background of #eaeaea, a thin border that is a middle grey, and some space between the text and the border.  Darken the text color to black to improve readability.
* BONUS: Use selector ".featureBox > *:first-child" to prevent any space at the top of the feature box outside of .featureBox's padding from existing.