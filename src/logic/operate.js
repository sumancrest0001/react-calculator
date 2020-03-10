import Big from 'big.js';

function operate(total, operation, next) {

  let a, b;

  try {
    a = new Big(total);
    b = new Big(next);
  } catch (e) {
    return 0;
  }
  const firstOperand = new Big(total);
  const secondOperand = new Big(next);
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
  console.log(result);
  return result;
}

export default operate;
