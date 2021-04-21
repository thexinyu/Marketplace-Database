# db_marketplace

1. Online Marketplace Project
2. Team Root (Group #1)
3. Andrew Mou, Marco Tortolani, Emily Wang, Xinyu Wu - Section 3 
4. Our project is focused on the implementation of an online marketplace similar to Amazon in which there are many shops that each sell an assortment of items.  There are many users that can visit many shops.  Each user can place multiple items into a cart to purchase.  Each item also belongs to a specific category such as “electronics” or “books”.  Such an implementation is designed to create an efficient way of organizing customer data and purchases into a database of an online marketplace.
5. https://lucid.app/lucidchart/b498bab7-81e6-472d-8064-71b43d038cae/edit?shared=true&page=0_0#   - Old Version (with more classes)
    https://lucid.app/lucidchart/e7b38e70-ca1c-402d-9b02-3935aa11dbd3/edit?shared=true&page=0_0#    - New Version (updated with fewer classes)
  PDF attached with our submission
6. The user class contains a primary key userID (int), a foreign key cartID (int), a user’s first name, last name, username, password, email, phone number, as well as dates for when that user’s account was created and updated.
7. Some of the domain object data models include shop, items, and cart.  The shop class contains a primary key shopID (int),  a shop name (string),  and time stamps for when the shop was created and updated.  The items class contains a primary key itemID (int), a foreign key shopID (int), item name (string), item price (decimal), item inventory (int), item category (Category referring to the enumeration named “Category”), as well as dates for when the item was created and updated.  Lastly, the carts class includes a primary key and foreign key userID (int) as well as dates for when the cart was created and updated.
8. In this online marketplace, a user is able to browse items from many shops.  The user has a many to many relationship with the shop class because a shop can have many users and a user can shop around at many shops.  To implement the many to many relationship, we utilized a reification with a “visits” mapping table to show that many users can visit many shops.  Furthermore, the user has a one to one relationship with the carts class because each user has one cart so that the user can use the cart to add items to purchase.  The visits class contains a primary key visitID (int), a foreign key userID (int), a foreign key shopID (int), and a date for when the user first visited the shop (created) and when the user visited the shop most recently (updated).  Additionally, the user can add many items to the cart.
9. This online marketplace also contains a many to many relationship between the Cart and Items classes, because multiple carts will contain many items. To implement this many to many relationship, we used the “cart_items” mapping table to display how they are connected. 
10. Our portable enumerations are essentially the various categories that our online shop items fall under. These categories include: household items, clothing & shoes, electronics, books, beauty & health, and sports. 
11. The user interface is accessable through the html files found in the social folder of spring-template-d8. After inserting your schema information in applications.properties and running DemoApplication, the html files in the social folders should allow you to access the three website pages. Each page presents you with a list of object (Users, Shops, or Items), and gives you the ability to create, read, update, or delete database values from the web application. 
