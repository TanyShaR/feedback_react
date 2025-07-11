import "./App.css";
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";
import { Modal } from "./components/Modal/Modal";

function App() {
  return (
    <>
      <FeedbackForm />
      <Modal title="Thank you for writing!" show>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum nemo, eius sequi recusandae molestiae vitae dolorem rerum quo quae ex commodi, asperiores facilis nihil fuga dolor expedita explicabo quas!
      </Modal>
    </>
  );
}

export default App;
