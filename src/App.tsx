import {useState} from "react"
import ProgressDisplay from "./Components/ProgressDisplay"
import QuestionCard from "./Components/QuestionCard"
import {Bold, Title, Question} from "./Styles/TextStyle"
import Wrapper, { HeaderWrapper, QuestionsWrapper } from "./Styles/WrapperStyles"
import AnswerButton from "./Components/AnswerButton"
import questionList from "./Helpers/questionList"
import IQuestion from "./Interfaces/IQuestion"
import gamePhase from "./Enums/gamePhase"
import {useEffect, MouseEvent} from 'react'
import EndGameScreen from "./Components/EndGameScreen"

function App() {
  const [currentGamePhase, setCurrentGamePhase] = useState<gamePhase>(gamePhase.loading)
  const [questionNumber, setQuestionNumber] = useState<number>(1)
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const WANTED_QUESTIONS = 5;

  // Return 5 unique questions
  function getQuestions():IQuestion[] {
    const uniqueQuestions: IQuestion[] = []

    while (uniqueQuestions.length < WANTED_QUESTIONS) {
      const randomNumber = Math.floor(Math.random() * questionList.length)
      const chosenQuestion = questionList[randomNumber]
      
      // Check if the questions are unique
      if (!uniqueQuestions.includes(chosenQuestion)) {
        uniqueQuestions.push(chosenQuestion);
      }
    }

    return uniqueQuestions;
  }

  function handleSelectAnswer(event: MouseEvent<HTMLButtonElement>): void {
    const answer = event.currentTarget.value
    setSelectedAnswer(answer)
  }

  function goToNextQuestion() {
    setSelectedAnswer("")
    if (questionNumber < 5) {
      setQuestionNumber((prev) => prev + 1)
    } else {
      setQuestionNumber(1)
      setCurrentGamePhase(gamePhase.endGame)
    }
  }

  // Define initial questions and start the game
  useEffect(() => {
    const questions = getQuestions()
    setQuestions(questions)
    setCurrentGamePhase(gamePhase.inGame)
  }, [])

  const optionOne = questions.length == WANTED_QUESTIONS? questions[questionNumber - 1].options[0] : ""
  const optionTwo = questions.length == WANTED_QUESTIONS? questions[questionNumber - 1].options[1] : ""
  const optionThree = questions.length == WANTED_QUESTIONS? questions[questionNumber - 1].options[2] : ""
  const correctAnswer = questions.length == WANTED_QUESTIONS? questions[questionNumber - 1].correctOption : ""

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title><Bold>HTML</Bold>Quiz</Title>
        {currentGamePhase !== gamePhase.endGame && (
          <ProgressDisplay questionNumber={questionNumber} answered={false} correctAnswer />
        )}
      </HeaderWrapper>

      {/* Show up after questions are loaded */}
      {currentGamePhase === gamePhase.inGame && (
        <>
          <Question>{questions[questionNumber - 1].question}</Question>

          <QuestionsWrapper>
            <QuestionCard
              selected={optionOne === selectedAnswer}
              answered={false}
              correctAnswer={optionOne === correctAnswer}
              option={optionOne}
              onClick={handleSelectAnswer}
            />
            <QuestionCard
              selected={optionTwo === selectedAnswer}
              answered={false}
              correctAnswer={optionTwo === correctAnswer}
              option={optionTwo}
              onClick={handleSelectAnswer}
            />
            <QuestionCard
              selected={optionThree === selectedAnswer}
              answered={false}
              correctAnswer={optionThree === correctAnswer}
              option={optionThree}
              onClick={handleSelectAnswer}
            />
          </QuestionsWrapper>

          <AnswerButton 
            disabled={selectedAnswer.length === 0}
            onClick={goToNextQuestion}
          />
        </>
      )}

      {/* Show up when game is finished */}
      {currentGamePhase === gamePhase.endGame && (
        <EndGameScreen />
      )}

    </Wrapper>
  )
}

export default App
