'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Dark from '../icons/Dark';
import Light from '../icons/Light';

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	if (theme === 'light') {
		return (
			<button
				onClick={() => {
					setTheme('dark');
				}}
			>
				<Dark size={25} color={'#000000'} />
			</button>
		);
	} else {
		return (
			<button
				onClick={() => {
					setTheme('light');
				}}
			>
				<Light size={25} color={'#FFFFFF'} />
			</button>
		);
	}
};

export default ThemeSwitch;
