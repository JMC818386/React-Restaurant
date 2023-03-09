# **React Restaurant Project**

## **Concept**
> Create a single-page web application that serves as a restaurant splash page with a menu.
Use React and Bootstrap to construct the UI, and Axios and the CORS Extension on chrome to generate menu items from an API provided by the instructor.

## **Questions**
- How do I construct and connect components into my App.js?
- How do I create a function in React that calls an API?
- How do I send API data into MenuItem components dynamically?
- What is UseState, and how will I need to use it?
- What is UseEffect, and how will I need to use it?

## **Requirements**
- Generate the following information:
	- Restaurant name (Nav)
	- Restaurants address (Footer)
	- Hours of operation (Nav and Footer)
- Install Bootstrap via npm
- Access the API using Axios installed with npm
- Create dynamic restaurant menu
	- Choose a specific menu section type to display (appetizers, Pasta, Sandwiches, etc.)
	- Dynamically render at least 15 items
	- The menu section you decide to display should have it own view as an organism
	- Each item must be a molecule
- Manage the React Component State
- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website
- Your repo should be public so that others can see your code and comment on it
	
## **HTML/CSS**
- `<div className=”TopNav”>`  
    - `<h1>Restaurant Name</h1>`  
    - `<ul>`
	    - `<li>Menu</li>`
	    - `<li>About</li>`
	    - `<li>Contact</li>`
    - `</ul>`
- `</div>`

- `<div className=”MenuSection”>`
	- `<div>{MenuItem}</div>`
	- `<div>{MenuItem}</div>`
	- `div>{MenuItem}</div>`
	- `<div>{MenuItem}</div>`
- `</div>`
- `<div className=”Footer”>`
	- `<div>Restaurant Address</div>`
- `</div>`

## **React Component Hierarchy**
- Index.js
    - App.js
	    - TopNav.js
	    - MenuSection.js
		    - MenuItem.js
	    - Footer.js

## **Variables**
STATE
menuItems 

## **Functions**
- TopNav()
- MenuSection()
- MenuItem()
- Footer()

## **Procedures**

//Start Program
    
    START
    INIT


    END

//END PROGRAM
