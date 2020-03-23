import Big from 'big.js';

function operate(total, operation, next) {
  let firstOperand;
  let secondOperand;
  try {
    firstOperand = new Big(total);
    secondOperand = new Big(next);
  } catch (e) {
    return 0;
  }
  let result;


  switch (operation) {
    case ('-'):
      result = firstOperand.minus(secondOperand).toString();
      break;

    case ('+'):
      result = firstOperand.add(secondOperand).toString();
      break;

    case ('%'):
      result = firstOperand.div(100).toString();
      break;

    case ('X'):
      result = firstOperand.times(secondOperand).toString();
      break;

    case ('÷'):
      try {
        result = firstOperand.div(secondOperand).toString();
      } catch (e) {
        result = 'ERR';
      }
      break;

    default:
      break;
  }
  return result;
}

export default operate;
