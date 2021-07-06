import { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
	const COLOR_LIST = ['red', 'green', 'yellow'];
	const currentIndex = COLOR_LIST.indexOf(currentColor);

	let newIndex = currentIndex;
	while (newIndex === currentIndex) {
		newIndex = Math.floor(Math.random() * COLOR_LIST.length);
	}

	console.log('Current Index: ', COLOR_LIST[currentIndex]);
	return COLOR_LIST[newIndex];
}

function useMagicColor() {
	const [color, setColor] = useState('transparent');
	const colorRef = useRef('transparent');

	// Change color every 1 seconds
	useEffect(() => {
		const colorInterval = setInterval(() => {
			// console.log('First color: ', color);
			// console.log('Change color: ', colorRef.current);
			const newColor = randomColor(colorRef.current);
			setColor(newColor);

			colorRef.current = newColor;
		}, 1000);

		return () => {
			clearInterval(colorInterval);
		};
	}, []);

	return { color };
}

export default useMagicColor;
