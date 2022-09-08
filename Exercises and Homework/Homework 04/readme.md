# DOTS: The Game

Dots is an interactive game with up to 3 levels. In each level, the user has to click a moving ball until they reach a certain score, at which point they can move on to the next level.

## Level 1
For level 1, implement a single event listener to the `.js-ball` element. When the user clicks on the ball, it should increment their score by 10 points. When the user reaches 100 points, they've beat the level and can move on!

## Level 2
Level 2 has 3 moving balls that the user can click on to increment their score. Implement a single click handler to listen for when a user clicks on one of the balls and increment their score until they reach 100.

## Level 3 - Bonus Level
Level 3 also has 3 moving balls but of different sizes! Each ball is therefore worth a different amount of points. The number of points the user should get for each ball is saved in side of a data attribute on the ball HTML elements. You can access the data attribute of an element from the event object by looking at the event target's `dataset` property. When the user clicks on a ball, increment their score based on how many points that ball is worth until they reach 100.
