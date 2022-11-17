const Visitors = ({isOn}) => {
    return (
        <div className={isOn?'visit':'visit-dark'}>
            <h3>Website Visitors</h3>
            <div className="num">15,074</div>
            <img src='https://peacockcreative.net/wp-content/uploads/2017/06/website-traffic-increase.jpg' alt='graph'></img>
        </div>
       
    )
    
}
   
export default Visitors