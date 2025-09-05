import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  EQUALS,
  TYPE_TO_SCREEN,
  MEMORY_ADD,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  PERCENT,
  TOGGLE_SIGN,
  CLEAR_ENTRY,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  temp: 0,
  isTyping: true,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      if (num2 === 0) {
        return 'Division by Zero Error';
      }
      return num1 / num2;
    default:
      return num2;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.temp, action.payload, state.operation),
        isTyping: false,
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        temp: state.total,
        total: 0,
        isTyping: true,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: initialState.total,
        operation: initialState.operation,
        temp: initialState.temp,
        isTyping: true,
      };

    case EQUALS:
      return {
        ...state,
        total: calculateResult(state.temp, state.total, state.operation),
        operation: initialState.operation,
        temp: 0,
        isTyping: false,
      };

    case TYPE_TO_SCREEN:
      const payloadStr = action.payload;
      const currentTotalStr = state.total.toString();
      
      if (payloadStr === '.' && currentTotalStr.includes('.')) {
        return state;
      }
    
      const newTotalStr = state.isTyping ?
        (currentTotalStr === '0' && payloadStr !== '.' ? payloadStr : currentTotalStr + payloadStr) :
        payloadStr;
    
      return {
        ...state,
        total: parseFloat(newTotalStr),
        isTyping: true,
      };

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: initialState.memory,
      };

    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
        isTyping: true,
      };
      
    case PERCENT:
      return {
        ...state,
        total: state.total / 100,
      };

    case TOGGLE_SIGN:
      return {
        ...state,
        total: state.total * -1,
      };

    case CLEAR_ENTRY:
      return {
        ...state,
        total: 0,
        isTyping: true,
      };

    default:
      return state;
  }
};

export default reducer;