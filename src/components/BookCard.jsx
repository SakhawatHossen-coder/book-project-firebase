import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";

const BookCard = ({ book, books, setBooks }) => {
  const { authorname, bookname, year, photo, _id } = book;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("deleted");
        fetch(`http://localhost:5000/books/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = books.filter((b) => b._id !== _id);
              setBooks(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt={bookname} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">BookName: {bookname}</h2>
          <h2 className="card-title">AuthorName: {authorname}</h2>
          <p>Published Date: {year}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View</button>
            <Link to={`/book/${_id}`}>
              <button className="btn btn-accent">Edit</button>
            </Link>
            <button className="btn btn-error" onClick={() => handleDelete(_id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
