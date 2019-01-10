import Typography from 'typography';
import noriegaTheme from 'typography-theme-noriega';

noriegaTheme.baseFontSize = '15px';

noriegaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  h6: {
    fontWeight: '900',
  },
});

const typography = new Typography(noriegaTheme);

export default typography;
