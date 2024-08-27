// const addClickEventListener = (listener) => {
// Parameter 'listener' implicitly has an 'any' type.
//   document.addEventListener("click", listener);
// };

// addClickEventListener(() => {
//   console.log("Clicked!");
// });

function addClickEventListener(listener: () => void) {
    document.addEventListener('click', listener);
}

addClickEventListener(() => {
    console.log('Clicked!');
});
