import React from 'react';
import { Link } from 'react-router-dom';

function LinkTo({ text, to, bold }) {
  if (to) {
    return (
      <Link
        to={to}
        style={bold ? { fontWeight: 'bold', color: '#00ca4d' } : {}}
      >
        {text}
      </Link>
    );
  } else {
    return <span>{text}</span>;
  }
}

export default LinkTo;
