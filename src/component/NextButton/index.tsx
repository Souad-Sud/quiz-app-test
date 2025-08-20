import './nextButton.scss'
const NextButton = ({changeQuestion}) => {
    return(
        <div className="nextbtnContainer">
         <button className="nextbtnContainer__btn" onClick={changeQuestion} >next</button>
        </div>
    )
}
export default NextButton