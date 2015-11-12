# This is an example of a simple MEAN Stack application developed in Visual Studio 2015 Community Edition. 
It contains a basic CRUD (Create, Read, Update and Delete) operations over a list of Customers located in a table grid.

The following modules and components were incorporated into the developmemt of this application:

1. MongoDB - NoSQL database used to store customers information used in CRUD operations invoked by UI. (Temporary connnection already avaialble).
2. Express - used to wire the various components neccesary for database, models and view engine this example supports.
3. AngualrJS - used to represent UI containing the customer list and supported CRUD operations.
4. Node.js - used to install variuos packages used within the application. In addition also be used to establish connection to local
	installation of MongoDB.

In addtion to the above mention components, the following are also included.

1. angular-utils-pagination - utility used for simple pagination for custom grid ued in this example.
	  -  can be found: https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination
2. Boostrap - used for repsonsive design and theming.
3. Mongoose - used to establish connection MongoDB database for access to customers collection. 
	Also used to define Schema for customers collection.

