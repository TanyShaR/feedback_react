import { useState } from "react";
import "./App.css";
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [form, setForm] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
      setForm(data);
      setShowModal(true);
  };
  return (
    <>
      <FeedbackForm onSubmit={onSubmit} />
      {form && (
      <Modal title="Thank you for writing!" show={showModal}>
        {form.username}, Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum nemo, eius sequi recusandae molestiae vitae dolorem rerum quo quae ex commodi, asperiores facilis nihil fuga dolor expedita explicabo quas! {form.email}
      </Modal>
      )}
    </>
  );
}

export default App;
