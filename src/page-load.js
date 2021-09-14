const pageLoad = () => {

    const title = document.createElement("h1");
    title.innerText = "Restaurant 'TINA'";
    //or like this
    //const txt = document.createTextNode("Restaurant 'Tina'");
    //para.appendChild(txt);

    const welcome = document.createElement("h2");
    welcome.innerText = "Welcome to our page!";
    
    const content = document.getElementById("content");
    content.appendChild(title);
    content.appendChild(welcome);
};

export { pageLoad }