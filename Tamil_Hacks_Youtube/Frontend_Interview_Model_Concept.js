// let modelButton = document.getElementById("modelButton");
// let modelBox = document.getElementById('modelBox');

// modelButton.addEventListener('click', () => {
//     console.log("hello");
//     let template = `<div id="modelBox">
//         <h1>Model Title</h1>
//         <p>Model content goes here...</p>
//     </div>`;
//     document.getElementById('modelBox').style.color = '#fff';
//     document.write(template);
// });

let openModelButton = document.querySelector('.openModelButton');
let model = document.querySelector('.model');
let modelClose = document.querySelector(".modelClose");

// Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// Add the script tag before the body closing tag
openModelButton.addEventListener('click', () => {
    // console.log('open model button is clicked');
    model.style.display = 'flex';
})

modelClose.addEventListener('click', () => {
    // console.log("close button is clicked");
    model.style.display = "none";
})

model.addEventListener('click', (event) => {
    // console.log(event, "", event.target);
    if (event.target === model) {
        model.style.display = 'none';
    }
})

// CodeSandBox

// const openModelButton = document.querySelector('.openModelButton');
// const model = document.querySelector('.model');
// const modelClose = document.querySelector('.modelClose');
// const modelContent = document.querySelector(".modelContent");

// openModelButton.addEventListener('click', () => {
//     console.log('open model button is clicked!!');
//     model.style.display = 'flex';
// })

// modelClose.addEventListener('click', () => {
//     console.log("model close button is clicked!!");
//     model.style.display = 'none';
// });

// model.addEventListener('click', (event) => {
//     console.log(event, "-", event.target);
//     if (event.target === modelContent || event.target === model) {
//         if (event.target === model) {
//             model.style.display = 'none';
//         }
// });