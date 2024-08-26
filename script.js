document.getElementById("surpriseButton").onclick = function () {
    // Slide up the curtain
    document.querySelector('.curtain').style.transform = "translateY(-100%)";

    // Show the main content
    setTimeout(() => {
        document.querySelector('.container').style.visibility = "visible";
        document.querySelector('.birthday-message').style.display = "block";
    }, 2000);

    // Play background music
    document.getElementById("bgm").play();

    // Start flower shower
    startFlowerShower();
};

function startFlowerShower() {
    const flowerShower = document.getElementById('flowerShower');
    for (let i = 0; i < 50; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = `${Math.random() * 200}%`;
        flower.style.animationDuration = `${Math.random() * 3 + 2}s`;
        flower.style.animationDelay = `${Math.random() * 5}s`;
        flowerShower.appendChild(flower);
    }
}
