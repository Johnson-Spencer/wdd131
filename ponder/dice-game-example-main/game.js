document.querySelector('#rollButton').addEventListener("click", e => {
    
    document.querySelectorAll('#gameboard img').forEach(image => {
        image.src = "assets/die_rolling.gif";
    });
    setDieImages("assets/die_rolling.gif");

    setTimeout(() => {
        setDieImages(`assets/white_dice_6.gif`);

       
        document.querySelectorAll('#gameboard img').forEach(image => {
            const randomNumber = Math.ceil(Math.random() * 6);
            image.src = `assets/white_dice_${randomNumber}.gif`;
        });
    }, 1000);
});




function setDieImages(imagePath) {
    document.querySelectorAll('#gameboard img').forEach(image => {
        image.src = imagePath;
    })
}
    
