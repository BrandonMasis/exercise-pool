const exercises = [
  { name: 'Superimposed lines', probability: 10 },
  { name: 'Ghosted lines', probability: 10 },
  { name: 'Ghosted planes', probability: 10 },
  { name: 'Tables of ellipses', probability: 20 },
  { name: 'Ellipses in planes', probability: 20 },
  { name: 'Funnels', probability: 20 },
  { name: 'Plotted perspective', probability: 30 },
  { name: 'Rough perspective', probability: 30 },
  { name: 'Rotated boxes', probability: 30 },
  { name: 'Organic perspective', probability: 30 },
];

function getRandomExercise() {
  const totalProbability = exercises.reduce(
    (acc, exercise) => acc + exercise.probability,
    0
  );
  const randomValue = Math.random() * totalProbability;

  let cumulativeProbability = 0;
  for (const exercise of exercises) {
    cumulativeProbability += exercise.probability;
    if (randomValue <= cumulativeProbability) {
      return exercise.name;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('generateButton')
    .addEventListener('click', function () {
      const selectedExercise = getRandomExercise();
      displayExercise(selectedExercise);
    });

  document
    .getElementById('generateButton2')
    .addEventListener('click', function () {
      const selectedExercises = [];
      for (let i = 0; i < 2; i++) {
        const exercise = getRandomExercise();
        selectedExercises.push(exercise);
      }
      displayExercises(selectedExercises);
    });

  document
    .getElementById('generateButton3')
    .addEventListener('click', function () {
      const selectedExercises = [];
      for (let i = 0; i < 3; i++) {
        const exercise = getRandomExercise();
        selectedExercises.push(exercise);
      }
      displayExercises(selectedExercises);
    });

  function displayExercise(exercise) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<div class="exercise-box">${exercise}</div>`;
  }

  function displayExercises(exercises) {
    const resultElement = document.getElementById('result');
    const exerciseBoxes = exercises.map(
      (exercise) => `<div class="exercise-box">${exercise}</div>`
    );
    resultElement.innerHTML = `${exerciseBoxes.join('')}`;
  }
});
