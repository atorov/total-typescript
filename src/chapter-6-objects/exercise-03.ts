// const scores = {};

// scores.math = 95;
// Property 'math' does not exist on type '{}'.
// scores.english = 90;
// Property 'english' does not exist on type '{}'.
// scores.science = 85;
// Property 'science' does not exist on type '{}'.

type Scores = Record<PropertyKey, number>;

const scores: Scores = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;
