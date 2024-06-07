import { useState } from 'react';
import data from '../../public/data';
import './Accordion.css'

//單開手風琴
//多開手風琴

function Accordion() {

    const [selected, setSelected] = useState(null)
    const [multSelect, setMultSelect] = useState(false)
    const [selectedArray, setSelectedArray] = useState([])

    function handleSwitch() {
        setMultSelect(!multSelect)
    }

    function handleSelected(id) {
        setSelected(selected === id ? null : id)
    }

    function handleMultSelected(id) {
        let copyArray = [...selectedArray]
        let search = copyArray.find(x => x === id)
        // console.log(search)
        if (search === undefined) {
            copyArray.push(id);
        } else {
            copyArray = copyArray.filter(x => x != id)
        }
        setSelectedArray(copyArray)
    }

    // console.log(selectedArray)
    return (
        <div className='container'>
            <button className='switch-btn' onClick={handleSwitch}>切換多選</button>
            <div className='accordion'>
                {data && data.length > 0 ? (
                    data.map(item => (
                        <div className='item'
                            key={item.id}>
                            <div onClick={multSelect ?
                                () => handleMultSelected(item.id) :
                                () => handleSelected(item.id)}
                                className='title'>
                                <h3>{item.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                multSelect ? (
                                    selectedArray.indexOf(item.id) != -1 ? (
                                        <div className='content'>{item.answer}</div>
                                    ) : null) : (
                                    selected === item.id ? (
                                        <div className='content'>{item.answer}</div>
                                    ) : null
                                )
                            }
                        </div>
                    ))
                ) : (
                    <div>No data</div>
                )}
            </div>
        </div>
    );
}

export default Accordion;