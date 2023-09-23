import { useRef, useState } from "react"

const TodoEditor = ({ onCreate }) => {
  const [text, setText] = useState('');
  const inputRef = useRef()
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    if (!text) {
      inputRef.current.focus();
      return;
    }
    onCreate(text)
    setText('')
  }
  const onKeyChange = (e) => {
    if (e.keyCode === 13) {
      onSubmit()
    }
    console.dir(e)
  }
  
  return (
    <section className="todoEditor">
      <h2>새로운 todo 작성하기 ✏️</h2>
      <div className="todoEditor__box">
        <input
          type="text"
          value={text}
          ref={inputRef}
          placeholder="새로운 Todo..."
          onChange={onChangeText}
          onKeyDown={onKeyChange}
          className="todoEditor__input"
        />
        <button type="button" className="todoEditor__button" onClick={onSubmit}>
          추가
        </button>
      </div>
    </section>
  );
}

export default TodoEditor