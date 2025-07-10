import S from "./FeedbackForm.module.css";

export function FeedbackForm(props) {
  return (
    <div className={S.container}>
      <div className={S.group}>
        <input type="text" placeholder="Your Name" className={S.input} />
      </div>
      <div className={S.group}>
        <input type="email" placeholder="Email" className={S.input} />
      </div>
      <div className={S.group}>
        <input placeholder="Your Message" className={S.input} />
      </div>
      <div className={S.group}>
        <label className={S.group}>
          <input type="checkbox" />I accept the data processing policy
        </label>
      </div>
    </div>
  );
}
