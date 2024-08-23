// const func = () => {
//     // Refactor this to be its own function
//     const randomPercentage = `${(Math.random() * 100).toFixed(2)}%`;

//     console.log(randomPercentage);
// };

function getRandomPercentage() {
    return (Math.random() * 100).toFixed(2);
}

function func() {
    const randomPercentage = `${getRandomPercentage()}%`;

    console.log(randomPercentage);
}
