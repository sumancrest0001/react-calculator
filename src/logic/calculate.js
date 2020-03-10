import operate from './operate';

function calculate(data, name) {
  const { total, operation, next } = data;
  switch (name) {
    case ('+/-'):
      if (next) {
        return {
          total,
          operation,
          next: next * -1,
        };
      }
      return {
        total: total * -1,
        operation,
        next,
      };

    case ('AC'):
      return {
        total: null,
        operation: null,
        next: null,
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
        };
      } if ((total && operation && !next) || (total && !operation)) {
        return {
          total,
          operation: name,
          next,
        };
      }
      return {
        total: operate(total, operation, next),
        operation: name,
        next: null,
      };


    case ('='):
      if (next) {
        return {
          total: operate(total, operation, next),
          operation: null,
          next: null,
        };
      } if (total && !next) {
        return { total, operation: null, next: null };
      }
      return { total: '0', operation: null, next: null };


    default:
      if (!operation) {
        return {
          total: total === null ? name : total + name,
          operation,
          next,
        };
      }
      return {
        total,
        next: next === null ? name : next + name,
        operation,
      };
  }
}

export default calculate;
