//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const stopButton = document.querySelector(".stop");

    const audioElements = {};

    buttons.forEach((button) => {
        const soundName = button.id;
        audioElements[soundName] = new Audio(`sounds/${soundName}.mp3`);

        button.addEventListener("click", () => {
            stopAllSounds();
            audioElements[soundName].play();
        });
    });

    stopButton.addEventListener("click", () => {
        stopAllSounds();
    });

    function stopAllSounds() {
        buttons.forEach((button) => {
            const soundName = button.id;
            audioElements[soundName].pause();
            audioElements[soundName].currentTime = 0;
        });
    }
});
