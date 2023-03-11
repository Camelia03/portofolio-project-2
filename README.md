# Countries of Europe

![Responsive image](assets/images/responsive.png)


**Countries of Europe** is a quiz where a user can test his knowledge about Europe's countries and their interesting facts that make them unique. The quiz will be targeted toward people who not only love geography but also love to learn everything about Europe's countries. Countries of Europe is a fully responsive JavaScript quiz game that will allow users to test their geography knowledge and to learn using photographs from around Europe.

## Features
### *Existing Features*
**The Countries of Europe Logo and Heading**

Featured at the top of the page, the Countries of Europe logo and heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the quiz.

![Logo and heading image](assets/images/logo-and-heading.png)


### **The Game Section**

This section will allow the user to register his name and to start the quiz. This area will hide after the user is clicking "Let's get Started!" and the quiz area will appear which will allow the user to play the questions. 

![Start image](assets/images/login-and-start.png)

### **The Question Section**

The question section is where the user will be able to see the question to answer as part of the quiz. The user will be able to easily see the questions, the answers and the image which reflects the correct answer.
The user will be able to select the correct answer by clicking on the different buttons.

![First question image](assets/images/question-container.png)

### **The Summary Section**

This section will allow the user to see exactly how many correct answers they have provided.

![Summary image](assets/images/summary.png)


### **The Contact Section**
The contact section encourages users to get in contact and provides a phone number, email address and street address where the company can be found.

The contact section includes social media icons so users can find the company on facebook, twitter, youtube and instagram. The contact section is valuable to the user as it gives them the ability to find and contact the company who made the quiz if they need to.

![Contact image](assets/images/Contact.png)


### *Features left to Implement*
- a table with previous users who played the quiz and their score

## Design
### Color Scheme

![Color Scheme](assets/images/color-palette.png)

- The color palette was created using the Coolors website.

### Typography
Google Fonts was used for the quiz's font:

- Golos Text is used for the body text on the site. It is a sans-serif font.

### Imagery
- The member images were used with the permission of their owners. All  hint images were taken from the publishers websites. I have credited these in the credits section.

### Wireframes
Wireframes were created for mobile and desktop.

![Wireframe desktop](assets/images/wireframe-desktop.png)


![wireframe mobile](assets/images/wireframe-mobile.png)


## Technologies Used
### Languages Used
HTML, CSS and JavaScript were used to create this website.

### Frameworks, Libraries & Programs Used
- Balsamiq - Used to create wireframes.
- Git - For version control.
- Github - To save and store the files for the website.
- Google Fonts - To import the fonts used on the website.
- Font Awesome - For the icons on the website.
- Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.
- Paint and Pixabay - To compress images.
- Convertio - To resize images and change to webp format.
- Favicon.io - To create favicon.
- Am I Responsive? - To show the website image on a range of devices.

## Testing

Testing was continuous throughout construction. I used the Chrome developer tools during the build to identify and fix any issues along the way.

The following issues were raised during the meeting with my mentor:

- The user was shown an alert if their username was empty. => The user is now shown an error message underneath the input.

- The user was shown an alert if he clicked on the wrong answer. => After the user clicks on an answer, the answer button change color(red/green) for a brief delay, to reflect the correct and wrong answers.

- When trying to show the correct/wrong answers with the delay, a bug apperead if the user clicked multiple times on the answer buttons then questions would be skipped. => The bug was solved by adding disabled attribute to all the answer buttons until the next question is shown.

- The user was able to enter only spaces as their username. => The bug was fixed by trimming the leading and trailing whitespace of the username.

- The user was not able to submit their username by using the Enter key. => The bug was fixed by listening for the Enter key event on the input and triggering the start logic.

- The answer buttons jumped when changing the question. => The bug was solved by setting a fixed height for the question images.

### Validator Testing
- HTML
No errors were returned when passing through the official W3C validator
- CSS
No errors were found when passing through the official (Jigsaw) validator
- JavaScript
No errors were found when passing through the official Jshint validator
    - The following metrics were returned:
        1. There are 9 functions in this file.
        2. Function with the largest signature take 1 arguments, while the median is 0.
        3. Largest function has 9 statements in it, while the median is 5.
        4. The most complex function has a cyclomatic complexity value of 4 while the median is 2.

## Accesibility

In order to make the site as accessible as possible, I have taken care to:
- Use semantic HTML.
- Use descriptive alt attributes on images on the site.
- Ensure that there is a sufficient colour contrast throughout the site.

by running it through lighthouse in devtools.

Lighthouse Score for Desktop size
![Lighthouse Score Screenshot](assets/images/lighthouse-screenshot-desktop.png)

Lighthouse Score for Mobile size
![Lighthouse Score Screenshot](assets/images/lighthouse-screenshot-mobile.png)

## Unfixed Bugs
No unfixed Bugs.


## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
1. In the GitHub repository, navigate to the Settings tab.
2. Navigate to the Pages section.
3. From the Build and Deployment section, select the Main Branch as the source.
4. Deployment workflow should start.

The live link can be found here - https://camelia03.github.io/portofolio-project-2/

## Credits

### Content
- The questions were inspired by the following website: [Trafalgar.com](https://www.trafalgar.com/real-word/21-facts-europe-never-knew/)
- The icons were taken from [Font Awesome](https://fontawesome.com/).
### Media
- The photo used on the background of the quiz is from [Unsplash](https://unsplash.com/).
- The images used for the questions 1, 2, 3 were taken from [Unsplash](https://unsplash.com/).
- The images used for questions 4 to 10 were taken from [Pixabay](https://pixabay.com/).

