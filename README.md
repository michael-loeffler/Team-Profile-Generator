# Team-Profile-Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
    
The Team Profile Generator is a command-line application that prompts a user to provide information about their team and quickly produces an html file to serve as a webpage showcasing the team members. The user has the option to add a Manager, Engineers, and Interns to their team.

I was motivated to create this application because creating a team profile webpage is very common, and a best practice to showcase the talent in your company, and also be transparent so that stakeholders can get in contact with the appropriate people. Additionally, building this application was interesting for me because I can already see the other ways I can tweak this tool to build html files for different scenarios/use-cases.

Through working on this project, I have learned about Object-Oriented Programming and Testing to build and test applications that can accept and manipulate a large amount of data.
    
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
 
## Installation
            
1. Install Node.js
    - [Download Version 16 of Node.js](https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi)
2. Clone this repo
   ```sh
   git clone https://github.com/michael-loeffler/Team-Profile-Generator.git
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
    
The Team Profile Generator functions as a command-line application. After following the installation instructions above, whenever users want to create an html file for a team profile webpage, they simply invoke the application using the command "node index.js". The application begins with an init() function that will run immediately when the application is invoked. The Inquirer package will prompt the user with questions to gather all pertinent information about the Manager of the team. Then it will ask the user if they would like to add an Engineer or Intern to the team, and ask questions accordingly to gather information about those employee types. It will continue this process until the user indicates that they are finished creating their team. At that time, the application will generate html code with all the data that was submitted to build a clean and functioning webpage. It will then write it to a new file and add it to the "dist" directory for use. The file that is created will be named "teamProfile.html".

### --- Video demonstration of application's functionality ---

Please review the [demonstration video](https://drive.google.com/file/d/1dSsi_oiSJlcqlLNsLiJ_bnjVmjV61LOx/view) to see how the app functions and experience the user perspective. Alternatively, view a sample of the [final output](./dist/sampleTeamProfile.html). 
    
## Credits

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Professional README Guide, The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- [Best-README-Template, GitHub Repo](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md)

## License
    
Covered under the MIT License. For more details and to view the license in full, please visit the [MIT License Webpage](https://choosealicense.com/licenses/mit/).

## Contributing
    
If you have a suggestion for improvement, please fork the repo and create a pull request. You can also open an issue and tag it for "enhancement".
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/featureName`)
3. Commit your Changes (`git commit -m 'adds featureName'`)
4. Push to the Branch (`git push origin feature/featureName`)
5. Open a Pull Request
    
## Tests

Tests have been created for all 4 Classes in the lib directory. Unit test files can be found in the \__tests__ directory. To run tests, invoke the command
```sh
npm test
```

## Questions

Please visit my [GitHub profile](https://github.com/michael-loeffler) or [send me an email with any additional questions.](mailto:michaelloeffler23@gmail.com)