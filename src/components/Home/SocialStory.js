import React from 'react';

const SocialStory = ({story}) => {
    const {twitter_entities, actor, body, link} = story;
    return (
        <div className='col-md-4 mb-5'>
            <div className="card">
                <div className="card-header text-white" style={{background: '#37003c'}}>
                    <div className="userInfo">
                        {actor.image && <div className="avatar" style={{backgroundImage: `url( ${actor.image} )`}}/> }
                        { actor.displayName && <p className="userName">{actor.displayName}</p>}
                        <p className="userId">
                            <span>@{actor.preferredUsername}</span> • <a href={actor.link} role="button" target="_blank" className="time">20h ago</a>
                        </p>
                    </div>
                </div>

                    <span className="postImage"
                          style={{backgroundImage: `url( ${twitter_entities.media[0].media_url} )`}}/>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{body}</p>
                        <footer className="blockquote-footer">
                            <a href={link} role="button" target="_blank" className="time">
                                <img src='/img/twitter.png' className="twitter-w" alt=''/> Twitter
                            </a>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
};

export default SocialStory;
