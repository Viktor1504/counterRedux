export type InitialStateType = {
    count: number
    startValue: number
    maxValue: number
    showSettings: boolean
}

const initialState: InitialStateType = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    showSettings: false
}

// type InitialStateType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    const {count, startValue, maxValue, showSettings} = state
    switch (action.type) {
        case 'ADD-COUNTER': {
            return (count < maxValue) ? {...state, count: state.count + 1} : {...state}
        }
        case 'RESET-COUNTER': {
            return (startValue < 0) ? {...state, count: 0} : {...state, count: startValue}
        }
        case 'CHANGE-START-INPUT': {
            return {...state, startValue: action.payload.value}
        }
        case 'CHANGE-MAX-INPUT': {
            return {...state, maxValue: action.payload.value}
        }
        case 'CHANGE-SHOW-SETTINGS': {

            return (startValue < 0) ? {...state, count: 0, showSettings: !showSettings} : {
                ...state,
                count: startValue,
                showSettings: !showSettings
            }
        }
        default:
            return state
    }
}

type ActionsTypes =
    ReturnType<typeof addCounterAC>
    | ReturnType<typeof resetCounterAC>
    | ReturnType<typeof changeStartInputAC>
    | ReturnType<typeof changeMaxInputAC>
    | ReturnType<typeof changeShowSettingsAC>

export const addCounterAC = () => {
    return {type: 'ADD-COUNTER'} as const
}

export const resetCounterAC = () => {
    return {type: 'RESET-COUNTER'} as const
}

export const changeStartInputAC = (value: number) => {
    return {type: 'CHANGE-START-INPUT', payload: {value}} as const
}

export const changeMaxInputAC = (value: number) => {
    return {type: 'CHANGE-MAX-INPUT', payload: {value}} as const
}

export const changeShowSettingsAC = () => {
    return {type: 'CHANGE-SHOW-SETTINGS'} as const
}

