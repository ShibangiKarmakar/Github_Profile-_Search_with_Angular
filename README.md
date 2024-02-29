# Gitsearch using Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

# Project Overview

1. Profile Page:
    - A dynamic user profile page.
    - The GitHub username passed via URL parameters.
    - Search contains basic user information such as the user's name, avatar, bio, and number of repositories.

# Install
If you previously installed [AngularCLI] [NodeJS] and [npm]
then check the the versions using command prompt.
For  Node JS command is -> Node -v
For npm command is -> npm -v
For Angular CLI command is ->ng version.

otherwise install them.
Our PC should have to install Node JS and npm before installation of Angular CLI.
To download the letest version of [Node.JS] go to (https://nodejs.org/en/download/) and act accordingly.
To download the letest version of [npm] go to (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and act accordingly.

To check the version of Node JS and npm we need to run some commands in the command prompt
For  Node => Node -v
For npm => npm -v

Then to install [AngularCLI] write "npm install -g @angular/cli" in the command prompt and to check the vertion write ng version.

As in the letest Angular CLI version 17.2.1 app.module.ts is not there so if you need this in your project then when you create a new Angular project using the Angular CLI. Open your terminal or command prompt and run:
ng new my-angular-app --no-standalone

# Error Solution
Error: 'ng' is not recognized as an internal or external command, 
operable program or batch file.
Solution: This occurs when the Angular CLI (Command Line Interface) is either not installed or not added to your system’s PATH environment variable.
1. Install Angular CLI /OR/
2. Check PATH Environment Variabl -
Locate the ng.cmd file on your system. It’s usually located at:
C:\Users\<USERNAME>\AppData\Roaming\npm
Add this path to your system’s PATH environment variable:
    Open the Environment Variables settings:
    On Windows, search for “Environment Variables” in the Start menu.
    Click “Edit the system environment variables.”
    Click the “Environment Variables” button.
    In the “System Variables” section, find the “Path” variable and click “Edit.”
    Add the path where ng.cmd is located (e.g., C:\Users\<USERNAME>\AppData\Roaming\npm).
    Close any existing command prompt windows and open a new one.

Run the following command to check if Angular CLI is recognized:
ng version

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
r CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
