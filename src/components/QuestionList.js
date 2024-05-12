import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(questions => setQuestions(questions))
  }, []);

  function handleQuestionDeleted(deletedQuestionId) {
    setQuestions(questions.filter(question => question.id !== deletedQuestionId));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
          {questions.map(question => (
            <QuestionItem key={question.id} question={question} onDelete={handleQuestionDeleted}/>
          ))}
      </ul>
    </section>
  );
}

export default QuestionList;
