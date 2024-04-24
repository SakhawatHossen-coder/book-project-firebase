import React from "react";

export const Signup = () => {
  return (
    <div>
      Signup
      <div className=" w-1/2 mx-auto space-y-5">
        <form className="space-y-5" onSubmit={handleSignup}>
          <label className="input input-bordered flex items-center gap-2">
            UserName
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Daisy"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Daisy"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Password
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="password"
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
            <input type="submit" value="Sign Up" />
          </button>
        </form>
      </div>
    </div>
  );
};
