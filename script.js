const themeBtn = document.getElementById("toggleThemeBtn")
const body = document.getElementsByTagName('body')[0]
const externalLinks = document.getElementsByClassName('external-link')
const images = document.getElementsByClassName("featured-project-image")
const themeBg = document.getElementById('toggleThemeBg')
const circle = document.getElementById('toggleThemeCircle')

function toggleImages() {
    for (let eachElement of images) {
        if (themeBtn.checked) {
            eachElement.src = eachElement.src.replace('-light', '-dark')
        } else {
            eachElement.src = eachElement.src.replace('-dark', '-light')
        }
    }

}


function toggleTheme() {
    if (themeBtn.checked) {
        body.style.backgroundColor = "#0f172a";
        body.style.color = "#cccccc";
        for (let eachElement of externalLinks) {
            eachElement.style.color = "#dddddd"
        }
        themeBg.style.backgroundColor = "white";
        themeBg.style.borderColor = "white";
        circle.style.backgroundColor = "#0f172a";
        themeBg.style.alignItems = "flex-end";
        localStorage.setItem('theme', 'dark')
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "#1c1c1c";
        for (let eachElement of externalLinks) {
            eachElement.style.color = "#1a1a1a";
        };
        themeBg.style.backgroundColor = "grey";
        themeBg.style.borderColor = "grey";
        circle.style.backgroundColor = "white";
        themeBg.style.alignItems = "flex-start";
        localStorage.setItem('theme', 'light')
    }
    toggleImages()
}

let localtheme = localStorage.getItem('theme');

if (localtheme === 'dark' & themeBtn.checked === false) {
    themeBtn.checked = true;
    toggleTheme()
} else if (localtheme === 'light' & themeBtn.checked === true) {
    themeBtn.checked = false
    toggleTheme()
}