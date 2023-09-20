import QuestionCard from "./Components/QuestionCard"
import Wrapper from "./Styles/WrapperStyles"

function App() {

  return (
    <Wrapper>
      <QuestionCard selected answered={false} correctAnswer option="Hyper Transfer Markup Language" />
    </Wrapper>
  )
}

export default App
