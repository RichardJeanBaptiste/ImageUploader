import {React, useState, useEffect} from 'react';
import upImg from '../images/image.svg';
import { useDropzone } from 'react-dropzone';
import {makeStyles} from '@material-ui/core/styles';
import { Box, Typography, Button, CardContent } from '@material-ui/core';
const axios = require('axios');
//const FormData = require('form-data');

const useStyles = makeStyles({
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
    
});


function DropZone(props){

    const classes = useStyles();

    const [filePath , setFilePath] = useState("");

    const {acceptedFiles, getRootProps, getInputProps, open} = useDropzone({
        maxFiles:1, 
        noClick: true,
        noKeyboard: true,
        accept: 'image/jpeg, image/png', 
    });

    function changeFilePath() {
      setFilePath(acceptedFiles);
    }
    //console.log(acceptedFiles[0].path);
    //setFilePath(acceptedFiles);

    useEffect(()=> {

      function uploadImage() {
        if(acceptedFiles.length === 0){
          console.log(" none ")
        }else{

          console.log(acceptedFiles)
          setFilePath(acceptedFiles[0].path)

          const formData = new FormData();

          /*
          formData.append('my_image', new Blob([filePath]), {
            type: 'image/jpeg'
          })
          */

          formData.append('my_image', acceptedFiles[0])
          
          axios({
            url: 'http://localhost:5000/image_upload',
            method: 'POST',
            data: formData,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            }
          })
        }
      }


      uploadImage();
    },[filePath, acceptedFiles]);

    

    return(
        <CardContent>
            <Typography variant="h4" align='center' className={classes.cardTitle}>Upload your image</Typography>
            <Typography vaariant="p" align='center' className={classes.subHeading}>Files should Jpeg, Png...</Typography>
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()}/>
                <Box className={classes.uploadStyle}>
                    <img src={upImg} alt="" className={classes.imgStyle}></img>
                    <Typography variant="p" className={classes.subHeading2} onChange={changeFilePath}>Drag & Drop your image here</Typography>
                </Box>
                <Typography variant="p" align='center' className={classes.subHeading3}>Or</Typography>
                <Button variant="contained" color="primary" className={classes.buttonStyle} onClick={open}>
                    <Typography className={classes.buttonTypo}>Choose a file</Typography>
                </Button>
            </div>
        </CardContent>
    )
}


export default DropZone;



