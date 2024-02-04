import { useState, useEffect, useMemo } from 'react';

export const useMobileCheck = () => {
	const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
	const isTablet = browserWidth <= 1280;
	const isMobile = browserWidth <= 768;
	let MAXIMUM_NUMBER_OF_ITEMS_PER_PAGE;

	if (!isTablet && !isMobile) MAXIMUM_NUMBER_OF_ITEMS_PER_PAGE = 8;
	else if (isTablet && !isMobile) MAXIMUM_NUMBER_OF_ITEMS_PER_PAGE = 6;
	else MAXIMUM_NUMBER_OF_ITEMS_PER_PAGE = 4;

	const handleWindowSizeChange = () => {
		setBrowserWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	return useMemo(
		() => ({
			browserWidth,
			isMobile,
			MAXIMUM_NUMBER_OF_ITEMS_PER_PAGE
		}),
		[browserWidth]
	);
};
