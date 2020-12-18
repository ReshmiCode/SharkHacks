# SharkHacks

Devpost link [here](https://devpost.com/software/dropsaver-r041t5)

## Inspiration
According to the Environmental Protection Agency, if everyone in the United States (around 320 million) reduced their average shower time by one minute each time, it could save 165 billion gallons of water (plus the energy used to prepare it for usage) annually. I wanted to make an application to encourage others to take shorter showers! I typically listen to music in the shower so I thought catering a playlist to a certain length and gamifying the experience would motivate users to save water.

## What it does
The app motivates users to take shorter showers by creating a playlist of the desired length and giving users points for reducing their time. Every drop counts! Users start off by creating their own account. There are three main tabs, the feed, shower, and profile. The feed shows the global shower lengths to motivate the user. It also shows playlists shared by users that the user can save to their own account. The shower page gives you the recommended shower length based on the gallons per minute on the user profile. You can start the shower with or without music. When the shower is done, the user clicks end to get the points. On the user page, you can see your own shower records.

## How we built it
The frontend was built in React Native and Native Base for the design library. The backend was built using MongoDB and Express. The MongoDB database is hosted on Google Cloud and Google OAuth is used for user login.

## Challenges we ran into
Initially, I was planning on doing the backend in GraphQL and Apollo. I’ve never used it before for writing to a database and wanted to learn how to do so. I got fairly far but I realized that permissions had to be given as well which the documentation I was using didn’t detail properly. I decided to switch to MongoDB and Express after spending a large chunk of hours on that as I realized I also needed to start the frontend. I also spent some time working on getting the Spotify API to work, but had authorization issues. I did start with a team, but unfortunately, it ended up just me thus the Spotify integration wasn’t able to get done.

## What's next for DropSaver
Getting an integration of Spotify or a music platform to actually work would make the app complete. Adding a screen to show a user their own statistics would be a nice addition as well. Users would be more likely to continue using the application when knowing what impact they have had on helping the environment. Also making the wave animation include fish would be nice as well.
