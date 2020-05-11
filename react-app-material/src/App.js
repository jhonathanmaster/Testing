import React, {useState, useEffect} from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import Items from './components/Items';
import SimpleModal from './components/SimpleModal';

import { notesDataApi } from './data/notes-data-api';
import { v4 as uuidv4 } from 'uuid';

function App() {
  //const [itemsArray, setItemsArray] = useState(DummyData);
  const [itemsArray, setItemsArray] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({});

  //compoentDisMount()
  useEffect(()=>{
    notesDataApi.getTasks(1)
    .then((res) => res.json())
    .then(
      (items) => {
        const allItems = items.map((item) => ({ 
            id: item.id, 
            name: item.title, 
            description: item.body
        }));
        //console.log(allItems);
        setItemsArray(allItems);
      }
    );
  }, []);

  const removeFromItems = (id) => {
    const tmpList = [...itemsArray];
    
    const itemIdex =  itemsArray.findIndex((item) => (item.id === id));
    
    //The next code is to delete into API
    notesDataApi.deleteTask(id)
      .then(res => res.json())
      .then(
        () => {
          tmpList.splice(itemIdex, 1);
          setItemsArray(tmpList);
        }
      );
  };

  const addToList = (item) => {
    const tmpList = [...itemsArray];
    //const newIndex = itemsArray.length + 5;
    item.id = uuidv4();

    //The next code is to save into API 
    notesDataApi.createTask(item)
      .then(res => res.json())
      .then(
        () => {
          tmpList.push(item);
          setItemsArray(tmpList);
        }
      );

  };

  const editFromList = (item) =>{
    const tmpList = [...itemsArray];
    const itemIdex =  itemsArray.findIndex((elem) => (elem.id === item.id));
    
    //The next code is to edit into API 
    notesDataApi.putTask(item)
      .then(res => res.json())
      .then(
        () => {
          tmpList[itemIdex] = {...item}
          setItemsArray(tmpList);
          setItemToEdit({});
          setIsEditing(false);
        }
      );

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
        
        <h1>Usign API Conection Jsonplaceholder and Material Design</h1>
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
      <MyFooter />
    </React.Fragment>
  );
}

export default App;
