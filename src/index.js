import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { books } from "./books";
import { Book } from "./Book";

function BookList() {
  // const someValue = 'shakeAndBake';
  // const displayValue = () => {
  //   console.log(someValue);
  // };

  return (
    <>
    <h1>
      Best Sellers
    </h1>
    <section className='booklist'>
      {books.map((book,index) => {
        return <Book {...book} key={book.id} number={index}/>;
      })}
    </section>
    </>
  ); 
}
  
//   const EventExamples =() =>{
//   //  const handleFormInput =(e) =>
//   //  {
//   //   console.log(e);
//   //   console.log(e.target.name);
//   //   console.log(e.target.value);
//   //  // console.log('input form button');
//   //  };
//   //  const handleButtonClick=()=>{
//   //   alert('Handle button click');
//   //  }
//   //  const handleFormSubmission =(e) =>
//   //  {
//   //   e.preventDefault();
//   //   console.log('form submitted');
//   //  }
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type='text'
//           name='example'
//           onChange={(e) => console.log(e.target.value)}
//           style={{ margin: '1rem 0' }}
//         />
//       </form>
//       <button onClick={() => console.log('you clicked me')}>click me</button>
//     </section>
//   );
// };
  

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)
