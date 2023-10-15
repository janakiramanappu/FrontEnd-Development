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

// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
// let modelButton = document.querySelector('.modelButton');
// let model = document.querySelector('.model');
// let modelClose = document.querySelector('.modelClose');

// modelButton.addEventListener('click', () => {
//     // console.log('open model is clicked!!');
//     model.style.display = 'flex';
// })

// modelClose.addEventListener('click', () => {
//     // console.log("Model closed is clicked!!");
//     model.style.display = 'none';
// })

// model.addEventListener('click', (e) => {
//     // console.log(e, e.target, e.target.class);
//     if (e.target === model) {
//         model.style.display = 'none';
//     }
// })

// if (20 === '20') {
//     console.log('equal');
// }