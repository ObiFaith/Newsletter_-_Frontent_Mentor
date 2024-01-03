const submitBtn = document.querySelector('[type = "submit"]');
const errorMsg = document.querySelector('.error-msg');
const bgImg = document.querySelector('.right_content').firstElementChild;

const adjustImgSrc = () => {
    if (window.innerWidth >= 900)
        bgImg.src = bgImg.src.replace('mobile', 'desktop');
    else
        bgImg.src = bgImg.src.replace('desktop', 'mobile');
}

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
        window.location.href = `https://obifaith.github.io/Newsletter_-_Frontent_Mentor/subscribe.html?${inputValue}`; 
})