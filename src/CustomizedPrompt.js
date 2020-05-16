import React, { useState, useEffect } from 'react'
import modal from 'antd/lib/modal'
import { Prompt, useHistory } from 'react-router-dom'  

const CustomizedPrompt = ({ when }) => {
    const history = useHistory()

    const [ isShowPrompt, setIsShowPrompt ] = useState(when)
    
    useEffect(() => {
        setIsShowPrompt(when)
    }, [when])

    const [nextLocation, setNextLocation] = useState(null);
    // 每次render確認有沒有next location state。
    useEffect(() => {
        if (nextLocation !== null) {
            history.push(nextLocation);
        }
    }, [nextLocation]);
    
    const messageHandler = (nextLocationObj) => {
        modal.confirm({
            title: '確定要離開？',
            onOk: () => {
                setIsShowPrompt(false)
                setNextLocation(nextLocationObj);
            }
        })
        return false
    }

    return <Prompt message={messageHandler} when={isShowPrompt} />
}

export default CustomizedPrompt