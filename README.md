# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Newsletter sign-up form with success message solution](#frontend-mentor---newsletter-sign-up-form-with-success-message-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Newsletter Invalid State](./assests/images/Screenshot%202024-01-02%20141845.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
- Regex (Regular Expression)
- window.location Object
- event.preventDefault()


```js
window.addEventListener('load', adjustImgSrc);
window.addEventListener('resize', adjustImgSrc);

submitBtn.addEventListener('click', event => {
    event.preventDefault();

    const inputValue = document.querySelector('input').value;
    let checkEmail = inputValue.match(/\b[A-Za-z0-9._+%-]+@[A-Za-z]+\.[A-Za-z]{2,}\b/);

    if(!checkEmail){   
        errorMsg.classList.add('is_visible');
        errorMsg.parentElement.nextElementSibling.classList.add('input-error');
    }
    else
        window.location.href = `${window.location.origin}/subscribe.html?${inputValue}`; 
})
```

### Useful resources

- [Regex](https://www.regexr.com.com) - This helped me practice and test Emaill address pattern.
- [Window Location](https://www.w3schools.com/howto/howto_js_redirect_webpage.asp) - This is an amazing article which helped me finally understand Window Location Object.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/ObiFaith)
- Twitter - [@yourusername](https://www.twitter.com/Faith_Dev)