const Analysis = ({isOn}) => {
    return (
        <div className={isOn?'analysis boxes':'analysis boxes-dark'}>
            <h3>Sentiment Analysis</h3>
            <div>960</div>
            <div>122</div>
            <div>321</div>
        </div>
    )
}
export default Analysis