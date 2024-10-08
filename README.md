# Budget Monitoring

The Budget Monitoring is a website page created for those who want to track your expenses and compare them with your monthly budget. The Budget Monitoring provides a clear design with high accessibility, and a box to enter their details, like salary, expense value, and expense name. The Budget Monitoring also provides a table with all details inserted before, a balance that changes based on the value of expenses, and a button to delete the expense.

The user will be able to identify any problem with your expenses by checking the table that the Budget Monitoring provides. The user can also see the importance of tracking expenses with the cards located at the bottom of the website. 

![Responsible screenshot](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/mockup.png)

## User Stories

### User
> As a user I want to be able to set my monthly wages . 
> As a user I want to be able to set my expenses details, as value and name.    
> As a user I want to have a clar table with my expenses details.   
> As a user I want to be able to see my balance after send expenses.    
> As a user I want to be able to delete an expense in case I sent the wrong details.    
> As a user I want to be able to see my budget after reload the page.   

### Business Owner
>As the site owner I want to provide a clear website design to users.    
>As the site owner I want to provide a box where the users can insert the respective details.   
>As the site owner I want to prevent the user from submitting wrong details.    
>As the site owner I want to help user to track their expenses and reduce their debt.   
>As the site owner I want to show a table with all the details the user sent.   
>As the site owner I want to prevent people from having financial leaks.    

## Features

- __The Header__

    - Featured at the top of the page that shows the website logo, name, and website description.
    - The header provides the user a better understanding of the purpose of the website.
    - The header text is black, and the background color is green with a horizontal fade to white.  
    
    ![Header](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/header.png)

- __Input Box__

    - The input box is also located at the top of the page on desktop devices and under the header on mobile devices.
    - The input box provides places where the user can enter their details (salary, expense value, expense name).
    - The input box has text color black and background white.

    ![Input Box](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/input-box.png)

- __Expense Table__

    - The expense table contains a title with salary and balance and a list of expenses.
    - The expense table title has a salary that will match the details the user sent in the input box, and a balance that will vary based on the expense value the user sent in the input box.
    - The expense table list has a header, with all categories, and a list of expenses with the data the user sent before.

    ![Expense table](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/table-section.png)

- __Explanation Section__

    - The explanation section contains an image, and text describing the importance to tracking expenses.
    - The explanation section is located under the expense table.
    - The image is some coins in green colors with a light green background.
    - The text has a title and a paragraph telling the user the importance to tracking your expenses.

    ![Explanation Section](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/explanation-section.png)

- __Cards Section__

    - The cards section is placed at the bottom of the page.
    - The cards section contains 5 boxes with a title and text, each box has content explaining why it is important to monitor your expenses.
    - The boxes have a background color white and a shadow box in green.

    ![Cards Section](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/cards-section.png)   

## Skeleton Plane

- __Desktop and Tablet Wireframe__

![Desktop Wireframe](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/desktop-wireframe.png)

- __Mobile Wireframe__

![Mobile Wireframe part1](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/mobile-wireframe1.png)

![Mobile Wireframe part2](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/mobile-wireframe2.png)

> The color pattern in mainly white and green. White is to create a clean aspect in the website, and green because it reminds money.

> The website design is meant to be modern and minimalist.

## Testing

**Testing Links and Form**
| Test | Outcome |
|--|--|
|All input text and numbers sending data correctly| Pass |
|Set salary button add data to head table | Pass|
|Expenses details button creating a row in table| Pass |
|Created row is not placed on top of other elements| Pass |
|User prevented from submitting the form without correct element| Pass |
|Form Validation presents the when incorrect input type is entered | Pass |
|Data stored in browser | Pass |

**Testing for responsiveness**
| Test |Outcome  |
|--|--|
|All elements is website displays correctly on mobile, tablet, laptop and desktop | Pass |

> No Issues reported from the users

### Bugs

- __Fixed Bugs__

    - After the user sends all the details and reloads the browser, the user cannot send another expense because the salary input is empty. The website does not recognize that the salary was sent in another section. The bug was fixed creating an conditional outside any function.
        - The conditional says, if the salary local storage is not empty the salaryValue variable is 'true', that way the condition aplied in expenses function will be true.

- __Unfixed Bugs__

    - When salary and some expenses is send and then reload the browser, when the user send another expense the balance is calculated based on total salary instead of the balance before load the browser. 

### Validator Testing

- HTML
    - No errors were returned when passing through the official W3C validator
    - Index.html

    ![W3C Html](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/html-validator.png)
    
    
- CSS
    - No errors were returned when passing through the official (Jigsaw) validator

    ![Jigsaw CSS](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/css-validator.png)
- Accessibility
    - Lighthouse test index.html

    ![Accessibility](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/lighthouse.png)

- JavaScript
    - No errors were returned when passing through the official (JShint) validator

    ![JShint](https://github.com/Jonatas-01/Budget-Monitoring/blob/main/assets/media/readme-img/javascript-validator.png)

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

  > I then received a notification from GitHub that my project is being deployed and after about 1 minute & a couple of refreshes of the page it was ready and live.

The live link can be found here - https://jonatas-01.github.io/Budget-Monitoring/

## Credits
 > flaticon: (https://www.flaticon.com/free-icon/coins_6874315?term=coin&page=4&position=83&origin=search&related_id=6874315) 
 
 > Coin image: (https://storyset.com/illustration/coins/rafiki) 

 > Icons: (https://fontawesome.com/kits/16816afa88/setup)   

 > Youtube help: (https://youtu.be/JH53_3aG308?si=z_YC9hxduc6n_e1z)

### Content

- Texts contents taken from ChatGPT
- Icons in cards section taken from [Font Awesome](https://fontawesome.com/)
- Favicon taken from [Flaticon](https://www.flaticon.com/free-icon/coins_6874315?term=coin&page=4&position=83&origin=search&related_id=6874315)
- General lookup for JavaScript taken from [w3 school](https://www.w3schools.com/)

### Media

- Image taken from [Story Set](https://storyset.com/illustration/coins/rafiki)
