const Rating = ({isOn}) => {
    return(
    <div className={isOn?'rating boxes':'rating boxes-dark'}>
        <h3>Average Rating</h3>
        <div>4.6</div>
    </div>
    )
}
export default Rating