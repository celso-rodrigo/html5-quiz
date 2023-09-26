import DoneIcon from "../Icons/DoneIcon"
import XIcon from "../Icons/XIcon"
import IUserScore from "../Interfaces/IUserScore"
import colors from "../Styles/Colors"
import { Td } from "../Styles/TableStyles"

interface IProps {
  scoreEntry: IUserScore
}

function ScoreCard({scoreEntry}: IProps) {
  return (
    <tr>
      <Td>{scoreEntry.question}</Td>
      <Td>
        {scoreEntry.rightAnswered 
          ? (<DoneIcon fill={colors.green} />)
          : (<XIcon fill={colors.red}/>)
        }
      </Td>
    </tr>
  )
}

export default ScoreCard