import React, {ChangeEvent, memo} from 'react';
import s from './Input.module.css'

type InputPropsType = {
    title: string
    stateValue: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}

const Input: React.FC<InputPropsType> = memo((props) => {

    return <div className={s.div}>
        <label className={s.label}>{props.title}</label>
        <input className={props.className + ' ' + s.input}
               name="value"
               type="number"
               value={props.stateValue}
               onChange={props.onChange}/>
    </div>
})

export default Input;