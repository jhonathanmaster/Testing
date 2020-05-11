import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';

const Item = (props) => {
    const itemsArray = props.items;
    return (
        itemsArray.map((item)=>{
            return (
                <ListItem key={item.id}>
                    <ListItemText
                        id={item.id}
                        primary={item.name} 
                        secondary={item.description}
                    />
                    <Divider light />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={() => props.edit(item.id)} aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton edge="end" onClick={() => props.remove(item.id)} aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            );
        })
    );
};

export default Item;