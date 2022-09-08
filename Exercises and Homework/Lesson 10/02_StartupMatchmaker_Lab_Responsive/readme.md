#FEWD Responsive Basics: Member List

---


###Description

You've been asked to build a member company list for Startup Matchmaker that is both desktop and mobile friendly. The blocks should adjust their sizing and style based on the width of the screen.


###Requirements
* Add the viewport meta tag <meta name="viewport" content="width=device-width, initial-scale=1">
* The maximum size of the content is 960px wide
* The member companies should be displayed 2-across at desktop sizes and 1-across on tablet sizes and smaller (768px)
* The member company logo should center and be above everything except the header at sizes below (and including)768px.
* The width of the logo for smaller screens should never exceed 35%
* Put a 1px solid grey border between each member company.  Adjust padding and margin as necessary
* Re-balance the location and skills columns so that they are each half the width on tablet sizes


###Steps

* The member company elements are stored in containers with the class "responsiveTileGroupItem".
    * Set these blocks to be exactly half the available width by default
    * Use floats to make them display 2-across
    * Add media queries so that they are 1-across and full width on anything smaller than a 960px screen
* Add media queries to the memberCompanyBlock.css to fufill the technical requirements


###Example Media Query

@media only screen and (min-width: 320px) {
    .myClass {
        color: rgb(30,50,112);
    }
}