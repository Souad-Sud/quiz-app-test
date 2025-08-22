import './nextButton.scss'

type mycomponentProps = {
    changeQuestion: () => void;
}
const NextButton: React.FC<mycomponentProps> = ({changeQuestion}) => {
    return(
        <div className="nextbtnContainer">
         <button className="nextbtnContainer__btn" onClick={changeQuestion} >next</button>
        </div>
    )
}
export default NextButton