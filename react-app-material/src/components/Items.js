import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from './Item';

const useStyles = makeStyles(theme => ({
    root:{
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Items = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List>
                <Item 
                    items={props.items} 
                    remove={props.removeFromList} 
                    edit={props.getItemToEdit}
                />
            </List>
        </div>
    );
}

export default Items;