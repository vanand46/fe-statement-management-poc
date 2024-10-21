
export const renderHomePage = () => {
    const rootDiv = document.getElementById("view");

    const bodyContainer = document.createElement("div");
    const pageTitle = document.createElement("h1");
    pageTitle.innerHTML = "This is home page";
    bodyContainer.appendChild(pageTitle);
    bodyContainer.style.cssText = `
        display: flex;
        justify-content: center;
        height: 60vh;
        align-items: center;
    `;
    rootDiv.appendChild(bodyContainer);
    
};

