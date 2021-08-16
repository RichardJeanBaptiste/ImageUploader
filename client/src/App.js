import './App.css';
import upImg from './images/image.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Box, Button } from '@material-ui/core';

const useStyles = makeStyles({

  root: {
      position: 'absolute',
      width: '402px',
      height: '570px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
  },

  cardTitle: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '27px',
    marginTop: '12%',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    color: '#4F4F4F',
  },

  subHeading: {
    fontFamily: 'Poppins',
    marginTop: '3%',
    fontSize: '12px',
    fontWeight: 500,
  },

  uploadStyle: {
    position: 'absolute',
    width: '338px',
    height: '285px',
    top: '48%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#F6F8FB',
    border: '1px dashed #97BEF4',
    borderRadius: '12px',
    marginTop: '5%',
  },

  imgStyle: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '146px',
    height: '124.24px',
  },

  subHeading2: {
    position: 'absolute',
    marginLeft: '15%',
    bottom: '20%',
    fontFamily: 'Poppins',
    color: '#BDBDBD',
    size: '12px',
    lineHeight: '18px'
  },

  subHeading3: {
    position: 'absolute',
    marginLeft: '15%',
    bottom: '14%',
    fontFamily: 'Poppins',
    color: '#BDBDBD',
    left: '32%',
  },

  buttonStyle: {
    position: 'absolute',
    borderRadius: '8px',
    background: '#2F80ED',
    width: '115px',
    height: '33px',
    bottom: '4%',
    left: '35%',
  },

  buttonTypo: {
    fontFamily: 'Poppins',
    fontSize: '11px',
  }

})



function App() {

  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
          <CardContent>
              <Typography variant="h4" align='center' className={classes.cardTitle}>Upload your image</Typography>
              <Typography vaariant="p" align='center' className={classes.subHeading}>Files should Jpeg, Png...</Typography>
              <Box className={classes.uploadStyle}>
                  <img src={upImg} alt="" className={classes.imgStyle}></img>
                  <Typography variant="p" className={classes.subHeading2}>Drag & Drop your image here</Typography>
              </Box>
              <Typography variant="p" align='center' className={classes.subHeading3}>Or</Typography>
              <Button variant="contained" color="primary" className={classes.buttonStyle}>
                <Typography className={classes.buttonTypo}>Choose a file</Typography>
              </Button>
          </CardContent>
      </Card>
    </>
  );
}

export default App;
