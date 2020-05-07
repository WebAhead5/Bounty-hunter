# :cactus: Bounty-Hunter :cactus:

## Useful Links:
* [Deployed web app](https://bounty--hunter.herokuapp.com/)
* [Heroku repository](https://dashboard.heroku.com/apps/bounty--hunter)
* [Github Repository](https://github.com/WebAhead5/Bountry-hunter)

### Introduction

Bounty Hunters is a web app created for sheriffs to post the latest available bounties to would-be bounty hunters. The authentication system allows for anyone to sign up as a Bounty Hunter (should they be brave, or crazy enough) and post comments. There is also a feature to prevent anyone but sheriffs adding new bounties to the list.

![](https://i.imgur.com/Y1X92LV.jpg)


### User Story

- A welcome that includes a few description about the the point of the website. on this page the user have two options, to Login or to Register if he is not a user already.
- after logging in the user should be able to see the home page, without logging in or a register the user should not be able to enter the homepage or see any of the website sensitive data about the bounties.
- the user can logout, and that should delete the cookie.
- Show the username and level on the top of everypage after signing in.
- The homepage serves as a protected route where the users can search for wanted bounties.
- All registered users can comment on the content.
- click on the bounty to find more information.
- ***stretch goal*** only Admins can add bounties and delete bounties.
- ***work with async-await***

### Example of what theme we were looking for:
![Example Bounty Poster](https://i.imgur.com/SYt2kWc.jpg)

Our home page:
![](https://i.imgur.com/enA2XAx.png)


## Schema:
![](https://i.imgur.com/IUkknXW.png)

![](https://i.imgur.com/vPRMf7E.png)

        
## Routes 


:twisted_rightwards_arrows:

 **GET ROUTES**
- **GET /** -  Welcome / Homepage, dependant on if user is logged in
- **GET bounty/id** - details of bounty (LOGGED IN ONLY)
- **GET addbounty** - add new bounty page (ADMIN ONLY)

:twisted_rightwards_arrows:

**AUTH ROUTES**
- **GET login** - login page 
- **GET register** - register page 
- **GET logout** - logout page 

:twisted_rightwards_arrows:

**POST ROUTES**
- **POST authenticate** - login & provide JWT
- **POST addUser**- adds user on registration 
- **POST addBounty** - adds bounty (ADMIN ONLY)
- **POST deletebounty/id**- deletes bounty (ADMIN ONLY)
- **POST addComment** - add comment to bounty (LOGGED IN ONLY)

:twisted_rightwards_arrows:

**ERROR ROUTES**
- **GET client** - 404 page
- **GET server** - 500 page

## Verification 

:lock::lock::lock:

**Front End**
- Validation on the register page, ensuring:
    - Usernames are at least 5 characters
    - Passwords contain at least eight characters, including one letter and one number
    -  Both the password and password confirmation match
    -   Fields cannot be left empty
- Validation on the login page ensuring:
    -  Usernames are at least 5 characters
    -  Fields cannot be left empty
- Both pages provide helpful responsive error messages when validation critera has not been met



**Backend**
- On register, password is hashed and stored in DB (Bcrypt)
- On login, plain text password is checked agaisnt DB hash to allow or reject the login attempt
- Signed JWT tokens with 10 minute expiry on login, holding user ID, Username and Admin status.
- All protected routes (Home, Bounties) require a valid JWT token to enter
- All Admin routes (Add Bounty, delete bounty functionality on Home page) require a valid Admin JWT token
- When logged in, JWT token prevents you from accessing Login or Register page again
- When JWT token expires, user is redirected to Welcome screen and logged out.
- Backend also prevents the user from submitting invalid details on the register and login page, as a second check.
- Any bad routes are automatically redirected to our 404 page, which then has a link back to home/welcome (dependant on if user is logged in or not)

#### Adding and Removing Bounties (Marwan)

#### Posting Messages (James)

Any son-of-a-gun can post a comment on a bounty once logged in. The post will be displayed along with their associated username and date of the post.

![](https://i.imgur.com/EVdOuXb.gif)


# Testing:

- DB Testing  :heavy_check_mark:
- Route Testing  :heavy_check_mark:

**Current Test Coverage:**

![](https://i.ibb.co/Q8M1Hg1/nyc-Bounty.png)




