import { cva } from 'class-variance-authority';

export const TextStyles = cva('text-main', {
	variants: {
		color: {
			primary: 'text-main-primary',
			secondary: 'text-main-secondary',
			dark: 'text-main-dark',
			light: 'text-main-light',
		},

		size: {
			sm: 'text-sm',
			lg: 'text-lg',
		},

		weight: {
			normal: '',
			semibold: 'font-semibold',
			bold: 'bold',
		},

		uppercase: {
			true: 'uppercase',
			false: 'normal-case',
		},
	},

	defaultVariants: {
		color: 'primary',
		size: 'sm',
		weight: 'normal',
		uppercase: false,
	},
});
