'use client';
import { useRef, useState } from 'react';
import styles from './Form.module.scss';
const Form = () => {
  const [focusContainer, setFocusContainer] = useState(false);
  const [text, setText] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <form action="">
      <div
        className={`${styles.container} ${
          focusContainer ? styles.activeFocus : ''
        }`}
        tabIndex={0}
        onClick={() => (ref.current as HTMLTextAreaElement).focus()}
      >
        <textarea
          ref={ref}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setFocusContainer(true)}
          onBlur={() => setFocusContainer(false)}
          className={styles.textarea}
          name="message"
          aria-label="Напишите ваш вопрос"
          placeholder="Напишите ваш вопрос..."
        ></textarea>
        <button type="submit" className={styles.button}></button>
      </div>
    </form>
  );
};

export default Form;
