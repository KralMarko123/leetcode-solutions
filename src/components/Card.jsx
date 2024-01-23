import React from 'react';
import './components.css';

const Card = (props) => {
	const extraClasses = props.extraClassNames ? props.extraClassNames?.map((ec) => ` ${ec}`) : '';

	return <div className={`card${extraClasses}`}>{props.children}</div>;
};

export default Card;
