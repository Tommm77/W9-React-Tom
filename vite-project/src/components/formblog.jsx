import React, { useState } from 'react';
import '../styles/formblog.css';

function FormBlog({ input_name, setInputName}) {
  const [input_commentaire, setInputCommentaire] = useState('');
  const [input_email, setInputEmail] = useState('');

  const nameError = input_name.includes("_");
  const emailError = !input_email.includes("@");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !emailError) {
      alert(`${input_name} ${input_commentaire}`);
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input type="text" name='mon_nom' onChange={(e)=> setInputName(e.target.value)} />
      {nameError && <p className='error'>Votre nom ne doit pas contenir de _</p>}
      <input type="text" name="mon_commentaire" onChange={(e)=> setInputCommentaire(e.target.value)} />
      <input type="text" name="mon_email" onChange={(e)=> setInputEmail(e.target.value)} />
      {emailError && <p className='error'>Votre email doit contenir un '@'</p>}
      {!nameError && !emailError && <button type='submit'>Valider votre commentaire</button>}
    </form>
  )
}

export default FormBlog;