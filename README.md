# Echange

This is JavaScript code that creates two input fields with the id's 'usd' and 'mad' respectively. It also defines a function called Echange() to convert Moroccan Dirhams to US dollars:
that takes in an optional parameter called 'coff' with a default value of '10.66'.

The function sets the text alignment of the body to center, selects the first div element on the page, sets some styles on the input fields, and assigns event listeners to the 'usd' and 'mad' input fields.

When the user types in the 'usd' field, the function multiplies the value entered by the 'coff' parameter and sets the resulting value to the 'mad' field. It also changes the background color of the 'usd' field to '#eee'.

Similarly, when the user types in the 'mad' field, the function divides the value entered by the 'coff' parameter and sets the resulting value to the 'usd' field. It also changes the background color of the 'mad' field to '#eee'.

The function is called at the end of the script with no parameter passed to it, which will set the default value of 'coff' to 10.66.
