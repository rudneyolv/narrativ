import { cva } from 'class-variance-authority';

export const IconContainerStyles = cva('h-6 w-6', {
	variants: {
		color: {
			primary: 'text-main-primary',
			light: 'text-main-light',
		},

		hovercolor: {
			primary: 'hover:text-main-primary',
			light: 'hover:text-main-light',
		},

		active: {
			true: '', // Quando active for true, a classe específica é aplicada
			false: '', // Se false, não aplica nenhuma classe extra
		},
	},

	compoundVariants: [
		{
			active: true, // Aplica a classe 'text-color-primary' quando 'active' for true
			className: '!text-main-primary animate-spin360Right', // Garante que a cor seja aplicada quando ativo
		},

		{
			active: false, // Aplica a classe 'text-color-primary' quando 'active' for true
			className: 'animate-spin360Left', // Garante que a cor seja aplicada quando ativo
		},
	],
});
