import React from 'react'

const ButtonList = ({ todos, setList }) => {
  return (
    <div>
      {todos.map((todo, i) => {
        if (i % 10 == 0) {
          let val = i / 10 + 1
          return (
            <input
              className="nextButton"
              onClick={() => setList(val)}
              key={val}
              type="button"
              defaultValue={val}
            />
          )
        }
      })}
    </div>
  )
}

export default ButtonList
