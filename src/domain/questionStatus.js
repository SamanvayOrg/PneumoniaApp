import pneumoniaDetectionQuestions from './pneumoniaDetectionQuestions';

const questions = pneumoniaDetectionQuestions;

const visibleQuestions = (form = {}) =>
  questions.filter(question => question.show(form) === true);

const nextQuestion = (form, questionKey) => {
  let visibleQs = visibleQuestions(form);

  if (!questionKey) {
    return visibleQs[0];
  }

  const indexOfCurrentQuestion = visibleQs.findIndex(
    q => q.key === questionKey,
  );
  if (indexOfCurrentQuestion === questions.length - 1) {
    return null;
  }
  return visibleQs[indexOfCurrentQuestion + 1];
};

const previousQuestion = (form, questionKey) => {
  let visibleQs = visibleQuestions(form);

  const indexOfCurrentQuestion = visibleQs.findIndex(
    q => q.key === questionKey,
  );

  if (indexOfCurrentQuestion === 0) {
    return null;
  }

  return visibleQs[indexOfCurrentQuestion - 1];
};

const questionAt = (index, form) => visibleQuestions(form)[index];

const numberOfQuestions = form => visibleQuestions(form).length;

const questionWithKey = key => questions.find(question => question.key === key);

export {
  questions,
  visibleQuestions,
  questionAt,
  numberOfQuestions,
  nextQuestion,
  previousQuestion,
  questionWithKey,
};