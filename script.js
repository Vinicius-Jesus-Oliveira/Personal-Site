const imagesContent = [
    { knowledge: 2, name: "Javascript", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" },
    { knowledge: 2, name: "React.JS", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg" },
    { knowledge: 1, name: "React Native", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" },
    { knowledge: 3, name: "HTML5", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg" },
    { knowledge: 3, name: "CSS3", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg" },
    { knowledge: 2, name: "C#", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/csharp/csharp-line.svg" },
    { knowledge: 1, name: "Azure", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/azure/azure-original.svg" },
    { knowledge: 3, name: "Bootstrap", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bootstrap/bootstrap-original.svg" },
    { knowledge: 2, name: "Figma", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/figma/figma-original.svg" },
    { knowledge: 1, name: "Firebase", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/firebase/firebase-plain.svg" },
    { knowledge: 2, name: "Laravel", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/laravel/laravel-plain.svg" },
    { knowledge: 2, name: "MySQL", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original.svg" },
    { knowledge: 2, name: "Node.JS", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" },
    { knowledge: 2, name: "PHP", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/php/php-original.svg" },
    { knowledge: 2, name: "SASS", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg" },
    { knowledge: 1, name: "Kotlin", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/kotlin/kotlin-original.svg" },
    { knowledge: 1, name: "RabbitMQ", src: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" },
    { knowledge: 2, name: "Tailwind CSS", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg" },
    { knowledge: 1, name: "Typescript", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg" },
    { knowledge: 1, name: ".NET", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/dot-net/dot-net-original.svg" },
    { knowledge: 2, name: "SQL Server", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { knowledge: 2, name: "SQLite", src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sqlite/sqlite-original.svg" }
];

function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
}

function changeImage({ action, specificImg }) {
    const images = Array.from(document.querySelectorAll("#carousel #images img"));
    const currentImgIndex = images.findIndex(i => i.classList.contains("active"));

    if (images.length === 1 || currentImgIndex === specificImg)
        return;

    images[currentImgIndex].classList.remove("active");

    const stars = Array.from(document.querySelectorAll("#techDescriptions > div > div img:last-child"));
    const targetIndex = specificImg !== undefined ? specificImg : currentImgIndex + (action === "next" ? 1 : -1);

    const buttons = Array.from(document.querySelectorAll("#carousel #buttons button"));
    const currentButtonIndex = buttons.findIndex(b => b.classList.contains("active"));

    buttons[currentButtonIndex].classList.remove("active");

    if (images[targetIndex]) {
        document.querySelector("#techDescriptions > p").textContent = imagesContent[targetIndex].name;

        for (let i = 0; i < stars.length; i++) {
            if (i < imagesContent[targetIndex].knowledge)
                stars[i].classList.add("show");
            else
                stars[i].classList.remove("show");
        }

        if (specificImg > currentImgIndex || action === "next")
            images[currentImgIndex].style.left = "-25%";
        else
            images[currentImgIndex].style.left = "125%";

        images[targetIndex].style.left = "50%";
        images[targetIndex].classList.add("active");

        (specificImg !== undefined ? buttons[specificImg] : buttons[currentButtonIndex + (action === "next" ? 1 : -1)]).classList.add("active");
    }
    else {
        images[targetIndex] = action === "next" ? images.shift() : images.pop();
        document.querySelector("#techDescriptions > p").textContent = imagesContent[action === "next" ? 0 : imagesContent.length - 1].name;

        action === "next" ? images.forEach(img => img.style.left = "125%") : images.forEach(img => img.style.left = "-25%");
        images[targetIndex].style.left = "50%";
        images[targetIndex].classList.add("active");

        (action === "next" ?
            document.querySelector("#buttons button")
            : document.querySelector("#buttons button:last-child")
        ).classList.add("active");
    }
}

function fillContentTechnologies() {
    const divImages = document.querySelector("#carousel #images");
    const divButtons = document.querySelector("#carousel #buttons");
    
    imagesContent.forEach((img, index) => {
        const imgElement = document.createElement("img");
        imgElement.alt = img.name + " icon";
        imgElement.src = img.src;

        const buttonElement = document.createElement("button");
        buttonElement.onclick = () => changeImage({ specificImg: index });

        const divElement = document.createElement("div");

        if (index === 0) {
            imgElement.classList.add("active");
            imgElement.style.left = "50%";
            
            buttonElement.classList.add("active");
        }

        buttonElement.appendChild(divElement);

        divButtons.appendChild(buttonElement);
        divImages.appendChild(imgElement);
    });
}

window.onload = fillContentTechnologies;