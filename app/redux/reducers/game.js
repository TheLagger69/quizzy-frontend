import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  CHANGE_QUESTION_NAME,
  CHANGE_QUESTION_DIFFICULTY,
  REMOVE_ALL_QUESTIONS,
  CHANGE_ANSWER,
  CHANGE_IMAGE,
  CHANGE_SELECTED_ANSWER,
  CHANGE_NAME,
  CHANGE_CATEGORY
} from "../constants/game";

const initialState = {
  questions: [],
  category: 'sports',
  image: null
};

export default (state = initialState, action) => {
  let newQuestions;
  let newAnswers;
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.concat([ action.question ])
      };
    case CHANGE_QUESTION_DIFFICULTY:
      return{
        ...state,
        questions: state.questions.map( (question, index) => {
          return {
            ...question,
            difficulty: index === action.index ? action.difficulty : question.difficulty
            }
        })
      };  
    case REMOVE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter( (question, index) => {
          return action.question !== index
        }
      )};
    case CHANGE_QUESTION_NAME:
      return {
        ...state,
        questions: state.questions.map( (question, index) => {
          return {
            ...question,
            text: index === action.index ? action.questionName : question.text
            }
        })
      };
    case REMOVE_ALL_QUESTIONS:
      return {
        ...state,
        questions: []
      };
    case CHANGE_ANSWER:
      newAnswers = state.questions[action.question].answers.slice(0, 4);
      newAnswers[action.index] = action.answer;
      newQuestions = state.questions.slice(0, state.questions.length);
      newQuestions[action.question].answers = newAnswers;
      return {
        ...state,
        questions: newQuestions
      };
    case CHANGE_IMAGE:
      return {
        ...state,
        image: action.image
      };
    case CHANGE_SELECTED_ANSWER:
      newQuestions = state.questions.slice(0, state.questions.length);
      newQuestions[action.question].correctAnswer = action.answer;
      return {
        ...state,
        questions: newQuestions
      };
      case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      };
      case CHANGE_CATEGORY:
      return{
        ...state,
        category: action.category
      };  
    default:
      return state;
  }
}
