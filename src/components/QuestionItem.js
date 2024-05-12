import React from "react";

function QuestionItem({question, onDelete}) {
  const {id, prompt, answers, correctIndex} = question;

  const options = answers // checks if answers array is defined before mapping over it
  ? answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  )) : null;

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        onDelete(id);
      } else {
        console.error('failed to delete question');
      }
    })
    .catch(error => {
      console.error('error deleting question:', error);
    });
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
