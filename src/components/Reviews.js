const Reviews = (props) => {
    return(
    <div className={props.isOn?'review boxes':'review boxes-dark'}>
        <h3>Reviews</h3><br/>
        <div>1,281</div>
    </div>
    )
}
export default Reviews