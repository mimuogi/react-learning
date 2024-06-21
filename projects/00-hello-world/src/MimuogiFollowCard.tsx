export function FollowCard({userName, name, isFollowing}:{userName: string, name:string, isFollowing:boolean}) {
    console.log(isFollowing)
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
                <button className='joli-followCard-button'>
                    Follow
                    </button>

            </aside>

        </article>
    )

}