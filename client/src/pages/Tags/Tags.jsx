import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'
const Tags = () => {
    const tagsList=[
        {
            id:1,
            tagName:"javaScript",
            tagDesc: "For questions reguarding programming in ECMAScript(JavaScript/JS) and its varuious implementations(excluding ActionScript).Please include all relevant tags on your question"

        },
        {
            id:2,
            tagName:"javaScript",
            tagDesc: "For questions reguarding programming in ECMAScript(JavaScript/JS) and its varuious implementations(excluding ActionScript).Please include all relevant tags on your question"

        },
        {
            id:3,
            tagName:"javaScript",
            tagDesc: "For questions reguarding programming in ECMAScript(JavaScript/JS) and its varuious implementations(excluding ActionScript).Please include all relevant tags on your question"

        },
        {
            id:4,
            tagName:"javaScript",
            tagDesc: "For questions reguarding programming in ECMAScript(JavaScript/JS) and its varuious implementations(excluding ActionScript).Please include all relevant tags on your question"

        },
        {
            id:5,
            tagName:"javaScript",
            tagDesc: "For questions reguarding programming in ECMAScript(JavaScript/JS) and its varuious implementations(excluding ActionScript).Please include all relevant tags on your question"

        },
        {
            id:6,
            tagName:"javaScript",
            tagDesc: "For questions reguarding programming in ECMAScript(JavaScript/JS) and its varuious implementations(excluding ActionScript).Please include all relevant tags on your question"

        },
        {
            id:7,
            tagName:"javaScript",
            tagDesc: "For questions reguarding programming in ECMAScript(JavaScript/JS) and its varuious implementations(excluding ActionScript).Please include all relevant tags on your question"

        },
        {
            id:8,
            tagName:"javaScript",
            tagDesc: "For questions reguarding programming in ECMAScript(JavaScript/JS) and its varuious implementations(excluding ActionScript).Please include all relevant tags on your question"

        },
        {
            id:9,
            tagName:"javaScript",
            tagDesc: "For questions reguarding programming in ECMAScript(JavaScript/JS) and its varuious implementations(excluding ActionScript).Please include all relevant tags on your question"

        },
        {
            id:10,
            tagName:"javaScript",
            tagDesc: "For questions reguarding programming in ECMAScript(JavaScript/JS) and its varuious implementations(excluding ActionScript).Please include all relevant tags on your question"

        }

    ]
  return (
    <div className="home-container-1">
        <LeftSidebar/>
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categories with your question with other ,similar questions</p>
            <p className='tags-p'>Using right tags can help the others to find the answer of your question easily</p>
            {
                <div className="tags-list-container">{
                    tagsList.map((tag) => (
                        <TagsList tag={tag} key={tagsList.id}/>
                    ))
                    }
                </div>
            }
             
        </div>
    </div>

  )
}

export default Tags