import React from 'react';

const FindTodos = ({ setFindText }) => {
  const input = React.createRef();
  const checkbox = React.createRef();

  const onClick = () => {
    setFindText(input.current.value, checkbox.current.checked);
  };

  const onCancel = () => {
    setFindText('');
  };

  return (
    <div className="inline col-5 p-0">
      <div>
        <input
          className="inputTodoText w-100"
          ref={input}
          placeholder="Введите искомый текст"
        />
        <div>
          <input
            type="checkbox"
            ref={checkbox}
          />
          <span>точное совпадение</span>
        </div>
      </div>
      <div className="inline m-1 mr-5">
        <input
          className="btn h-50"
          onClick={onClick}
          type="button"
          defaultValue="Найти"
        />
        <input
          className="btn h-50"
          onClick={onCancel}
          type="button"
          defaultValue="Отмена"
        />
      </div>
    </div>
  );
};

export default FindTodos;
