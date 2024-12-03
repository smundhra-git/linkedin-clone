import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import FiberMnaualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className ="widgets__articleleft">
                <FiberMnaualRecordIcon/>
            </div>
            <div className ="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("New Project", "Looking for jobs")}
        {newsArticle("Bitcoin Breaks $96K", "Finance News")}
        {newsArticle("Random", "c++")}
        {newsArticle("Random", "c++")}
        {newsArticle("Random", "c++")}
        {newsArticle("Random", "c++")}
    </div>

  )
}

export default Widgets
