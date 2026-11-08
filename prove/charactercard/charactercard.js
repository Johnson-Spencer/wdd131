const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 8,
    health: 100,
    image: "snortleblat.webp",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died!`);
        }
    },

    levelUp() {
        this.level += 1;
    }
};

const characterName = document.querySelector("#character-name");
const characterClass = document.querySelector("#character-class");
const characterLevel = document.querySelector("#character-level");
const characterHealth = document.querySelector("#character-health");
const characterImage = document.querySelector(".image");

const attackButton = document.querySelector("#attack-button");
const levelUpButton = document.querySelector("#level-up-button");

function displayCharacter() {
    characterName.textContent = character.name;
    characterClass.textContent = character.class;
    characterLevel.textContent = character.level;
    characterHealth.textContent = character.health;
    characterImage.src = character.image;
}

attackButton.addEventListener("click", () => {
    character.attacked();
    displayCharacter();
});

levelUpButton.addEventListener("click", () => {
    character.levelUp();
    displayCharacter();
});

displayCharacter();