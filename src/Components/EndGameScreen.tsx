import IUserScore from "../Interfaces/IUserScore"
import Table from "../Styles/TableStyles"
import { Title } from "../Styles/TextStyle"
import { EndGameWrapper } from "../Styles/WrapperStyles"
import ReplayButton from "./ReplayButton"
import ScoreCard from "./ScoreCard"

interface IProps {
  userScore: IUserScore[]
  onClick: () => void,
}

function EndGameScreen({userScore, onClick}: IProps) {
  const BAD_FEEDBACK = "Não desista, continue tentando!"
  const MEDIUM_FEEDBACK = "Você foi bem, mas continue tentando para acertar todas!"
  const GOOD_FEEDBACK = "Muito bom, você acertou todas as questões!"

  function getFeedBack():string {
    const rightAnswersAmount = userScore.filter((scoreEntry) => scoreEntry.rightAnswered).length;
    if (rightAnswersAmount <= 2) return BAD_FEEDBACK
    if (rightAnswersAmount <= 4) return MEDIUM_FEEDBACK
    return GOOD_FEEDBACK
  }

  return (
    <EndGameWrapper>
      <Table>
        {userScore.map((scoreEntry: IUserScore, index: number) => (
          <ScoreCard scoreEntry={scoreEntry} key={index} />
        ))}
      </Table>
      <Title>{getFeedBack()}</Title>
      <ReplayButton onClick={onClick} />
    </EndGameWrapper>
  )
}

export default EndGameScreen