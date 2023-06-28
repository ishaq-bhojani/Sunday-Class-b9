function Button ({children, click}) {

    return <button onClick={click}>{children}</button>;
}

export default Button;