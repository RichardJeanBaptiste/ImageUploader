import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DropZone from './components/DropZone';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17.07px',
    color: '#A9A9A9', 
    top: '96.5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  username: {
    textDecoration: 'underline'
  }
})

function App() {

  const classes = useStyles();

  return (
    <>
        <DropZone/>
        <Typography variant="p" className={classes.root} align='center'>created by Richinbk - devChallenges.io</Typography>
    </>
  );
}

export default App;
