// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
let starRating = document.querySelector('.star-rating');
let stars = document.querySelectorAll('.star');
// querySelectorAll will take the star as an array

let currentDataRating = 0;

starRating.addEventListener('mouseover', (e) => {
    // console.log('mouse hover is working!!');
    // console.log('event target', e, e.target, e.target.classList);
    let star = e.target;
    // console.log('star', star, star.classList);
    if (star.classList.contains('star')) {
        // console.log('star dataset', star.dataset, star.dataset.rating);
        let rating = parseInt(star.dataset.rating, 10);
        // console.log(rating);
        // console.log(rating, typeof(rating));
        highlight(rating);
    }
    // else {
    //   let rating = 0;
    //   // console.log(rating);
    //   highlight(rating);
    // }
});

function highlight(rating) {
    stars.forEach((star, index) => {
        // if(rating === 0) {
        //   star.classList.remove('highlight');
        // }
        if (index < rating) {
            star.classList.add('highlight');
        } else {
            star.classList.remove('highlight');
        }
    })
}

starRating.addEventListener('mouseleave', () => {
    // console.log("current data rating", currentDataRating);
    // let star = e.target;
    // console.log(star.classList);
    // if(star.classList.contains('starRating')) {
    //   console.log("clicked..");
    // console.log(currentDataRating);
    highlight(currentDataRating);
})

starRating.addEventListener('click', (e) => {
    let star = e.target;
    //   let starRating = parseInt(star.dataset.rating, 10);
    // //  console.log("Rating clicked no!!", starRating);
    // alert("Rating clicked "+ starRating);

    if (star.classList.contains('star')) {
        currentDataRating = parseInt(star.dataset.rating, 10);
        starRating.setAttribute("data-rating", currentDataRating);
        highlight(currentDataRating);
        alert(`you rated ${currentDataRating} stars`);
    }
})