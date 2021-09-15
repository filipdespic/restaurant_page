const menuLoad = () => {

    const content = document.getElementById("content");
    content.innerHTML="";

    //makes all buttons except the current gray and makes the current one red
    const btnContact = document.getElementById("contact");
    btnContact.style.backgroundColor = "gray";
    const btnHome = document.getElementById("home");
    btnHome.style.backgroundColor = "gray";
    const btnMenu = document.getElementById("menu");
    btnMenu.style.backgroundColor = "red";
    
    const title = document.createElement("h1");
    title.innerText = "Menu";
    //or like this
    //const txt = document.createTextNode("Restaurant 'Tina'");
    //para.appendChild(txt);

    const welcome = document.createElement("h2");
    welcome.innerText = "Choose your dish.";
    
    content.appendChild(title);
    content.appendChild(welcome);
};

export { menuLoad }