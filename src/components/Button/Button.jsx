import "./Button.scss";

const Button = (props) => {
    console.log(props)
    console.log(props.buttonText)
    
    let buttonStyles = "button"
    if(props.isSecondary === true){
        buttonStyles += " button--secondary"
    }
    else {
        buttonStyles += " button--primary"
    }
  
    return <button className={buttonStyles}>{props.buttonText}</button>
}

export default Button 