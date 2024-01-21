import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from './button/Button';
import '../App.css';
import Input from './input/Input';
import s from './Counter.module.css'

export const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [showSettings, setShowSettings] = useState<boolean>(false)

    useEffect(() => {
        const savedStartValue = localStorage.getItem('startValue');
        const savedMaxValue = localStorage.getItem('maxValue');

        if (savedStartValue && savedMaxValue) {
            setStartValue(JSON.parse(savedStartValue));
            setMaxValue(JSON.parse(savedMaxValue));
            setCount(JSON.parse(savedStartValue))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [startValue, maxValue]);

    const onClickAddCounter = () => {
        setCount(count < maxValue ? count + 1 : count);
    }
    const onClickResetCounter = () => {
        setCount(startValue < 0 ? 0 : startValue);
    }
    const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const onClickSettingsHandler = () => {
        setShowSettings(!showSettings)
        setCount(startValue < 0 ? 0 : startValue)
    }

    const disableState = startValue >= maxValue || maxValue < 0 || startValue < 0


    return <div className={s.main}>
        <div className={s.mainDisplay}>
            {showSettings ? <>
                    <Input className={maxValue < 0 || startValue === maxValue ? s.inputMistake : ''}
                           title={'max value:'}
                           stateValue={maxValue}
                           onChange={onChangeMaxInputHandler}/>

                    <Input
                        className={startValue < 0 || startValue >= maxValue ? s.inputMistake : ''}
                        title={'start value:'}
                        stateValue={startValue}
                        onChange={onChangeStartInputHandler}/>
                </> :
                <span className={count === maxValue ? s.redSpan : ''}>{count}</span>
            }
        </div>
        <div className={s.buttons}>
            {showSettings ?
                <Button title={'set'} btnClick={onClickSettingsHandler} disabled={disableState}/>
                :
                <>
                    <Button title={'inc'} btnClick={onClickAddCounter} disabled={count === maxValue}/>
                    <Button title={'reset'} btnClick={onClickResetCounter} disabled={startValue === count}/>
                    <Button title={'set'} btnClick={onClickSettingsHandler} disabled={false}/>
                </>
            }
        </div>
    </div>
}