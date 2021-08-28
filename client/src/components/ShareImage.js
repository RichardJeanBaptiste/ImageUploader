import { React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Box, Button} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import catImg from '../images/caat.jpg';


const useStyles = makeStyles({
    root: {
        position: 'absolute',
        width: '35%',
        height: '99%',
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
        left: '7.5%',
        width: '87%',
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
        position: 'absolute',
        background: '#2F80ED',
        borderRadius: '8px',
        marginTop: '-10%',
        marginLeft: '65%',
        height: '41px',
        width: '115px',
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
        fontSize: '10px',
        lineHeight: '12px',
        letterSpacing: '-0.035em',
        color: '#4F4F4F',
    },
    innerBox: {
        width: '30%',
    }

})



function ShareImage(props) {

    const classes = useStyles();

    const [imgLink] = useState(props.imageLink);

    function copyLink(e) {
        navigator.clipboard.writeText(imgLink);
        alert("link copied")
    }

    return (

        <>
        <Card className={classes.root}>
            <CheckCircleIcon className={classes.iconStyle}/>
            <Typography variant="h3" align='center' className={classes.headingStyle}> Uploaded Successfully!</Typography>
            <img src={props.imageLink} alt={catImg} className={classes.imageStyle}/>
            <Box className={classes.linkStyle}>
                <Box className={classes.innerLinkGroup}>
                    <Typography variant="a" align='center' className={classes.setLinkStyle}>{props.imageLink}</Typography>
                    <Box className={classes.innerBox}>
                        <Button className={classes.buttonStyle} onClick={copyLink}>
                            <Typography variant="p" align='center' className={classes.innerButtonStyle}>Copy Link</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Card>
        </>

    )
    
}

export default ShareImage;