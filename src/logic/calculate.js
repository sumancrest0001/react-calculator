import operate from './operate';

function calculate(data, name) {
  const {
    total, operation, next, isCalculated,
  } = data;
  switch (name) {
    case ('+/-'):
      if (next) {
        return {
          total,
          operation,
          next: next * -1,
          isCalculated,
        };
      }
      return {
        total: total * -1,
        operation,
        next,
        isCalculated,
      };

    case ('AC'):
      return {
        total: null,
        operation: null,
        next: null,
        isCalculated: false,
      };

    case ('+'):
    case ('-'):
    case ('÷'):
    case ('X'):
    case ('%'):
      if (!total) {
        return {
          total: name === 'X' ? '1' : '0',
          operation,
          next,
          isCalculated,
        };
      } if ((total && operation && !next) || (total && !operation)) {
        return {
          total,
          operation: name,
          next,
          isCalculated,
        };
      }
      return {
        total: operate(total, operation, next),
        operation: name,
        next: null,
        isCalculated: true,
      };


    case ('='):
      if (next) {
        return {
          total: operate(total, operation, next),
          operation: null,
          next: null,
          isCalculated: true,
        };
      } if (total && !next) {
        return {
          total, operation: null, next: null, isCalculated: true,
        };
      }
      return {
        total: '0', operation: null, next: null, isCalculated: true,
      };


    default:
      if (!operation && !isCalculated) {
        return {
          total: total === null ? name : total + name,
          operation,
          next,
          isCalculated: false,
        };
      }
      if (total && isCalculated && operation) {
        return {
          total,
          next: name,
          operation,
          isCalculated: false,
        };
      }

      if (total && !operation) {
        return {
          total: name,
          next: null,
          operation: null,
          isCalculated: false,
        };
      }
      return {
        total,
        next: next === null ? name : next + name,
        operation,
        isCalculated,
      };
  }
}

export default calculate;
