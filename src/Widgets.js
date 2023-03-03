import React from 'react'
import  "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon />
        </div>

            {newsArticle("Kevin Daliri is learning React JS!", "This kid just wants to be a developer and a designer...")}
            {newsArticle("Fall Co-Op Applications are opening soon!", "Learn how to boost your resume")}
            {newsArticle("iFactory is a really cool comapny!", "Click here to check out their incredible work")}

    </div>

  )
}

export default Widgets