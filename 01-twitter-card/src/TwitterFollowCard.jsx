import { useState } from 'react'

export function TwitterFollowCard({ formatUserName, user, name, initialIsFollowing }){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imgSource = `https://unavatar.io/github/${user}`
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={imgSource} alt={user} className='tw-followCard-avatar' />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUserName'>{name}</strong>
                    <span>{formatUserName(user)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{ isFollowing ? 'Following' : 'Follow' }</span>
                    <span className='tw-followCard-stopFollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}