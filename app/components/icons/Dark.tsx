import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
	size: number;
	color: string;
}

const Dark = ({ size, color, ...props }: IconProps) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 448 448' fill='none' {...props}>
		<path fill={color} d='M232.754 448.565a232.001 232.001 0 0 1-232-232c0-94 54-178.28 137.61-214.67a16.002 16.002 0 0 1 22.113 11.69 15.988 15.988 0 0 1-1.053 9.37c-9.6 22.04-14.67 50.27-14.67 81.61 0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16.006 16.006 0 0 1 17.707 3.354 15.998 15.998 0 0 1 3.353 17.706c-36.39 83.61-120.67 137.61-214.67 137.61Z' />
	</svg>
);
export default Dark;
