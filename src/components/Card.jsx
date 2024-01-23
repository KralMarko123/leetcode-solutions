import React from 'react';
import './components.css';

const Card = ({ extraClassNames, children }) => {
	const extraClasses = extraClassNames ? ' ' + extraClassNames.join(' ') : '';

	return <div className={`card${extraClasses}`}>{children}</div>;
};

export default Card;
