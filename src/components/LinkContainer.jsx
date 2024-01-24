import React from 'react';

const LinkContainer = ({ href, isExternal, children }) => {
	return (
		<a
			className='link-container'
			href={href}
			target={isExternal ? '_blank' : '_self'}
			rel='noreferrer'
		>
			{children}
		</a>
	);
};

export default LinkContainer;
