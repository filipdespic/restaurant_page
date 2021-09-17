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
    //para.appendChild(txt)

    const welcome = document.createElement("h2");
    welcome.innerText = "Welcome to our page!";

    const para = document.createElement("p");
    para.innerText = "Features: Takeout, Reservations, Outdoor Seating, Seating, Highchairs Available, Wheelchair Accessible, Serves Alcohol, Full Bar, Free Wifi, Accepts Credit Cards, Table Service";
    const br = document.createElement("br");
    const para2 = document.createElement("p");
    para2.innerText = "While some beginner restaurateurs might think that the menu is just a food list, savvy people in the industry know that restaurant menu descriptions make a huge difference. Even researchers were curious if people spend more when the menu descriptions are appetizing. A study from 2019 shows that the menu description triggers 45 % of the buying decision for a specific dish. The same paper identified the main categories of words that have an impact on the client’s decision to order those items. The following factors have the biggest influence for clients selecting a dish";
    
    content.appendChild(title);
    content.appendChild(welcome);
    content.appendChild(para);
    content.appendChild(br);
    content.appendChild(para2);
};

export { pageLoad }