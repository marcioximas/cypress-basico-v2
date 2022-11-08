
## About this project

Sample project for the basic functions using Cypress 

## Pre-requirements
Before we start, make sure the following systems are installed on your computer.



- git (I'm using version 2.26.2 while writing this project)
- Node.js (I'm using version v14.15.4 while writing this project)
- NPM (I'm using version 6.14.11 while writing this project)
 Note: I recommend that you use the same or greater versions of the above-mentioned systems.

Note 2: When installing Node.js, NPM is automatically installed, so you don't need to do it yourself.

Note 3: To check which versions of git, Node.js, and NPM you're using, run git --version && node --version && npm --version on your terminal.

Note 4: On the above-list, I left links to downloads all of the requirements.

## Installation


Installing the dev dependencies
With the project cloned from GitHub, it's time to install its dev dependencies.

Since such dependencies are already listed in the package.json file, the only thing you need to do is `run npm install` (or npm i - short version) in the project's root directory.

🧙 This command will download cypress, cypress-localstorage-commands, faker, and standardjs since they're listed as devDependencies.

Run npm test (or npm t - short version) to ensure that everything is working as expected. If everything goes well, you should get a result like this.

## Tests

### Desktop tests
Run `npm test` or `npm t` for the short version) to run the tests headless mode

Or, run `npm run cy:open` to open Cypress in interactive mode on a desktop viewport.


### Molibe tests
Run `npm test:mobile`  to run the tests headless mode on a mobile viewport

Or, run `npm run cy::mobile` to open Cypress in interactive mode on a mobile viewport.

This project  was created by Marcio Ximenes (https://github.com/marcioximas/)