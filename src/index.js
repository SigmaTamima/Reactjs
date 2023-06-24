import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';
const books = [

    {
        title :'Iron Flame ',
        author: 'Rebecca Yarros',
        img : './images/1_.jpg',
         id: 1,
       },
       {
           title :'Atomic Habits',
           author :'James Clear ',
           img : './images/2.jpg',
           id : 2
        }
]



function BookList() {
    return (
      <section className='booklist'>
        <EventExamples/>
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    );
  };

  const EventExamples =() =>{
   const handleFormInput =(e) =>
   {
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
   // console.log('input form button');
   };
   const handleButtonClick=()=>{
    alert('Handle button click');
   }
   const handleFormSubmission =(e) =>
   {
    e.preventDefault();
    console.log('form submitted');
   }
     return <section>
      <form onSubmit={handleFormSubmission}> 
        <h2>
          Typical Form
        </h2>
        <input 
        type="text"
         name="example"
          onChange={handleFormInput}
           style={{margin: '1rem'}}/>
           
        <button onClick={handleButtonClick}>Click me</button>
        <div><button onClick={handleFormSubmission}>Click me</button></div> 
      </form>
    </section>
  };
  
  const Book = (props) => {
    const { img, title, author } = props;
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author} </h4>
      </article>
    );
  };
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)
