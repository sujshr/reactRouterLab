import { useState } from "react";
import "./RegistrationForm.css";
function RegistrationForm() {
  let initialField = {
    fname: "",
    lname: "",
    email: "",
    contact: "",
  };

  const [field, setField] = useState(initialField);

  const [error, setError] = useState({
    fnameError: "",
    lnameError: "",
    emailError: "",
    contactError: "",
  });

  const [validation, setValidation] = useState(false);

  const [submit, setSubmit] = useState(false);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setField((prevField) => ({
      ...prevField,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    let fname = field.fname.trim();
    let lname = field.lname.trim();
    let email = field.email.trim();
    let contact = field.contact.trim();

    if (fname && lname && email && !isNaN(contact)) {
      setValidation(true);
      setSubmit(true);
      setTimeout(() => {
        setField(initialField);
        setSubmit(false);
      }, 3000);
    } else {
      if (!fname) {
        errors.fnameError = "First Name is required";
      }

      if (!lname) {
        errors.lnameError = "Last Name is required";
      }

      if (!email) {
        errors.emailError = "Email is required";
      } else {
        let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!pattern.test(email)) {
          errors.emailError = "Enter a valid e-mail format";
        }
      }

      if (!contact) {
        errors.contactError = "contact is required";
      } else {
        let pattern = /^\d{10}$/;
        if (!pattern.test(contact)) {
          errors.contactError = "Enter a valid contact number";
        }
      }
    }
    setError(errors);
  };

  return (
    <div id="form">
      {submit && validation && <div id="success">Registration successfull</div>}
      <h2>Registration Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => {
            handleInput(e);
          }}
          value={field.fname}
        />
        <div className="error">{error.fnameError}</div>

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={(e) => {
            handleInput(e);
          }}
          value={field.lname}
        />
        <div className="error">{error.lnameError}</div>

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) => {
            handleInput(e);
          }}
          value={field.email}
        />
        <div className="error">{error.emailError}</div>

        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          onChange={(e) => {
            handleInput(e);
          }}
          value={field.contact}
        />
        <div className="error">{error.contactError}</div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
