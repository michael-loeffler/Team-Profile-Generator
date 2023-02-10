# Team-Profile-Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
    
The Team Profile Generator is a command-line application that prompts a user to provide information about their team and quickly produces an html file to serve as a webpage showcasing the team members. The user has the option to add a Manager, Engineers, and Interns to their team.
    
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
 
## Installation
            
1. Install Node.js
    - [Download Version 16 of Node.js](https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi)
2. Clone this repo
   ```sh
   git clone https://github.com/michael-loeffler/README-Generator.git
   ```
3. Create a package.json
   ```sh
   npm init
   ```
4. Install the Inquirer package
   ```sh
   npm i inquirer@8.2.4
   ```
5. Invoke the application in the command-line using the following command
   ```sh
   node index.js
   ```
  
    
## Usage
    
The README Generator functions as a command-line application. After following the installation instructions above, whenever users want to create a README file for a project they simply invoke the application using the command "node index.js". All script for this application is written into an init() function that will run immediately when the application is invoked. The Inquirer package will prompt the user with questions to gather all pertinent information to create a professional README file. The user's data is passed as an object into a function that will write the file using the fs library. In that process, the user data object is passed into a series of functions to generate the markdown text to be written into the file. Most of the user data is added to the markdown text directly using a template literal, while the license chosen by the user is passed into two switch-cases to retrieve information to create a license badge and a hyperlink to the full license text. The file that is created will be named "generatedREADME.md".
    
## License
    
Covered under the MIT License. For more details and to view the license in full, please visit the [MIT License Webpage](https://choosealicense.com/licenses/mit/).

## Contributing
    
If you have a suggestion for improvement, please fork the repo and create a pull request. You can also open an issue and tag it for "enhancement".
    
## Tests

First, invoke the command "npm test"
    
## Questions

Please visit my [GitHub profile](https://github.com/michael-loeffler) or [send me an email with any additional questions.](mailto:michaelloeffler23@gmail.com)