function randomtext() {
    var randomtxt = [
        'Minecraft Sweat',
        'Plays the game for a Living',
        'Codes like shit',
        'That one french guy',
        'Credits to ItzBunniYT',
        'Alex'
    ];
    return randomtxt[Math.floor((Math.random() * 5.99))];
}

document.getElementById("spam").innerHTML = randomtext();