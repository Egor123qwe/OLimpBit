import React, { useState } from 'react'
import s from './Content.module.css'

function Content(props) {

    let [win, Setwin] = useState(0);

    let copy = [...props.SelectedItem];
    copy[props.Id] = 0;

    let StartElements = [[],[],[],[],[],[],[],[]];
    let StartElementsMod = [[],[],[],[],[],[],[],[]];
    let VisiualElements = [[],[],[],[],[],[],[],[]];
    let InitialFlags = [[],[],[],[],[],[],[],[]]

    let Initial = [[],[],[],[],[],[],[],[]]

    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            InitialFlags[i][j] = 0;
        }
    }

    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            StartElementsMod[i][j] = 0;
        }
    }

    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            Initial[i][j] = -2;
        }
    }


    function UpdateField () {
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {


            let isCan = true;
            for(let k = i - 1; k <= i + 1; k++) {
                for(let f = j - 1; f <= j + 1; f++) {
                    try {
                        if(StartElements[k][f] === 0) {
                            isCan = false;
                        }
                    }
                    catch (e) { }
                }
            }
            if(isCan) {
            let isBomb = Math.floor(Math.random() * 50);

            if((isBomb < 25) && (StartElements[i][j] != 0)) {
                StartElements[i][j] = -1;
            }
            else {
                StartElements[i][j] = 0;
            }
        }
        }
    }

    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            if(StartElements[i][j] !== -1) {
                let count = 0;
                for(let k = i - 1; k <= i + 1; k++) {
                    for(let f = j - 1; f <= j + 1; f++) {
                        try {
                            if(StartElements[k][f] === -1) {
                                count++;
                            }
                        }
                        catch (e) {}
                    }
                }
                    StartElements[i][j] = count;
            }
        }
        
    }
    SetElements(StartElements)
    }




    //-1 бомба
    //0-8 - цифра
    let [Instrument, SetInstrument] = useState(1);
    let [Flags, SetFlags] = useState(InitialFlags);
    let [Elements, SetElements] = useState(Initial);
    let [ElementsMod, SetElementsMod] = useState(StartElementsMod);

    for(let i = 0; i < 8; i++) {
        let tempRow = 0;
        VisiualElements[i] = Elements[i].map((el) => {
            let colum = i;
            let style
            let row = tempRow;
            if(ElementsMod[colum][row] === 1) {
                if (Elements[colum][row] === 0) style = s.St0;
                if (Elements[colum][row] === 1) style = s.St1;
                if (Elements[colum][row] === 2) style = s.St2;
                if (Elements[colum][row] === 3) style = s.St3;
                if (Elements[colum][row] === 4) style = s.St4;
                if (Elements[colum][row] >= 5) style = s.St5;
                if (Elements[colum][row] === -1) style = s.Bomp;
            }
            else style = !Flags[colum][row] ? s.Elem : s.WithFlag
            let cont = Elements[colum][row];
            if (Elements[colum][row] === 0) cont = ""
            if (Elements[colum][row] === -1) cont = ""
            tempRow++;
            function click() {


                if(Instrument) {
                if(Elements[colum][row] === -1) {
                    Setwin(2)
                    let FullElements = [[],[],[],[],[],[],[],[]];
                    for(let i = 0; i < 8; i++) {
                        for(let j = 0; j < 8; j++) {
                            FullElements[i][j] = 1;
                        }
                    }
                    SetElementsMod(FullElements)
                }
                if(Elements[colum][row] >= 0) {
                    if(Elements[colum][row] === 0) {
                        for(let k = colum - 1; k <= colum + 1; k++) {
                            for(let f = row - 1; f <= row + 1; f++) {
                                try {
                                    if(Elements[k][f] === 0) {
                                        let copy = [...ElementsMod, [...ElementsMod[k]]]
                                        copy[k][f] = 1
                                        SetElementsMod(copy)
                                    }
                                }
                                catch (e) {}
                            }
                        }
                    }
                    let copy = [...ElementsMod, [...ElementsMod[colum]]]
                    copy[colum][row] = 1
                    SetElementsMod(copy)
                    //Проверка на победу
                    let isWin = true
                    for(let k = 0; k < 8; k++) {
                        for(let f = 0; f < 8; f++) {
                            if( Elements[k][f] >= 0 && ElementsMod[k][f] === 0 ) {
                                isWin = false
                            }
                        }
                    }
                    if(isWin) Setwin(1)

                }
                if(Elements[colum][row] === -2) {
                    StartElements[colum][row] = 0;
                    UpdateField()
                    let copy = [...ElementsMod, [...ElementsMod[colum]]]
                    copy[colum][row] = 1
                    SetElementsMod(copy)
                }
            }
            else {
                if(ElementsMod[colum][row] === 0) {
                    let copy = [...Flags, [...Flags[colum]]]
                    copy[colum][row] = !copy[colum][row]
                    SetFlags(copy)
                }
            }



            }
            // 0 не трогал  
            // 1 значение открыто

            return <div onClick={() => { click()} } className={style}><span className={s.lable}>{ElementsMod[colum][row] ? cont : ""}</span></div>
         })
    }

    function restart() {

        Setwin(0)
        let StartElementsMod = [[],[],[],[],[],[],[],[]];
        let Initial = [[],[],[],[],[],[],[],[]]
        let InitialFlags = [[],[],[],[],[],[],[],[]]

        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                StartElementsMod[i][j] = 0;
            }
        }

        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                InitialFlags[i][j] = 0;
            }
        }

        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                Initial[i][j] = -2;
            }
        }
        SetFlags(InitialFlags);
        SetElements(Initial)
        SetElementsMod(StartElementsMod)
    }

    return (
        <div className={s.Content}>
            <div className={s.Item}>
            <div className={s.Game}>
                <div className={s.status}><span className={win === 2 ? s.Lose : s.Win}>{win === 2 ? "Ты проиграл" : (win === 1 ? "Ты выйграл" : "")}</span></div>
                <div className={s.row}>{VisiualElements[0]}</div>
                <div className={s.row}>{VisiualElements[1]}</div>
                <div className={s.row}>{VisiualElements[2]}</div>
                <div className={s.row}>{VisiualElements[3]}</div>
                <div className={s.row}>{VisiualElements[4]}</div>
                <div className={s.row}>{VisiualElements[5]}</div>
                <div className={s.row}>{VisiualElements[6]}</div>
                <div className={s.row}>{VisiualElements[7]}</div>
            </div>
            </div>
            <div className={s.Panel}>
                <div className={s.PanelIns}>
                    <div className={!Instrument ? s.Kopat : s.Kopat1} onClick={() => SetInstrument(1)}><span className={s.lable1}>1</span></div>
                    <div className={Instrument ? s.flag : s.flag1} onClick={() => SetInstrument(0)}></div>
                </div>
                <button className={s.button} onClick={() => { restart() }}>Restart game</button>
            </div>
        </div>
    );
}


export default Content;