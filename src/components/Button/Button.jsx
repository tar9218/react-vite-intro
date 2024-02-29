import classes from './Button.module.css'

function Button({children, buttonClicked, isActive, ...props}) {
    return (
        <button
            {...props}
            className={isActive ? `${classes.button} ${classes.active}` : classes.button}
            onClick={buttonClicked}
        >
            {children}
        </button>
    )
}

export default Button;
