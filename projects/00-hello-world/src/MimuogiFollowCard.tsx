import {useState} from 'react'

export function FollowCard({userName, name, initialIsFollowing}:{userName: string, name:string, initialIsFollowing:boolean}) {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    /*
    const state = useState(false) -> Variable de estado
    const is Following = state[0] -> Valor 0 del array es el valor actual
    const setIsFollowing = state(1) -> Forma de actuaizar el valor del estado
    */

    //console.log('[FollowCard] render with userName: ', initialIsFollowing)

    const text = isFollowing ? 'Following' : 'Follow'

    const buttonClassName = isFollowing
    ? 'joli-followCard-button is-following'
    : 'joli-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
      }

    return (

        <article className='joli-followCard'>
            <header className='joli-followCard-header'>
            <img 
                className = 'joli-followCard-avatar'
                alt = "Placeholder avatar" 
                src = {`https://unavatar.io/github/${userName}`}>
            </img>
            <div className = 'joli-followCard-info'>
                <strong >
                    {name}
                </strong>
                <span className = 'joli-followCard-ifoUserName'>
                    @{userName}
                </span>
            </div>
            </header>

            <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='joli-followCard-text'>{text}</span>
                <span className='joli-followCard-stopFollow'>Unfollow</span>
            </button>

            </aside>

        </article>
    )

}