import S from "./FeedbackForm.module.css";

export function FeedbackForm({ onChange, onSubmit }) {
    const onFieldChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        // console.log(name, event);
        // console.log(name, value);
        onChange?.(name, value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        const { target } = event;

        const formData = new FormData(target);
        const data = Object.fromEntries(formData);
        
        //console.log(data);
        onSabmit?.(data);
    };
      // const validateForm = (data) => {};
  return (
    <form className={S.container} onSubmit={onFormSubmit}>
      <div className={S.group}>
        <input 
        type="text" 
        placeholder="Your Name" 
        className={S.input} 
        name="username"
        onChange={onFieldChange}
        required
        />
      </div>
      <div className={S.group}>
        <input 
        type="email" 
        placeholder="Email" 
        className={S.input}
        name="email"
        onChange={onFieldChange}
        required
         />
      </div>
      <div className={S.group}>
        <textarea 
        placeholder="Your Message" 
        className={S.input} 
        name="message"
        onChange={onFieldChange}
        required
        />
      </div>
      <div className={S.group}>
        <label className={S.group}>
          <input type="checkbox" name="policy" required />
          I accept the data processing policy
        </label>
      </div>
      <div className={S.group}>
        <button>Send</button>
      </div>
    </form>
  );
}
