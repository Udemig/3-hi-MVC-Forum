import React, { useState } from 'react'
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddPostController = () => {
  const model = new AddPostModel();
  const[form,setForm] = useState(model.state)
  const navigate = useNavigate()
  // DEĞİŞEN INPUTLARI ELE ALMA
  const onInputChange = (label, value) => {
    var newInputState = {...form};
    newInputState[label] = value;
    setForm(newInputState);
  };

  // FORM GÖNDERİRMİNİ ELE ALMA
  const handleSubmit =(e)=>{
    e.preventDefault();
    //form validate(doğrulama)
    if(!form.user || !form.title || !form.text){
      alert("Verileri doldurun")
    }else{
      axios.post('http://localhost:3030/posts',form)
      .then(()=> navigate("/"))
    }
  }

  return (
    <AddPostView 
    onInputChange={onInputChange} 
    handleSubmit={handleSubmit} />
  );
}

export default AddPostController