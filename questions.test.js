//fikk hjelp av studaas 
const questions = require("./sporsmal.json");

describe("Spørsmål og svar", () => {
  let currentQuestion;

  beforeEach(() => {

    currentQuestion = questions.questions.pop();
  });

  it("Spørsmål har en riktig svar", () => {
    expect(currentQuestion).toBeDefined();
    expect(currentQuestion.title).toBeDefined();
    expect(currentQuestion.helper.text).toBeDefined();


  });

  it("Minst ett av svarne er riktige ", () => {
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct);
    expect(correctAnswer).toBeTruthy();
  });

  it("Tekst på alle svar", () => {
    currentQuestion.answers.forEach(answer => {
      expect(answer.answer).toBeDefined();
    });
  });

  it("Riktig svar er korrekt og sant", () => {
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct);
    expect(correctAnswer).toBeTruthy();

    currentQuestion.answers.forEach(answer => {
      if (answer === correctAnswer) {
        expect(answer.correct).toBeTruthy();
      } else {
        expect(answer.correct).toBeFalsy();
      }
    });
  });
});
module.exports.currentQuestion
