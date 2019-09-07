import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, [col] 1fr)',
    gridRowGap: '1em'
  },
  button: {
    gridColumn: '4 / 10',
    background: '#F06451',
    height: '3.5rem'
  },
  fullWidth: {
    gridColumn: '1 / 13'
  },
  textField: {
    gridColumn: '4 / 10',
    ['800px']: {
      gridColumn: '1 / 13'
    }
  },
  title: {
    gridColumn: '1 / 13',
    fontSize: '3rem',
    color: '#5495F7',
    textAlign: 'center'
  },
  helpText: {
    gridColumn: '1 / 13',
    fontSize: '2rem',
    color: '#5495F7',
    textAlign: 'center'
  }

}));

export default useStyles;
