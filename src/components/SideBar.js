const SideBar = (props) => {
    return (
        <div className={props.isOn?'side':'dark-box'}>
            <div>Dashboard</div><br/>
            <div>Widget</div><br/>
            <div>Reviews</div><br/>
            <div>Customers</div><br/>
            <div>Online Analysis</div><br/>
            <div>Settings</div><br/>
        </div>
    )
}
export default SideBar