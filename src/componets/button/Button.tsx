import React from 'react';

type ButtonPropsType = {
    title: string
    btnClick: () => void
    disabled: boolean
}
export const Button: React.FC<ButtonPropsType> = (props) => {
    return <div>
        <button
            disabled={props.disabled}
            onClick={props.btnClick}>
            {props.title}
        </button>
    </div>
}