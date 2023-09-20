import QuestionCard from "./Components/QuestionCard"
import Wrapper, { QuestionsWrapper } from "./Styles/WrapperStyles"

function App() {
  return (
    <Wrapper>
      <QuestionsWrapper>
        <QuestionCard selected answered={false} correctAnswer option="Hyper Transfer Markup Language" />
        <QuestionCard selected answered={false} correctAnswer option="Hyper Transfer Markup Language" />
        <QuestionCard selected answered={false} correctAnswer option="Hyper Transfer Markup Language" />
      </QuestionsWrapper>
    </Wrapper>
  )
}

export default App
