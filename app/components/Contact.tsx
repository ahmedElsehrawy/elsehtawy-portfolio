import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";
// import emailjs from "emailjs-com";
// import { Button, IconButton } from "@material-ui/core";
// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// import CloseIcon from "@material-ui/icons/Close";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessStatus, setShowSuccessStatus] = useState(false);

  const sendMail = () => {
    // e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_3hoy62h",
    //     "template_949lpzd",
    //     e.target,
    //     "user_7QScxtplHbHBVPI4rrHHj"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // setTimeout(() => {
    //   setName("");
    //   setEmail("");
    //   setSubject("");
    //   setMessage("");
    // }, 2000);
  };

  //   const showSuccess = () => {
  //     setTimeout(() => {
  //       setShowSuccessStatus(true);
  //     }, 2000);
  //     setTimeout(() => {
  //       setShowSuccessStatus(false);
  //     }, 3000);
  //   };

  return (
    <Container>
      <form onSubmit={sendMail}>
        <div>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          id=""
          rows={8}
          name="message"
          placeholder="Write the message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <CustomButton title="send" style={{ margin: "8px" }} />
      </form>
    </Container>
  );
};

const Container = styled.div`
  background-color: #030200;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  position: relative;
  width: 100%;

  form {
    box-shadow: 1px 1px 15px rgba(11, 9, 148, 0.1);
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
  }

  input,
  textarea {
    padding: 16px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin: 8px;
  }

  form > div {
    display: flex;
    justify-content: space-between;
  }

  form > div > input {
    width: 50%;
  }
`;

export default Contact;
