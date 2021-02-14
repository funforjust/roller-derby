import React from 'react'
import '../../index.css';
import '../SectionItem/SectionItem.scss';
import '../../styles.scss'

const SectionItem = (props) => {
    //const [contentStyle, setContentStyle] = useState('general-container-content-i');
    
    const checkLeftOrRight = (id) => {
        if (id % 2 === 0){
            console.log('content i');
            return 'general-container-content-i';
        }else{
            console.log('content d');
            return 'general-container-content-d';
        }
    }
    return (
        <>
            {console.log("PROPS" , props)}
            {console.log("direction:", checkLeftOrRight(props.webDataItem.id))}
            <div className='general-container'>
                <div className={checkLeftOrRight(props.webDataItem.id)}>
                    <div className='text-container'>
                        <h2 className='title'>{props.webDataItem.title}</h2>
                        <p>{props.webDataItem.subtitle}</p>
                        <p>{props.webDataItem.description}</p>
                    </div>
                    <div className='media-container'>
                        <div className='example-image'>{props.webDataItem.mediaContent}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionItem
