# Welcome to Nutshell

## What is Nutshell?
Nutshell is a highly sophisticated social networking platform for keeping your life organized and sharing it with your friends. 

## Usage
1. Clone or download the nutshell repository to your local machine
2. cd `src/lib`
3. Run `npm install`
4. Once npm install is done, run `grunt`
5. cd `../../api`
6. Run `json-server -p 8088 -w database.json` to get the database running locally
7. cd `../dist`
8. Initiate home server `hs -o` to launch Nutshell in your browser

This project uses grunt, json server, and browserify
