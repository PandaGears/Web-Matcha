# Matcha:

Another dating site

# Requirements:
* npm v6.14.5 (https://www.npmjs.com/get-npm)
* node v12.18.2 (https://nodejs.org/en/download/)
* Wamp for Windows (https://bitnami.com/stack/wamp) / Mamp for OSX (https://bitnami.com/stack/mamp)

# Installation process:

* Download the source code or clone the repository from https://github.com/PandaGears/matcha.git
* Upon the completion of the download, navigate to the folder and open the folder with a terminal
* Download Node js and in respect npm from the links given above
* in the terminal, run npm install to add all the appropriate modules needed for the project to run

# Set up and Configuration of Database

* Download WAMP or MAMP (I won't judge which OS you use) from the link above and run the set up
* Open the Manager-Windows/OSX shortcut, and go to Manage Servers to make sure *MySQL Database* is running
* to go to the Database itself, open your web browser and go to the url (http://localhost:**port_number**/phpmyadmin) ooooor click on Open phpMyAdmin on the Manager-OSX/Windows... Whichever you feel more comfortable with...

# Running the Program

* Open the project folder on a terminal and run **npm start**, this will start the server (set to port 8080 on this)
* speaking of... go to the url (http://localhost:8080), it will take you to the home page
* have fun~

# Code Breakdown:

* Front-End
	* bootstrap
	* pug
	* CSS

* Back-End
	* Javascript
	* node.js
	* express
	
* dependancies
	* bcrypt
	* bluebird
	* cloudinary
	* express-session
	* nodemon
	* sweetalerts
	
* Database Management
	* MySQL
	* phpMyAdmin
	
* App folder structure
	* views
		* This folder has all the .pug files that act as pages for the site
	* styles
		* This folder has all the CSS files for the styling for the Views folder
	* scripts
		* This folder has the .js files that act as backend functions for the site
			* account.js (functions for editing profile)
			* chat.js (functions for the chats)
			* formValidation (functions for checking if params for validating registrations and login inputs)
			* images.js (functions for adding images to a profile, making them a profile pic, and deleting it)
			* location.js (functions for geolocation)
			* login.js (functions for logging in)
			* logout.js (functions for logging out)
			* navbar.js (function to animate a dropdown)
			* notifications.js (functions to receive appropriate notifications based on if your profile was viewed, liked or if you got a message)
			* profileActions.js (functions for profile viewing, liking, blocking and reporting)
			* pw.js (functions for resetting the password if forgotten)
			* recommendations.js (functions for searching for other users)
			* register.js (functions for registration)
			
	* api
		* backend
			* This folder has the configuration functions to make the database and the 
				stored procedures to run the sql related functions (i.e creating/updating/selecting users)
				* config.js (creates variables for the sql functions, if your phpmyadmin password is different, 
				change the dbpassword to your version od the password)
				* database.js (calls the stored procedures and functions for the base necessities of the site (shows
				recommended users,filtered interests logins and registration etc))
				* setup.js (creates the database and appropriate tables and columns if it wasn't made already...)
		* PageViews
			* This folder has the .js that act as router functions for rendering pug files and some backend functionality, database storage included
			 * account.js (renders the page and appropriate route to edit your profile and images)
			 * chat.js (renders the page and appropriate route to chat with matched users)
			 * location.js (renders the page for mapping location, also stores the location afterwards)
			 * notification.js (renders the likes and views pages for seeing who liked you or viewed you)
			 * recommend.js (renders the user finding page and maths out the total distance between users)
			 * users.js (renders the pages for login, registrations, profiles, password resets and database functions for the profile actions)
		* email.js	
			* This file is for the emailer functions
		* encrypt.js
			* This file is used to encrypt the user passwords
			
		Images:
			![Landing Page](https://res.cloudinary.com/ddrrwygt1/image/upload/v1614321558/examples/Screenshot_50_u3lwdq.png)
			![Login Page](https://res.cloudinary.com/ddrrwygt1/image/upload/v1614321549/examples/Screenshot_28_uh9bte.png)
			![Profile Page](https://res.cloudinary.com/ddrrwygt1/image/upload/v1614322125/examples/Screenshot_60_ygj7lf.png)
			![Profile Edit](https://res.cloudinary.com/ddrrwygt1/image/upload/v1614322125/examples/Screenshot_60_ygj7lf.png)
			![Search Filter](https://res.cloudinary.com/ddrrwygt1/image/upload/v1614321885/examples/Screenshot_56_xgnypm.png)
			![Search Page](https://res.cloudinary.com/ddrrwygt1/image/upload/v1614321885/examples/Screenshot_57_lww0fd.png)
			![Chat](https://res.cloudinary.com/ddrrwygt1/image/upload/v1614321555/examples/Screenshot_53_cbrxjd.png)
			
# Testing reasons:

https://github.com/wethinkcode-students/corrections_42_curriculum/blob/master/matcha.markingsheet.pdf
