import type { Config } from 'tailwindcss';
import { Quicksand } from 'next/font/google';

export default {
    darkMode: ['class'],
    content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
    	extend: {
    		colors: {
    			sand: {
    				primary: '#D9C2A7',
    				secundary: '#F2E4BB',
    				tertiary: '#F2E2CE',
    				light: '#F2ECE4',
    				brown: '#594A3C',
    				lightbrown: '#7A6553'
    			},
    			main: {
    				primary: '#8f00ff',
    				secondary: ' #c724ff',
    				light: '#e0e5ec',
    				medium: '#c1c7d0',
    				dark: '#5c5e63',
    				xdark: '#333438',
    				ice: '#f7f8fa',
    				pale: '#d8e0f1',
    				black: '#000000',
    				white: '#ffffff'
    			},
    			shadow: {
    				light: 'rgba(255, 255, 255, 0.6)',
    				dark: 'rgba(0, 0, 0, 0.2)'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			primary: [
    				'var(--font-quicksand)',
    				'sans-serif'
    			]
    		},
    		boxShadow: {
    			neumorphism: '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.6)',
    			inset: 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.6)'
    		},
    		borderRadius: {
    			neumorphic: '20px',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		spacing: {
    			neumorphism: '12px'
    		},
    		animation: {
    			spin360Right: 'spin360Right 1s ease-out forwards',
    			spin360Left: 'spin360Left 1s ease-out forwards'
    		},
    		keyframes: {
    			spin360Right: {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			spin360Left: {
    				'0%': {
    					transform: 'rotate(360deg)'
    				},
    				'100%': {
    					transform: 'rotate(0deg)'
    				}
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
