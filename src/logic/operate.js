/*eslint-disable*/
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
      result = firstOperand.times(secondOperand.div('100')).toString();
      break;

    case ('X'):
      result = firstOperand.times(secondOperand).toString();
      break;

    case ('÷'):
      result = firstOperand.div(secondOperand).toString();
      break;

    default:
      break;
  }
  return result;
}

export default operate;
