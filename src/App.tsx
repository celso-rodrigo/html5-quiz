import {useState} from "react"
import ProgressDisplay from "./Components/ProgressDisplay"
import QuestionCard from "./Components/QuestionCard"
import {Bold, Title, Question} from "./Styles/TextStyle"
import Wrapper, { HeaderWrapper, QuestionsWrapper } from "./Styles/WrapperStyles"
import AnswerButton from "./Components/AnswerButton"
import questionList from "./Helpers/questionList"
import IQuestion from "./Interfaces/IQuestion"
import {useEffect} from 'react'

function App() {
  const [questionNumber] = useState(1);
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  // Return 5 unique questions
  function getQuestions():IQuestion[] {
    const uniqueQuestions: IQuestion[] = [];
    const wantedQuestions = 5;

    while (uniqueQuestions.length < wantedQuestions) {
      const randomNumber = Math.floor(Math.random() * questionList.length);
      const chosenQuestion = questionList[randomNumber];
      
      // Check if the questions are unique
      if (!uniqueQuestions.includes(chosenQuestion)) {
        uniqueQuestions.push(chosenQuestion);
      }
    }

    return uniqueQuestions;
  }

  // Define initial questions
  useEffect(() => {
    const questions = getQuestions()
    setQuestions(questions)
  }, [])

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title><Bold>HTML</Bold>Quiz</Title>
        <ProgressDisplay questionNumber={questionNumber} answered={false} correctAnswer />
      </HeaderWrapper>

      {questions.length > 0 && (
        <>
          <Question>{questions[questionNumber - 1].question}</Question>

          <QuestionsWrapper>
            <QuestionCard
              selected={false}
              answered={false}
              correctAnswer={questions[questionNumber - 1].options[0] === questions[questionNumber - 1].correctOption}
              option={questions[questionNumber - 1].options[0]}
            />
            <QuestionCard
              selected={false}
              answered={false}
              correctAnswer={questions[questionNumber - 1].options[1] === questions[questionNumber - 1].correctOption}
              option={questions[questionNumber - 1].options[1]}
            />
            <QuestionCard
              selected={false}
              answered={false}
              correctAnswer={questions[questionNumber - 1].options[2] === questions[questionNumber - 1].correctOption}
              option={questions[questionNumber - 1].options[2]}
            />
          </QuestionsWrapper>
        </>
      )}


      <AnswerButton disabled />
    </Wrapper>
  )
}

export default App
