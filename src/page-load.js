const pageLoad = () => {
    const content = document.getElementById("content");
    content.innerHTML = "";

    //makes all buttons except the current gray and makes the current one red
    const btnContact = document.getElementById("contact");
    btnContact.style.backgroundColor = "gray";
    const btnHome = document.getElementById("home");
    btnHome.style.backgroundColor = "red";
    const btnMenu = document.getElementById("menu");
    btnMenu.style.backgroundColor = "gray";

    const title = document.createElement("h1");
    title.innerText = "Restaurant 'TINA'";
    //or like this
    //const txt = document.createTextNode("Restaurant 'Tina'");
    //para.appendChild(txt);

    const welcome = document.createElement("h2");
    welcome.innerText = "Welcome to our page!";

    content.appendChild(title);
    content.appendChild(welcome);
};

export { pageLoad }