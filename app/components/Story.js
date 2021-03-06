import React from 'react'
import Messages from './Messages';

function Story(props) {

  const { story, sendMessage } = props;

    return (
        <div className='story'>
            <div className='story-overview'>
                <span>Story Suggestion:</span> {story.message.text}
                <div><span>Source: </span>{story.sender.id}</div>
            </div >
            <Messages sendMessage={sendMessage} sender={story.sender} />
        </div>

    )
}

export default Story;
