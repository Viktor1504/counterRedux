import React, {memo} from 'react';

type ButtonPropsType = {
    title: string
    btnClick: () => void
    disabled: boolean
}
export const Button: React.FC<ButtonPropsType> = memo((props) => {
    return <div>
        <button
            disabled={props.disabled}
            onClick={props.btnClick}>
            {props.title}
        </button>
    </div>
})