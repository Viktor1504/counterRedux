import React, {ChangeEvent} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {
    addCounterAC,
    changeMaxInputAC,
    changeShowSettingsAC,
    changeStartInputAC,
    InitialStateType,
    resetCounterAC
} from './state/counterReducer';
import Input from './componets/input/Input';
import {Button} from './componets/button/Button';

function App() {

    const counter = useSelector<AppRootStateType, InitialStateType>(state => state.counter)

    const dispatch = useDispatch()

    const onClickAddCounter = () => dispatch(addCounterAC())


    const onClickResetCounter = () => dispatch(resetCounterAC())

    const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartInputAC(+e.currentTarget.value))
    }

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxInputAC(+e.currentTarget.value))
    }

    const onClickSettingsHandler = () => {
        dispatch(changeShowSettingsAC())
    }

    const disableState = counter.startValue >= counter.maxValue || counter.maxValue < 0 || counter.startValue < 0


    return <div className={'App'}>
        <div className={'main'}>
            <div className={'mainDisplay'}>
                {counter.showSettings ? <>
                        <Input
                            className={counter.maxValue < 0 || counter.startValue === counter.maxValue ? 'inputMistake' : ''}
                            title={'max value:'}
                            stateValue={counter.maxValue}
                            onChange={onChangeMaxInputHandler}/>

                        <Input
                            className={counter.startValue < 0 || counter.startValue >= counter.maxValue ? 'inputMistake' : ''}
                            title={'start value:'}
                            stateValue={counter.startValue}
                            onChange={onChangeStartInputHandler}/>
                    </> :
                    <span className={counter.count === counter.maxValue ? 'redSpan' : ''}>{counter.count}</span>
                }
            </div>
            <div className={'buttons'}>
                {counter.showSettings ?
                    <Button title={'set'} btnClick={onClickSettingsHandler} disabled={disableState}/>
                    :
                    <>
                        <Button title={'inc'} btnClick={onClickAddCounter}
                                disabled={counter.count === counter.maxValue}/>
                        <Button title={'reset'} btnClick={onClickResetCounter}
                                disabled={counter.startValue === counter.count}/>
                        <Button title={'set'} btnClick={onClickSettingsHandler} disabled={false}/>
                    </>
                }
            </div>
        </div>
    </div>
}

export default App;
