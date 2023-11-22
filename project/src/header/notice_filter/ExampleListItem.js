// src/ExampleListItem.js

import React from 'react';

const ExampleListItem = ({title, description, tags, key, onClick}) => {
    const renderedTags = tags.map((tag, index) => (
      <li onClick={(e) => onClick(tag, e)} className="tag clickable">
        {tag}
      </li>
    ));
    
    return (
      <li style={{padding: 10, listStyle: 'none', background: '#efefef', borderRadius: '10px', boxShadow: '1px 1px 5px #aaa'}}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</p>
        <p style={{ fontSize: '14px' }}>{description}</p>
        <ul className='tagsList' style={{padding: 0}}>{renderedTags}</ul>
      </li>
    );
  }
export default ExampleListItem;
