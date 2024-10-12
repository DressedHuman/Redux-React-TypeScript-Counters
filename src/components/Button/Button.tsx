type ButtonProps = {
    contentText: string,
    handler: () => void,
    danger?: boolean,
}

const Button = ({contentText, handler, danger=false}: ButtonProps) => {
    const style = danger ?
        "bg-orange-500 text-white px-3 py-2 rounded flex justify-center items-center" :
        "bg-green-700 text-white px-3 py-2 rounded flex justify-center items-center"
    
    return (
        <button className={style} onClick={handler}>
            {contentText}
        </button>
    );
};

export default Button;