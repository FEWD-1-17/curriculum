#FEWD Responsive Basics: Navigation

---


###Description

You've been asked to make the navigation fully responsive for the site you have just built. A more junior front-end developer has created the basic nav but it lacks responsive support and a mobile hamburger toggle.


###Requirements

* Add the viewport meta tag <meta name="viewport" content="width=device-width, initial-scale=1">
* The nav should be on the right edge at the largest size
* When the screen is between 640px and 800px, the nav should stay horizontal but move below the "Startup Matchmaker"
* When the screen is LESS than 640px, the nav should hide and instead a hamburger-style toggle should show
* When the hamburger is clicked, show the navigation if it isn't showing, hide it if it is showing


###Hints

* Treat each media query break point as a distinct layout problem
* To show and hide, consider adding or removing a class


###Example Media Query

@media only screen and (min-width: 320px) {
    .myClass {
        color: rgb(30,50,112);
    }
}