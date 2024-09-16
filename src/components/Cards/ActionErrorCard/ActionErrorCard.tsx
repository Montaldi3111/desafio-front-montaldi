import { FaRegCircleXmark } from "react-icons/fa6"
import "./actionErrorCard.css"
const ActionErrorCard = ({title, subtitle}) => {
  return (
    <>
    <div id="title-card">
        <FaRegCircleXmark />
        <h3 className='font-bold text-white text-xl'>{title}</h3>
    </div>
    <div id="subtitle-card">
        <p className="text-white font-thin">{subtitle}</p>
    </div>
    </>
  )
}

export default ActionErrorCard