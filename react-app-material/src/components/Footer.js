import React from 'react';
import './Footer.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const MyFooter = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }));

    const classes = useStyles();
    
    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Johnathan Arroyo A &copy; 2019
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    );
}

export default MyFooter;