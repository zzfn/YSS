import React, {useEffect, useState} from 'react';
import './App.css';
import {CI_MU_TONG_ZI, YAO_DAO_JI,HUI_BI_SHOU} from "./Hero";
import {calculateHealth} from './util';

function App() {
    const [user, setUser] = useState(CI_MU_TONG_ZI)
    const [boss, setBoss] = useState(YAO_DAO_JI)
    const [time, setTime] = useState(0)
    useEffect(() => {
        console.log(`第${time}回合`)
        setUser({...user, health: calculateHealth(user.health, boss.attack, user.armor)})
        setBoss({...boss, health: calculateHealth(boss.health, user.attack, boss.armor)})
        if (user.health <= 0 || boss.health <= 0) {
            console.log(`游戏结束`)
        }
    }, [time])
    return (
        <div className="App">
            <button onClick={() => {
                setTime(time + 1)
            }}>下一轮
            </button>
            <button>boss{JSON.stringify(boss)}</button>
            <button>boss{JSON.stringify(user)}</button>
            {/*<Card val={user.health}/>*/}
        </div>
    );
}

export default App;
