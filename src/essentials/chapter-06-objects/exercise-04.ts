// // @ts-expect-error science should be provided
// Unused '@ts-expect-error' directive.
// const scores: Scores = {
//   math: 95,
//   english: 90,
// };

// scores.athletics = 100;
// Property 'athletics' does not exist on type 'Scores'.
// scores.french = 75;
// Property 'french' does not exist on type 'Scores'.
// scores.spanish = 70;
// Property 'spanish' does not exist on type 'Scores'.

interface Scores extends Record<'math' | 'english' | 'science', number> {
    [Key: PropertyKey]: number;
}

const scores: Scores = {
    math: 95,
    english: 90,
    science: 42,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
