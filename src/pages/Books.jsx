import React from "react";

const Books = () => {
  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookname = form.elements.bookname.value;
    const authorname = form.elements.authorname.value;
    const year = form.elements.year.value;
    const photo = form.elements.photo.value;
    const bookInfo = { bookname, authorname, year, photo };
    console.log(bookInfo);
    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("added");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      Books Form
      <div className=" w-1/2 mx-auto space-y-5">
        <form className="space-y-5" onSubmit={handleBook}>
          <label className="input input-bordered flex items-center gap-2">
            Book Name
            <input
              type="text"
              name="bookname"
              className="grow"
              placeholder="Daisy"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Author Name
            <input
              type="text"
              name="authorname"
              className="grow"
              placeholder="daisy@site.com"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Published Year
            <input
              type="text"
              name="year"
              className="grow"
              placeholder="Daisy"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Photo Url
            <input
              type="text"
              name="photo"
              className="grow"
              placeholder="daisy@site.com"
            />
          </label>
          <button className="btn btn-primary font-bold uppercase">
            <input type="submit" value="Add Book" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Books;
