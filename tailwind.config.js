module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep medical blue
        primary: {
          DEFAULT: '#2D5A87', // blue-800
          50: '#EFF6FF', // blue-50
          100: '#DBEAFE', // blue-100
          200: '#BFDBFE', // blue-200
          300: '#93C5FD', // blue-300
          400: '#60A5FA', // blue-400
          500: '#3B82F6', // blue-500
          600: '#2563EB', // blue-600
          700: '#1D4ED8', // blue-700
          800: '#2D5A87', // custom blue-800
          900: '#1E3A5F', // blue-900
          foreground: '#FFFFFF', // white
        },
        // Secondary Colors - Complementary teal
        secondary: {
          DEFAULT: '#4A90A4', // teal-600
          50: '#F0FDFA', // teal-50
          100: '#CCFBF1', // teal-100
          200: '#99F6E4', // teal-200
          300: '#5EEAD4', // teal-300
          400: '#2DD4BF', // teal-400
          500: '#14B8A6', // teal-500
          600: '#4A90A4', // custom teal-600
          700: '#0F766E', // teal-700
          800: '#115E59', // teal-800
          900: '#134E4A', // teal-900
          foreground: '#FFFFFF', // white
        },
        // Accent Colors - Fresh mint green
        accent: {
          DEFAULT: '#52C4A0', // emerald-400
          50: '#ECFDF5', // emerald-50
          100: '#D1FAE5', // emerald-100
          200: '#A7F3D0', // emerald-200
          300: '#6EE7B7', // emerald-300
          400: '#52C4A0', // custom emerald-400
          500: '#10B981', // emerald-500
          600: '#059669', // emerald-600
          700: '#047857', // emerald-700
          800: '#065F46', // emerald-800
          900: '#064E3B', // emerald-900
          foreground: '#1A1A1A', // gray-900
          dark: '#4ADE80', // green-400 for dark mode
        },
        // Background Colors
        background: {
          DEFAULT: '#FAFBFC', // gray-50
          foreground: '#1F2937', // gray-800
        },
        // Surface Colors
        surface: {
          DEFAULT: '#FFFFFF', // white
          foreground: '#1F2937', // gray-800
        },
        // Text Colors
        'text-primary': '#1F2937', // gray-800
        'text-secondary': '#6B7280', // gray-500
        // Semantic Colors
        success: {
          DEFAULT: '#10B981', // emerald-500
          foreground: '#FFFFFF', // white
        },
        warning: {
          DEFAULT: '#F59E0B', // amber-500
          foreground: '#1F2937', // gray-800
        },
        error: {
          DEFAULT: '#EF4444', // red-500
          foreground: '#FFFFFF', // white
        },
        // Border Colors
        border: {
          DEFAULT: 'rgba(148, 163, 184, 0.2)', // slate-400 with opacity
          light: 'rgba(148, 163, 184, 0.15)', // slate-400 with lighter opacity
          focus: 'rgba(148, 163, 184, 0.1)', // slate-400 with minimal opacity
        },
        // Dark Mode Surface Colors
        'dark-surface': {
          1: '#0F172A', // slate-900
          2: '#1E293B', // slate-800
          3: '#334155', // slate-700
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        caption: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'xl': ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '1.25' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '18px',
        'xl': '24px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(15, 23, 42, 0.08)',
        'sm': '0 1px 3px rgba(15, 23, 42, 0.08)',
        'md': '0 4px 6px rgba(15, 23, 42, 0.10)',
        'lg': '0 10px 15px rgba(15, 23, 42, 0.12)',
        'xl': '0 20px 40px rgba(15, 23, 42, 0.15)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'fade-in': 'fadeIn 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      maxWidth: {
        'prose': '70ch',
      },
      gap: {
        'grid': '20px',
      },
    },
  },
  plugins: [],
}