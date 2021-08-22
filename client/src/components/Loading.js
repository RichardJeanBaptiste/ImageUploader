import { React } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400.36px',
        height: '143.57px',
        borderRadius: '12px',
    },
    headingStyle: {
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '27px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        letterSpacing: '-0.035em',
        position: 'absolute',
        top: '25%',
        left: '10%',
        color: '#4F4F4F',
    },
    progressBarStyle: {
        position: 'absolute',
        height: '8px',
        width: '80%',
        borderRadius: '12px',
        top: '60%',
        left: '10%',
    }
})



function Loading(){

    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <Typography variant="h3" align='left' className={classes.headingStyle}>Uploading...</Typography>
                <LinearProgress variant='indeterminate' className={classes.progressBarStyle}/>
            </Card>
        </>
    )
}


export default Loading;