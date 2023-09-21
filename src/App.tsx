import {useState} from "react"
import ProgressDisplay from "./Components/ProgressDisplay"
import QuestionCard from "./Components/QuestionCard"
import {Bold, Title} from "./Styles/TextStyle"
import Wrapper, { HeaderWrapper, QuestionsWrapper } from "./Styles/WrapperStyles"
import AnswerButton from "./Components/AnswerButton"

function App() {
  const [questionNumber] = useState(1);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title><Bold>HTML</Bold>Quiz</Title>
        <ProgressDisplay questionNumber={questionNumber} answered={false} correctAnswer />
      </HeaderWrapper>

      <Title>O que significa a sigla 'HTML'?</Title>

      <QuestionsWrapper>
        <QuestionCard selected answered={false} correctAnswer option="Hyper Transfer Markup Language" />
        <QuestionCard selected answered={false} correctAnswer option="Hyper Transfer Markup Language" />
        <QuestionCard selected answered={false} correctAnswer option="Hyper Transfer Markup Language" />
      </QuestionsWrapper>

      <AnswerButton disabled />
    </Wrapper>
  )
}

export default App
