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
  return <section className='booklist'>
    {books.map((book)=>{
        const {img, title, author, id} =book
         return <Book img= {img} title= {title} author={author} key={id}/>   
    })}
  </section>;
}

const Book = (props)=>
{  const {img, title,author, children} = props;
    return ( 
        <article className=" book">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h4 > {author} </h4>
            {children}
          
        </article>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)
