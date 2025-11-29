function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateColors() {
    const paletteDiv = document.getElementById("palette");
    paletteDiv.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const color = randomColor();
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.background = color;
        box.innerText = color;
        paletteDiv.appendChild(box);
    }
}
