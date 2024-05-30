import Icon from "../../svg/icon.svg"
import Button from "../Button/Button"

type VerticalPosition = 'top' | 'center' | 'bottom';
type HorizontalPosition = 'right' | 'center' | 'left';

type ToastProps = {
    open: boolean;
    title: string;
    message: string;
    postion: Exclude<`${VerticalPosition}-${HorizontalPosition}`, 'center-center'>
    onConfirm: () => void;
    onCancel: () => void;
}

function Toast({ open, title, message, postion, onConfirm, onCancel }: ToastProps) {
    return (
        open ? (
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
        ) :
            null
    )
}

export default Toast