// DOM Element 
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedpage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const loginX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const modalPostX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');


/**************************************************/
/**************************************************/

// Main Page 

const goToLoginPage = () => {
    mainPage.style.display = "none";
    loginPage.style.display = "grid";
};


middleContent.addEventListener('click', e =>
{
    if (e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    }
    
    console.log(e.target.classList[1]);
});


btnTop.addEventListener('click', ()=>
{
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    if (inputUserInfo.value !== '' && inputPassword.value !== '') {
        mainPage.style.display = 'none';
        newsFeedpage.style.display = "block"
    }
    else{
        goToLoginPage();
        loginModal.style.display = "block"
    }

    ///
    if (inputUserInfo.value !== "") {
        inputUserInfo.value = "";
    }
});


// Login Page 

loginX.addEventListener('click', ()=> {
    loginModal.style.display = "none"
});

loginFormBtn.addEventListener('click', e => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if (loginUserInfo.value !== '' && loginPassword.value !== '') {
        loginPage.style.display = "none";
        newsFeedpage.style.display = "block"
    }
    else {
        loginModal.style.display = "block";
    }

    ///
    if (loginUserInfo.value !== "") {
        loginUserInfo.value = "";
    }
});

// News feed page 
// Post modal 

postBtn.addEventListener('click', () =>{
    modal.style.display = "block";
    modalWrapper.classList.add('modal-wrapper-display');
});

const changeOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
}

modalPostX.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if (modalInput.value !== "") {
        modalInput.value = "";
        changeOpacity(0.5);
    }
})

modalInput.addEventListener('keypress', (e) => {
    if (e.target.value !== "") {
        changeOpacity(1);
    }
});

modalInput.addEventListener('blur', (e) => {
    if (e.target.value === "") {
        changeOpacity(0.5);
    }
})