// load header
document.querySelector('header').innerHTML = `
            <div class="wrapper">
            <div class="header--left">
                <img class="header--logo logo" onclick ="document.location.href = 'index.html'" src="../../assets/img/header/Logo.png" alt="Website Logo">
            </div>
            <div class="header--right">
                <ul class="header__nav nav">
                    <li class="nav__link" id = "link1"><a href="index.html">Trang chủ</a></li>
                    <li class="nav__link" id = "link2"><a href="featured.html">Nổi bật</a></li>
                    <li class="nav__link" id = "link3"><a href="blog.html">Blog</a></li>
                    <li class="nav__link" id = "link4"><a href="contact.html">Liên hệ</a></li>
                </ul>
                <div class="header__input">
                    <div class="header__searchbox">
                        <div class="searchbox__button">
                            <img class="searchbox__img" src="../../assets/img/header/icons8-search-144.png" alt="Search Icon">
                        </div>
                        <input class="searchbox__input" type="text" placeholder="Tìm kiếm">
                    </div>
                    <button class="header__login">
                            <img class="login__img1" src="../../assets/img/header/Property 1=Login_Default.png" alt="Login Button">
                            <img class="login__img2" src="../../assets/img/header/Property 1=Login_hover.png" alt="Login Button">
                    </button>
                </div>
            </div>
        </div>
        <style>
            .searchbox__input::placeholder {
            color: var(--placeholder-color, black);
            }
        </style>
  `




// load header.css
document.querySelector('head').innerHTML += `
        <link rel="stylesheet" href="../../share/css/basic.css">
        <link rel="stylesheet" href="../../share/css/header.css">
        `

// hover searchbox
let focus = false;
const heaeder__right = document.querySelector(".header--right")
const searchbox__input = document.querySelector(".searchbox__input")
const header__searchbox = document.querySelector(".header__searchbox")
searchbox__input.addEventListener('mouseenter', function () {
    header__searchbox.style.background = "linear-gradient(to right, #FE7F00 10%,#C4000C 90%)"
    header__searchbox.style.width = "246px"
    searchbox__input.style.width = "100%"
    // searchbox__input.placeholder = "_______________________"
    searchbox__input.placeholder = "Từ khoá tìm kiếm"
    searchbox__input.style.paddingLeft = "35px";
    searchbox__input.style.paddingRight = "13px";
    searchbox__input.style.right = "0px"
    searchbox__input.style.color = "white"
    searchbox__input.style.left = "0px";
});
searchbox__input.addEventListener('mouseleave', function () {
    let value = document.querySelector(".searchbox__input").value
    if (value == "" && focus == false) {
        header__searchbox.style.width = "103px"
        searchbox__input.style.width = "100%"
        searchbox__input.style.paddingLeft = "33px";
        searchbox__input.style.paddingRight = "0";
        setTimeout(() => {
            searchbox__input.placeholder = "Tìm kiếm"
        }, 100);
        searchbox__input.style.right = "initial"
        setTimeout(() => {
            console.log("run")
            document.querySelector(".header__searchbox").style.background = "linear-gradient(to right, #FFFFFF 10%,#FFFFFF 80%)"
            searchbox__input.style.setProperty('--placeholder-color', 'black');

        }, 1);
    }
    if(value == "" && focus == true){
        searchbox__input.style.setProperty('--placeholder-color', 'white');
    }
});


// focus searchbox
setTimeout(() => {
    document.querySelector(".searchbox__input").style.transition = "all 0.2s linear";
}, 100);
searchbox__input.addEventListener('focus', function () {
    focus = true;
    header__searchbox.style.background = "linear-gradient(to right, #FE7F00 10%,#C4000C 90%)"
    header__searchbox.style.width = "246px"
    searchbox__input.style.width = "100%"
    searchbox__input.placeholder = "Từ khoá tìm kiếm"
    searchbox__input.style.paddingLeft = "35px";
    searchbox__input.style.paddingRight = "13px";
    searchbox__input.style.right = "0px"
    searchbox__input.style.color = "white"
    searchbox__input.style.left = "0px";
});
searchbox__input.addEventListener('blur', function () {
    focus = false;
    let value = document.querySelector(".searchbox__input").value
    if (value == "") {
        header__searchbox.style.width = "103px"
        searchbox__input.style.width = "100%"
        searchbox__input.style.paddingLeft = "33px";
        searchbox__input.style.paddingRight = "0";
        setTimeout(() => {
            searchbox__input.placeholder = "Tìm kiếm"
        }, 100);
        searchbox__input.style.right = "initial"
        setTimeout(() => {
            console.log("run")
            document.querySelector(".header__searchbox").style.background = "linear-gradient(to right, #FFFFFF 10%,#FFFFFF 80%)"
            searchbox__input.style.setProperty('--placeholder-color', 'black');
        }, 1);
    }
});