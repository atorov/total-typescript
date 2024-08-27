// const dangerousFunction = (arrayOfNumbers: number[]) => {
//     arrayOfNumbers.pop();
//     arrayOfNumbers.pop();
// };

// type Coordinate = [number, number];
// const myHouse: Coordinate = [0, 0];

// dangerousFunction(myHouse);

type Coordinate = readonly [number, number];

const dangerousFunction = (arrayOfNumbers: number[]) => {
    arrayOfNumbers.pop();
    arrayOfNumbers.pop();
};

const myHouse: Coordinate = [0, 0];

// @ts-expect-error
dangerousFunction(myHouse);
