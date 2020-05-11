import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


function getModalStyle() {
    const top = 10;
    const left = 10;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `tramslate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles (theme => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 200,
        },
    },
    Fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    paper: {
        position: "absolute",
        width: '80%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
    formStyle: {
        width: '100%'
    }
}));

const SimpleModal = (props) => {
    const classes = useStyles();
    const modalStyle = getModalStyle();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if(props.isEditing){
            setName(props.itemToEdit.name);
            setDescription(props.itemToEdit.description);
        } else {
            setName('');
            setDescription('');
        }
    }, [props.isEditing, props.itemToEdit]);

    const save = () =>{
        setErrors({});
        if(name.length < 4){
            setErrors({message: 'Name must be at least 4 characters.'});
        } else if(description.length < 10){
            setErrors({message: 'Description must be at least 10 characters.'});
        } else {
            const newItem = {
                name,
                description
            }
            
            if(!props.isEditing){
                props.addToList(newItem);
            }else{
               newItem.id = props.itemToEdit.id;
               props.editFromList(newItem);
            } 

            setName('');
            setDescription('');
            props.handleClose();       
        }
        // console.log('newItem:', newItem);
    }

    return (
        <div>
            <Modal
            open={props.open}
            onClose={props.handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className="alert-message">{errors && errors.message}</div>
                    <form className={classes.formStyle} noValidate autoComplete="off">
                        <TextField 
                            id="name"
                            label="Name *"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            style={{margin: 5}} 
                            fullWidth
                            helperText="Name must be at least 4 characters"
                            size="small"
                            aria-describedby="component-error-text"
                        />

                        <TextField
                            id="description"
                            label="Description *"
                            style={{margin: 5}} 
                            multiline
                            fullWidth
                            rows="8"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            helperText="Description must be at least 10 characters."
                            size="small"
                        />
                    </form>
                    <Button 
                        onClick={() => props.handleClose()} 
                        variant="contained" 
                        color="secondary">
                        Cancel
                    </Button>
                    <Button 
                        onClick={() => save()} 
                        variant="contained" 
                        color="primary">
                        Save
                    </Button>
                </div>
            </Modal>
            
            <div className="fabContainer">
                <Fab 
                    onClick={() => props.handleOpen()}
                    color="primary"
                    aria-label="add">
                        <AddIcon />
                </Fab>
            </div>
        </div>

    ) 
}

export default SimpleModal;