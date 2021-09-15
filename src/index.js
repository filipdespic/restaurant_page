import { pageLoad } from './page-load'
import { menuLoad } from './load-menu'
import { contactLoad } from './load-contact'

pageLoad();

document.getElementById("home").addEventListener("click", function () {
    console.log("home");
    pageLoad();
});
document.getElementById("contact").addEventListener("click", function () {
    console.log("contact");
    contactLoad();
    return;
});
document.getElementById("menu").addEventListener("click", function () {
    console.log("menu");
    menuLoad();
});


