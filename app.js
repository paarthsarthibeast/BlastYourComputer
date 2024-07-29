let gif = document.querySelector(".gif");
let blastyc = document.querySelector(".blastyc");
let body = document.getElementsByTagName("body");
blastyc.onclick = () => {
    var isTrue = confirm("Are you sure you want to leave this page and blast your computer ");
    if (isTrue) {
        openFullscreen();
        console.log("Computer is blasting");
        gif.classList.add("gif_show");
    }

    else {
        console.log("Computer is not blasting");

    }
    document.title = "Hey I am good";
}
var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
