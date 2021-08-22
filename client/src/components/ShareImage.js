import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Box, Button} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import catImg from '../images/caat.jpg';


const useStyles = makeStyles({
    root: {
        position: 'absolute',
        width: '35%',
        height: '95%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
    },
    headingStyle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '27px',
        letterSpacing: '-0.035em',
        color: '#4F4F4F',
        top: '5%',
        marginTop: '18%',
    },
    imageStyle: {
        position: 'absolute',
        left: '12%',
        top: '26%',
        width: '80%',
        height: '50%',
    },
    linkStyle: {
        position: 'absolute',
        top: '86%',
        left: '12%',
        width: '80%',
        height: '8%',
        backgroundColor: '#F6F8FB',
        borderRadius: '8px',
        display: 'flex',
    },
    iconStyle: {
        position: 'absolute',
        top: '3%',
        left: '47%',
        color: '#219653',
        fontSize: '55px',
    },
    innerLinkGroup: {
        marginTop: '1%',
        marginLeft: '5%',
        width: '100%',
    },
    buttonStyle: {
        background: '#2F80ED',
        borderRadius: '8px',
        marginLeft: '48%',
        height: '40px',
        width: '100px'
    },
    innerButtonStyle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '11px',
        lineHeight: '12px',
        letterSpacing: '-0.035em',
        color: '#FFFFFF'
    },
    setLinkStyle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '11px',
        lineHeight: '12px',
        letterSpacing: '-0.035em',
        color: '#4F4F4F'
    }

})



function ShareImage() {

    const classes = useStyles();

    const [ imageLink, setImageLink ] = useState("abcdefghijklmno");

    return (

        <>
        <Card className={classes.root}>
            <CheckCircleIcon className={classes.iconStyle}/>
            <Typography variant="h3" align='center' className={classes.headingStyle}> Uploaded Successfully!</Typography>
            <img src={catImg} alt="cat image" className={classes.imageStyle}/>
            <Box className={classes.linkStyle}>
                <Box className={classes.innerLinkGroup}>
                    <Typography variant="a" align='center' className={classes.setLinkStyle}>{imageLink}</Typography>
                    <Button className={classes.buttonStyle}>
                        <Typography variant="p" align='center' className={classes.innerButtonStyle}>Copy Link</Typography>
                    </Button>
                </Box>
            </Box>
        </Card>
        </>

    )
    
}

export default ShareImage;