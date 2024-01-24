import React from 'react';
import './components.css';

const Card = ({ extraClassNames, children, callOnClick }) => {
	const extraClasses = extraClassNames ? ' ' + extraClassNames.join(' ') : '';
	const clickFunction = () => {
		if (!callOnClick) return;
		callOnClick();
	};

	return (
		<div className={`card${extraClasses}`} onClick={() => clickFunction()}>
			{children}
		</div>
	);
};

export default Card;
