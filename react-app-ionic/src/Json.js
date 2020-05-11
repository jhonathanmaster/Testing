import React, {useState} from 'react';
import './Json.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import Items from './components/Items';
import SimpleModal from './components/SimpleModal';

import { DummyData } from './data/dummy-data';
import { v4 as uuidv4 } from 'uuid';


function Json() {
  const [itemsArray, setItemsArray] = useState(DummyData);
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({});

  const removeFromItems = (id) => {
    const tmpList = [...itemsArray];
    
    const itemIdex =  itemsArray.findIndex((item) => (item.id === id));
    
    //The next line is to delete into json file dummy-data.js
    tmpList.splice(itemIdex, 1);
    setItemsArray(tmpList);

  };

  const addToList = (item) => {
    const tmpList = [...itemsArray];
    //const newIndex = itemsArray.length + 5;
    item.id = uuidv4();
    
    //The next line is to save into json file dummy-data.js
    tmpList.push(item);
    setItemsArray(tmpList);

  };

  const editFromList = (item) =>{
    const tmpList = [...itemsArray];
    const itemIdex =  itemsArray.findIndex((elem) => (elem.id === item.id));
    
    //The next line is to edit into json file dummy-data.js
    tmpList[itemIdex] = {...item}
    setItemsArray(tmpList);
    setItemToEdit({});
    setIsEditing(false);

  };

  const getItemToEdit = (id) => {
    const itemIdex =  itemsArray.findIndex((elem) => (elem.id === id));
    const tmpItem = {...itemsArray[itemIdex]};

    setItemToEdit(tmpItem);
    setIsEditing(true);

    handleOpen();
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  
  return (
    <React.Fragment>
      <CssBaseline />
      <MyHeader />
      <Container>
        <h1>Using JSON Conection and Material Design</h1>
        <Items 
          items={itemsArray} 
          removeFromList={removeFromItems}
          getItemToEdit={getItemToEdit}
          />
      </Container>
      <SimpleModal 
        addToList={addToList}
        open={openModal} 
        isEditing={isEditing}
        itemToEdit={itemToEdit}
        handleClose={handleClose} 
        editFromList={editFromList}
        handleOpen={handleOpen}
        />
      <MyFooter handleOpen={handleOpen} />
    </React.Fragment>
  );
}

export default Json;
