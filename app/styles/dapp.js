import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, [col] 1fr)',
    gridRowGap: '1em'
  },
  fullWidth: {
    gridColumn: '1 / 13'
  }
});

export default useStyles;
