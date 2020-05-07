# Bountry-hunter
### Introduction

Bounty Hunters is a web app created for sheriffs to post the latest available bounties. The authentication system allows for anyone to sign up as a Bounty Hunter (should they be brave, or crazy enough) and post comments. There is also a feature to prevent anyone but sheriffs adding new bounties to the list.

#### Adding and Removing Bounties (Marwan)

#### Posting Messages (James)

Any son-of-a-gun can post a comment on a bounty once logged in. The post will be displayed along with their associated username and date of the post.

![](https://i.imgur.com/EVdOuXb.gif)




#### Verification (Jake)


### User Story

- A welcome that includes a few description about the the point of the website. on this page the user have two options, to Login or to Register if he is not a user already.
- after logging in the user should be able to see the home page, without logging in or a register the user should not be able to enter the homepage or see any of the website sensitive data about the bounties.
- the user can logout, and that should delete the cookie.
- Show the username and level on the top of everypage after signing in.
- The homepage serves as a protected route where the users can search for wanted bounties.
- everyone can comment on the content.
- click on the bounty to find more information.
- ***stretch goal*** only Admins can add bounties and delete bounties.
- ***work with async-await***

### work flow

- start with the server and the routes
    - [x] /welcome GET
    - [x]/login GET
    - [x]/register GET
    - [x]/ GET
    - [x]/bounty-details GET
    - [x]/Authenticate POST
    - [x]/AddUser POST
    - [x]/logout get
    - [x]/post POST (stretch)

- Schema:
    - bounties
        - Name
        - Picture
        - Crimes Committed
        - $ Bounty
        - Status (Dead/At Large/Captured)
        - Further information (to show on details screen)
    - users
        - Name
        - Privileges/Status
        - Username
        - Password
        - Score
    - comments
        - Message
        - UserID
        - BountyID
        - Date/Time




# Testing:

- [x] test the database (Marwan)
- [x] test the routes with supertest (Jake)

Current Test Coverage
![](https://i.ibb.co/Q8M1Hg1/nyc-Bounty.png)


