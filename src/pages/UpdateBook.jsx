import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UpdateBook = () => {
     const book=useLoaderData();
     const { authorname, bookname, year, photo,_id } = book;
     const handleUpdateBook=(e)=>{
           e.preventDefault();

           const form = e.target;
           const bookname = form.elements.bookname.value;
           const authorname = form.elements.authorname.value;
           const year = form.elements.year.value;
           const photo = form.elements.photo.value;
           const bookUpdateInfo = { bookname, authorname, year, photo };
           console.log(bookUpdateInfo);
           fetch(`http://localhost:5000/books/${_id}`,{
               method:"PUT",
               headers:{
                    "content-type":"application/json"
               },
               body:JSON.stringify(bookUpdateInfo)
           })
           .then(res=>res.json())
           .then(data=>{
               console.log(data)
           })
           .catch(err=>console.error(err))
     }
 return (
   <div>
     UpdateBook
     <div className=" w-1/2 mx-auto space-y-5">
       <form className="space-y-5" onSubmit={handleUpdateBook}>
         <label className="input input-bordered flex items-center gap-2">
           Book Name
           <input
             type="text"
             name="bookname"
             className="grow"
             placeholder="Daisy"
             defaultValue={bookname}
           />
         </label>
         <label className="input input-bordered flex items-center gap-2">
           Author Name
           <input
             type="text"
             name="authorname"
             className="grow"
             placeholder="daisy@site.com"
             defaultValue={authorname}
           />
         </label>
         <label className="input input-bordered flex items-center gap-2">
           Published Year
           <input
             type="text"
             name="year"
             className="grow"
             placeholder="Daisy"
             defaultValue={year}
           />
         </label>
         <label className="input input-bordered flex items-center gap-2">
           Photo Url
           <input
             type="text"
             name="photo"
             className="grow"
             placeholder="daisy@site.com"
             defaultValue={photo}
           />
         </label>
         <button className="btn btn-primary font-bold uppercase">
           <input type="submit" value="Update Book" />
         </button>
       </form>
     </div>
   </div>
 );
}

export default UpdateBook