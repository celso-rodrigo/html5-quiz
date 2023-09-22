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
  const [questionNumber] = useState<number>(1)
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")

  // Return 5 unique questions
  function getQuestions():IQuestion[] {
    const uniqueQuestions: IQuestion[] = []
    const wantedQuestions = 5;

    while (uniqueQuestions.length < wantedQuestions) {
      const randomNumber = Math.floor(Math.random() * questionList.length)
      const chosenQuestion = questionList[randomNumber]
      
      // Check if the questions are unique
      if (!uniqueQuestions.includes(chosenQuestion)) {
        uniqueQuestions.push(chosenQuestion);
      }
    }

    return uniqueQuestions;
  }

  function handleSelectAnswer(answer: string): void {
    setSelectedAnswer(answer)
  }

  // Define initial questions
  useEffect(() => {
    const questions = getQuestions()
    setQuestions(questions)
  }, [])

  const optionOne = questions.length ? questions[questionNumber - 1].options[0] : ""
  const optionTwo = questions.length ? questions[questionNumber - 1].options[1] : ""
  const optionThree = questions.length ? questions[questionNumber - 1].options[2] : ""
  const correctAnswer = questions.length ? questions[questionNumber - 1].correctOption : ""

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
              selected={optionOne === selectedAnswer}
              answered={false}
              correctAnswer={optionOne === correctAnswer}
              option={optionOne}
              handleSelectAnswer={handleSelectAnswer}
            />
            <QuestionCard
              selected={optionTwo === selectedAnswer}
              answered={false}
              correctAnswer={optionTwo === correctAnswer}
              option={optionTwo}
              handleSelectAnswer={handleSelectAnswer}
            />
            <QuestionCard
              selected={optionThree === selectedAnswer}
              answered={false}
              correctAnswer={optionThree === correctAnswer}
              option={optionThree}
              handleSelectAnswer={handleSelectAnswer}
            />
          </QuestionsWrapper>
        </>
      )}


      <AnswerButton disabled={selectedAnswer.length === 0} />
    </Wrapper>
  )
}

export default App
