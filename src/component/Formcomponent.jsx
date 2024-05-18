import React, { useState } from "react";

function Formcomponent() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    dob:"",
    gender:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", formData);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <fieldset class="form">
          <legend>Use personal Information</legend>

          <label htmlFor="fullname">Enter your full Name</label>
          <br />
          <input type="text" name="fullname" onChange={handleChange} class="shivani"/>
          <br />

          <label htmlFor="email">Enter your email</label>
          <br />
          <input type="email" name="email" onChange={handleChange} class="shivani1" />
          <br />

          <label htmlFor="password">Enter your password</label>
          <br />
          <input type="password" name="password" onChange={handleChange} class="password" />
          <br />

          <label htmlFor="passwordConfirm">Confirm your password</label>
          <br />
          <input type="password"name="passwordConfirm"onChange={handleChange} class="confirm"/>
          <br />

          <label>Enter your gender</label>
          <br />
          <input type="radio" value="Male" name="gender" id="male"onChange={handleChange} />
          <label htmlFor="male">Male</label>
          <input type="radio" value="Female" name="gender" id="female"onChange={handleChange} />
          <label htmlFor="female">Female</label>
          <input type="radio" value="Other" name="gender" id="other"onChange={handleChange} />
          <label htmlFor="other">Other</label>
          <br />

          <label htmlFor="dob">Date of birth:</label>
          <br />
          <input type="date" id="dob" name="dob"onChange={handleChange}class="dob" />
          <br />

          <label htmlFor="address">Enter your Address:</label>
          <br />
          <textarea name="address" onChange={handleChange} class="Address"></textarea>
          <br />

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Formcomponent;
