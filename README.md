# Transaction-DB-Final-Project-Ironhack

This project's purpose is to make a web application that servers as a parts, quotes(estimates), po(purchase orders) database.
The end goal is for each of the 3 models (Parts, Quotes, PurchaseOrders) to have access to eachother making it easier to  create parts, quotes and POs.
An example of one of the goals I am trying to accomplish is the following:



-You've already established parts in your parts db.

-You want to make a new quote.

-You only remeber the partNumber or partDescription. 

-You type in the partNumber and you get the all the attributes from that part 
populated in to all the inputs needed to make the quote on the quote form. 

-each row's sellprice and totalSell price are determined by the 
cost (which could be autofilled) and the margin % 
