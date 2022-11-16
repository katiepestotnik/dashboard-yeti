const Button = () => {
    const handleClick = (e) => {
        window.style.backgroundColor = 'red'
    }
    return (
        <button onClick={handleClick}>DARK MODE</button>
    )
}
export default Button