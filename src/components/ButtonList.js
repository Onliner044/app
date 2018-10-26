import React from 'react';

const ButtonList = ({ todos, setList }) => (
  <div className="offset-4 col-4">
    {/*todos.map((todo, i) => {
      if (i % 10 == 0) {
        const val = i / 10 + 1;
        return (
          <input
            className="nextButton btn btn-light"
            onClick={() => setList(val)}
            key={val}
            type="button"
            defaultValue={val}
            />
        );
      }
    }) */}
  </div>
);

export default ButtonList;
