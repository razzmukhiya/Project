function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
        });
}

document.addEventListener('DOMContentLoaded', loadHeader);



// const userBtn = document.querySelectorAll(".userBtn");
// let activeButton = null;

// userBtn.forEach (button => {
//     button.addEventListener('click', function (e) {
        
//         if (activeButton){
//             activeButton.style.backgroundColor = "initial";
//             activeButton.style.borderRadius = "initial";
//         } 
//             e.target.style.backgroundColor = "green";
//             e.target.style.borderRadius = "20px"
            
            
           
//             activeButton = e.target;
        
//     })
// })

// const userBtn = document.querySelectorAll(".userBtn");

// userBtn.forEach(button => {
//     button.addEventListener("click", function (e){
//         console.log("button cliecked")
        
//     })
// })


// const userBtn = document.querySelectorAll(".userBtn");
// let activeButton = null;

// userBtn.forEach(button => {
//     button.addEventListener('click', function (e) {
//         console.log("button cliecked")
//         if (activeButton && activeButton !== e.target) {
//             activeButton.style.backgroundColor = "initial";
//             activeButton.style.borderRadius = "initial";
//         }
        
//         e.target.style.backgroundColor = "green";
//         e.target.style.borderRadius = "20px";
        
//         activeButton = e.target;
//     })
// })