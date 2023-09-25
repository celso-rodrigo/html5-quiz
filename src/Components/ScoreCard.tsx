import IUserScore from "../Interfaces/IUserScore"

interface IProps {
  scoreEntry: IUserScore
}

function ScoreCard({scoreEntry}: IProps) {
  return (
    <div>{scoreEntry.question}</div>
  )
}

export default ScoreCard