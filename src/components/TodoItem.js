const TodoItem = ({ id, content, isChecked, createdDate, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id)
  }
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <div className="todoItem">
      <div className="todoItem__box">
        <input type="checkbox" className="todoItem__checkbox" checked={isChecked} onChange={onChangeCheckbox} />
        <p>{content}</p>
      </div>
      <div className="todoItem__box">
        <span>{new Date(createdDate).toLocaleDateString()}</span>
        <button type="button" className="todoItem__button" onClick={onClickDelete}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem