import React, {useState, useEffect} from 'react'
import '../../index.css';
import '../SectionItem/SectionItem.scss';
import '../../styles.scss'

const SectionItem = (props) => {
    //const [contentStyle, setContentStyle] = useState('general-container-content-i');
    const [url, setUrl] = useState('');
    const checkLeftOrRight = (id) => {
        return (id % 2 === 0)?'general-container-content-i':'general-container-content-d';
    }

    const handleChangePage = () => {
        let likeBtn = document.createElement('div');
        likeBtn.className = "fb-like";
        likeBtn.setAttribute("data-href", url);
        likeBtn.setAttribute("data-width", "");
        likeBtn.setAttribute("data-layout", "standard");
        likeBtn.setAttribute("data-action", "like");
        likeBtn.setAttribute("data-size", "small");
        likeBtn.setAttribute("data-share", "true");
    
        let likePanel = document.getElementById("like-panel");
        likePanel.removeChild(likePanel.childNodes[0]);
        likePanel.appendChild(likeBtn);
    
        window.FB.XFBML.parse(likePanel);
        setUrl(props.webDataItem.facebook);
      }
      useEffect(() => {
        if(props.webDataItem.facebook) handleChangePage();
      });


    return (
        <>
            <div className='general-container'> 
                <div className={checkLeftOrRight(props.webDataItem.id)}>
                    <div className='text-container'>
                        <h2 className='title'>{props.webDataItem.title}</h2>
                        {(props.webDataItem.facebook)?
                            <div id='like-panel'>
                                <div className="fb-like" data-href={url} data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true"></div>
                            </div>
                            :
                            null
                        }
                        
                        <p>{props.webDataItem.subtitle}</p>
                        <div>{props.webDataItem.description}</div>
                        
                    </div>
                    <div className='media-container'>
                            <img src={props.webDataItem.mediaContent} width='100%' max-width='600px'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionItem
