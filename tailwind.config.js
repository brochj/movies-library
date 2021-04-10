module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
      
        'background': '#FFFFFF',
        'surface': '#DBDBDB',
        'error': '#cf6679',

        'onPrimary': '#000000',
        'onSecondary': '#000000',
        'onBackground': '#FFFFFF',
        'onSurface': '#FFFFFF',
        'onError': '#000000',
        success: '#0070f3',

        'primary': {
          DEFAULT: '#EF444C',
          '50': '#FDEDEE',
          '100': '#FCDADC',
          '200': '#F9B5B8',
          '300': '#F58F94',
          '400': '#F26A70',
          '500': '#EF444C',
          '600': '#ED2831',
          '700': '#E2131D',
          '800': '#C61119',
          '900': '#AA0F16'
        },

        'secondary': {
          DEFAULT: '#F9A825',
          '50': '#FEEFD8',
          '100': '#FDE7C4',
          '200': '#FCD89C',
          '300': '#FBC874',
          '400': '#FAB84D',
          '500': '#F9A825',
          '600': '#E08D06',
          '700': '#A96A05',
          '800': '#734803',
          '900': '#3C2602'
        },

        'dark': {

          'background': '#141414',
          'surface': '#282828',
          'error': '#cf6679',
  
          'onPrimary': '#FFFFFF',
          'onSecondary': '#FFFFFF',
          'onBackground': '#e5e5e5',
          'onSurface': '#e5e5e5',
          'onError': '#FFFFFF',
          primary: {
            DEFAULT: '#EF444C',
            '50': '#FDEDEE',
            '100': '#FCDADC',
            '200': '#F9B5B8',
            '300': '#F58F94',
            '400': '#F26A70',
            '500': '#EF444C',
            '600': '#ED2831',
            '700': '#E2131D',
            '800': '#C61119',
            '900': '#AA0F16'
          },

          secondary: {
            DEFAULT: '#F9A825',
            '50': '#FEEFD8',
            '100': '#FDE7C4',
            '200': '#FCD89C',
            '300': '#FBC874',
            '400': '#FAB84D',
            '500': '#F9A825',
            '600': '#E08D06',
            '700': '#A96A05',
            '800': '#734803',
            '900': '#3C2602'
          },
        },
        uniques: {
          imdb: '#E2B616'
        }
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
