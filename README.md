# angular_store
1. run npm i to install all the neccessary dependencies
2. run cd my_Store to change directory to angular project
3. run ng serve to start the application 

Notes:
- a product can be added to the cart by clicking a value from the drop down menu and then add it to the cart
- a detailed view of the product is available when clicking on the picture of the product
- in the detailed view the same functionality is available for adding the product
- in the cart view, a products value can also be changed via up and down buttons
- to delete a product, simply change the quantity to 0 by clicking down
- the total price is calculated based on the cart value
- Name, adress and total price are being taken to the success page once the submit button is pressed
- submit button is being enabled when all forms are filled

# changes for second review:
- added angular FormControl for credit Card
- added ngModelChange to onQuantityChange() Method in cart template (line 16)