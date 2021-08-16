import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import {Card} from '@material-ui/core';
import DropZone from './components/DropZone';

const useStyles = makeStyles({

  root: {
      position: 'absolute',
      width: '402px',
      height: '570px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
  },

})




function App() {

  const classes = useStyles();

  
  return (
    <>
      <Card className={classes.root}>
          <DropZone/>
      </Card>
    </>
  );
}

export default App;
