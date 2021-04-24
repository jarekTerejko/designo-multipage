import { useState } from "react";
import { ButtonPrimaryR } from "../ButtonPrimary/ButtonPrimaryElement";
import {
  ContactFormLabel,
  ContactFormRow,
  ContactFormTextInput,
  ContactFormWrapper,
  ContactFormErrorMsg,
  ContactFormTextarea,
} from "./ContactFormElements";

const ContactForm = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    msg: "",
  });
  const [isSubmited, setIsSubmited] = useState(false);
  // const [isModal, setIsModal] = useState(false);

  const clearInputs = () => {
    setInputValues({
      firstName: "",
      email: "",
      phoneNumber: "",
      msg: "",
    });
  };

  const handleSubmit = (e) => {
    setIsSubmited(true);
    if (
      !inputValues.firstName ||
      !inputValues.email ||
      !inputValues.phoneNumber ||
      !inputValues.msg ||
      !isMailValid(inputValues.email)
    ) {
      e.preventDefault();
    } else {
      e.preventDefault();
      setIsSubmited(false);
      clearInputs();
      // setIsModal(!isModal);
    }
  };

  const isMailValid = (email) => {
    return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
      email
    );
  };

  const handleInputChange = (e) => {
    if (isSubmited) {
      setIsSubmited(false);
    }
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ContactFormWrapper onSubmit={handleSubmit}>
        <ContactFormRow>
          <ContactFormLabel htmlFor="firstName">Name</ContactFormLabel>
          <ContactFormTextInput
            placeholder="Name"
            type="text"
            name="firstName"
            value={inputValues.firstName}
            onChange={(e) => handleInputChange(e)}
          />
          {isSubmited && !inputValues.firstName && (
            <ContactFormErrorMsg>This field can't be empty</ContactFormErrorMsg>
          )}
        </ContactFormRow>
        <ContactFormRow>
          <ContactFormLabel htmlFor="email">Email</ContactFormLabel>
          <ContactFormTextInput
            type="text"
            name="email"
            value={inputValues.email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
          {isSubmited && !inputValues.email && (
            <ContactFormErrorMsg>This field can't be empty</ContactFormErrorMsg>
          )}
          {isSubmited &&
            inputValues.email &&
            !isMailValid(inputValues.email) && (
              <ContactFormErrorMsg>
                Please use a valid email address
              </ContactFormErrorMsg>
            )}
        </ContactFormRow>
        <ContactFormRow>
          <ContactFormLabel htmlFor="phoneNumber">Name</ContactFormLabel>
          <ContactFormTextInput
            placeholder="Phone"
            type="tel"
            name="phoneNumber"
            value={inputValues.phoneNumber}
            onChange={(e) => handleInputChange(e)}
          />
          {isSubmited && !inputValues.phoneNumber && (
            <ContactFormErrorMsg>This field can't be empty</ContactFormErrorMsg>
          )}
        </ContactFormRow>
        <ContactFormRow>
          <ContactFormLabel htmlFor="msg">Wiadomość</ContactFormLabel>
          <ContactFormTextarea
            value={inputValues.msg}
            onChange={(e) => handleInputChange(e)}
            name="msg"
            placeholder="Your Message"
          ></ContactFormTextarea>
          {isSubmited && !inputValues.msg && (
            <ContactFormErrorMsg>This field can't be empty</ContactFormErrorMsg>
          )}
        </ContactFormRow>
        <ButtonPrimaryR submitBtn as="button" type="submit">
          Submit
        </ButtonPrimaryR>
      </ContactFormWrapper>
    </>
  );
};

export default ContactForm;
