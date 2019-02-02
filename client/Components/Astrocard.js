import React ,{Component} from 'react'

const AstronomyCard=(props)=>
{
    const { title,
        url,
        hdurl,
        explanation,
        date,
        copyright,
        media_type
       }=props.data;
    function RenderContent()
    {
        switch(media_type)
        {
           

            case('image'):
                    return(
                        <a href={hdurl} className="astronomy-image-wrapper">
                            <img src={url} alt={title} />
                        </a>
                    )
             case('video'):
            
                    return(
                        <iframe allowFullScreen frameBorder="0" height='520' width="820" src={url} >
                        </iframe>
                    )
            default:
                        return null;
        }
    }

    
        return(
            <div className="astronomy-card">
            <h6>{title}</h6>
            {RenderContent()}
            <p>{explanation}</p>
            <span>{date},{copyright}</span>
            </div>
        )
    
}

export default AstronomyCard