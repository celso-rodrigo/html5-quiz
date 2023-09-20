import QuestionCard from "./Components/QuestionCard"
import {Bold, Title} from "./Styles/TextStyle"
import Wrapper, { HeaderWrapper, QuestionsWrapper } from "./Styles/WrapperStyles"

function App() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title><Bold>HTML</Bold>Quiz</Title>
        <Title><Bold>HTML</Bold>Quiz</Title>
      </HeaderWrapper>

      <QuestionsWrapper>
        <QuestionCard selected answered={false} correctAnswer option="Hyper Transfer Markup Language" />
        <QuestionCard selected answered={false} correctAnswer option="Hyper Transfer Markup Language" />
        <QuestionCard selected answered={false} correctAnswer option="Hyper Transfer Markup Language" />
      </QuestionsWrapper>
    </Wrapper>
  )
}

export default App
