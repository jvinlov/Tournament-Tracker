# Tournament-Tracker

Link to hosted app: https://react-pb-tournament-tracker.herokuapp.com/tourneys

This project is a tool for competitive pickleball players to keep track of their entered tournaments and results.  It makes it easier for a player to efficiently schedule events and track events entered, level entered, partner, and results in a single location.  After the tournament players can enter results.  This lets players see their progress over time and which partners they perform best with.  This aids in making future choiices for tournaments, events, and partners.  A goal of many players is to compete at the Pickleball Nationals tournament which requires winning USAPA sanctioned tournaments prior to entering.  This app reminds players which tournaments qualify for Nationals participation.

Technologies used in this project were React, Pyton, Peewee, Flask, and Semantic UI React.


User Stories: 

https://docs.google.com/document/d/1FkaXoabmYtjEbIKRwsGURrNBxFx1ljiaGQOTKxgpwrg/edit?usp=sharing

![wireframe](/images/TT-Wireframe.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In order to run this app locally the user must npm install react for the front end side.

In order to run this app locally using Flask the user must pip install -r requirements.txt and python app.py

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Unsolved problems with the app: users cannot see other users tournaments to view results and choose partners

Future features:  scrape https://www.pickleballtournaments.com/pbt_tlisting.pl?when=F to return list of tournaments, then add to user list of tournaments instead of user creating tournament.  Search for other users and see results.






