document.addEventListener("DOMContentLoaded", function() {
    
    console.log("DOM fully loaded");
    
    
    let box = document.getElementById('color-box');
    if (box) {
        box.style.backgroundColor = 'lightblue';
    }
});


document.addEventListener("DOMContentLoaded", function() {

    let colorBox = document.getElementById('color-box');
    let changeColorBtn = document.getElementById('change-color-btn');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

   
});
