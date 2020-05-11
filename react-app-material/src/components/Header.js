import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import CodeIcon from '@material-ui/icons/Code';
import ProfileIcon from '@material-ui/icons/Face';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

const MyHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (nav) => {
        setAnchorEl(null);
        window.location.href = nav;
    };
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                ReactApp
            </Typography>
            <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu"
                onClick={handleClick}
                >
                <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {handleClose("/")}} >
                    <Typography variant="inherit">Material Design:</Typography>
                </MenuItem>

                <MenuItem onClick={() => {handleClose("/")}} >
                    <ListItemIcon>
                        <CodeIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Mackup  + API</Typography>
                </MenuItem>
                <Divider></Divider>
                <MenuItem onClick={() => {handleClose("/json")}}  >
                    <ListItemIcon>
                        <CodeIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Mackup + JSON</Typography>
                </MenuItem>
                <Divider></Divider>
                <MenuItem onClick={() => {handleClose("/about")}} >
                    <ListItemIcon><ProfileIcon fontSize="small" /></ListItemIcon>
                    <Typography variant="inherit">About me</Typography>                    
                </MenuItem>
            </Menu>
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default MyHeader;