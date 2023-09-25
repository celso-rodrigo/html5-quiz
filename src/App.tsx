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
import IUserScore from "./Interfaces/IUserScore"

function App() {
  const [currentGamePhase, setCurrentGamePhase] = useState<gamePhase>(gamePhase.loading)
  const [questionAnswered,setQuestionAnswered] = useState<boolean>(false)
  const [questionNumber, setQuestionNumber] = useState<number>(1)
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [userScore, setUserScore] = useState<IUserScore[]>([])
  
  const WANTED_QUESTIONS = 5;
  const SHOW_QUESTIONS = currentGamePhase === gamePhase.answering || currentGamePhase === gamePhase.showingAnswers
  // Only assign values after question are loaded
  const CURR_QUESTION = questions.length == WANTED_QUESTIONS? questions[questionNumber - 1].question : ""
  const OPTION_ONE = questions.length == WANTED_QUESTIONS? questions[questionNumber - 1].options[0] : ""
  const OPTION_TWO = questions.length == WANTED_QUESTIONS? questions[questionNumber - 1].options[1] : ""
  const OPTION_THREE = questions.length == WANTED_QUESTIONS? questions[questionNumber - 1].options[2] : ""
  const CORRECT_ANSWER = questions.length == WANTED_QUESTIONS? questions[questionNumber - 1].correctOption : ""

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

  // Used to reset game flow after answering
  function setGameStateAnswering() {
    setSelectedAnswer("")
    setQuestionAnswered(false)
    setCurrentGamePhase(gamePhase.answering)
  }

  // Used to prepare the game to display question results
  function setGameStateShowingAnswers() {
    setQuestionAnswered(true)
    setCurrentGamePhase(gamePhase.showingAnswers) 
  }

  // Save user answer on the state
  function handleSelectAnswer(event: MouseEvent<HTMLButtonElement>): void {
    const answer = event.currentTarget.value
    setSelectedAnswer(answer)
  }

  function goToNextQuestion() {
    setGameStateAnswering()
    if (questionNumber < 5) {
      setQuestionNumber((prev) => prev + 1)
    } else {
      setQuestionNumber(1)
      setCurrentGamePhase(gamePhase.endGame)
    }
  }


  function showAnswers() {
    setUserScore((prev) => (
      [
        ...prev,
        {
          question: CURR_QUESTION,
          rightAnswered: CORRECT_ANSWER === selectedAnswer
        }]))
    setGameStateShowingAnswers()
  }

  // Define initial questions and start the game
  useEffect(() => {
    const questions = getQuestions()
    setQuestions(questions)
    setCurrentGamePhase(gamePhase.answering)
  }, [])

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title><Bold>HTML</Bold>Quiz</Title>
        {currentGamePhase !== gamePhase.endGame && (
          <ProgressDisplay questionNumber={questionNumber} answered={false} correctAnswer />
        )}
      </HeaderWrapper>

      {/* Show up after questions are loaded */}
      {SHOW_QUESTIONS && (
        <>
          <Question>{CURR_QUESTION}</Question>

          <QuestionsWrapper>
            <QuestionCard
              selected={OPTION_ONE === selectedAnswer}
              answered={questionAnswered}
              correctAnswer={OPTION_ONE === CORRECT_ANSWER}
              option={OPTION_ONE}
              onClick={handleSelectAnswer}
            />
            <QuestionCard
              selected={OPTION_TWO === selectedAnswer}
              answered={questionAnswered}
              correctAnswer={OPTION_TWO === CORRECT_ANSWER}
              option={OPTION_TWO}
              onClick={handleSelectAnswer}
            />
            <QuestionCard
              selected={OPTION_THREE === selectedAnswer}
              answered={questionAnswered}
              correctAnswer={OPTION_THREE === CORRECT_ANSWER}
              option={OPTION_THREE}
              onClick={handleSelectAnswer}
            />
          </QuestionsWrapper>

          <AnswerButton 
            disabled={selectedAnswer.length === 0}
            currentGamePhase={currentGamePhase}
            onClick={questionAnswered ? goToNextQuestion : showAnswers}
          />
        </>
      )}

      {/* Show up when game is finished */}
      {currentGamePhase === gamePhase.endGame && (
        <EndGameScreen userScore={userScore} />
      )}

    </Wrapper>
  )
}

export default App
