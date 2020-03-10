import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { output } = props;
  const result = output || '0';
  return (
    <div className="display-screen">
      {result}
    </div>
  );
};

Display.propTypes = {
  output: PropTypes.string.isRequired,
};


export default Display;
