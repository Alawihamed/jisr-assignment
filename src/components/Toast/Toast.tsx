import Icon from "../../svg/icon.svg"
import Button from "../Button/Button"

type VerticalPosition = 'top' | 'center' | 'bottom';
type HorizontalPosition = 'right' | 'center' | 'left';

type ToastProps = {
    title: string;
    message: string;
    postion: Exclude<`${VerticalPosition}-${HorizontalPosition}`, 'center-center'>
    onConfirm: () => void;
    onCancel: () => void;
}

function Toast({ title, message, postion, onConfirm, onCancel }: ToastProps) {
    return (
        <div className={`toast toast-${postion}`}>
            <img src={Icon} className="App-logo" alt="logo" />
            <div className='content'>
                <h6 className='title'>{title}</h6>
                <p className='message'>
                    {message}
                </p>
                <div className='buttons'>
                    <Button variant="primary" onClick={onConfirm}>Button</Button>
                    <Button variant="outline" onClick={onCancel}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default Toast