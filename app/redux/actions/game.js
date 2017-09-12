import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  CHANGE_QUESTION_NAME,
  REMOVE_ALL_QUESTIONS,
  CHANGE_ANSWER
} from '../constants/game';

export const changeQuestionName = (questionName, index) => {
  return {
    type: CHANGE_QUESTION_NAME,
    questionName,
    index
  }
};

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question
  }
};

export const removeQuestion = (question) => {
  return {
    type: REMOVE_QUESTION,
    question
  }
};

export const removeAllQuestions = () => {
  return {
    type: REMOVE_ALL_QUESTIONS,
  }
};

export const changeAnswer = (question, answer, index) => {
  return {
    type: CHANGE_ANSWER,
    question,
    answer,
    index
  }
};
