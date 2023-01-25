# Nested Selectors: A Core Style Guide

### Description 

Large websites should be equipped with a complete style guide. This is useful for content writers as they will have a toolkit of html to use that is pre-styled and consistent with the brand. A variety of selector approaches will be needed.

### Selector Examples

#### Select Multiple Elements
Use a comma
.myClass, p, h2 {}

#### Select element only inside another element
.myClass p {}

#### Select element only when it's an IMMEDIATE child of a particular element
.myclass > p {}

#### Select elements that are exact match for both tag AND class combination
p.myclass {}


### Requirements and Instructions

* All styles should ONLY apply to elements inside the class .relaxr-corestyles

#### The Headers
* All headers should be the color #033048, have a weight of 600, and a top margin of 16px
* Make H1's size: 40px
* Make H2's size: 32px
* Make H3's size: 26px
* Make H4's size: 20px
* Make H5's size: 18px
* Make H6's size: 16px

#### The Paragraphs and Text
* Paragraph size is 26px
* The paragraph featureText should be italic and a 30px size
* Make sure that the EM and STRONG tags work in both regular and feature text paragaphs. This may mean that extra rules will be needed for the featureText paragraphs.

#### List Elements
* UL and OL tags should have a margin of 30px 0 30px 80px
* Nested UL and OL tags should have a margin of 12px 0 12px 40px
* List items in UL should be "disc" style
* List items in OL should be "decimal" style
* BONUS: 2nd level (and ONLY 2nd level) ordered list times should be "upper-roman" style 