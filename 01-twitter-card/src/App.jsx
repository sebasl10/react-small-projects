import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        name: 'Miguel Angel Duran',
        user: 'midudev',
        initialIsFollowing: false
    },
    {
        name: 'Sebastian Linares',
        user: 'sebasl10',
        initialIsFollowing: true
    },
    {
        name: 'Nicolas Cardenas',
        user: 'nicocalu',
        initialIsFollowing: false
    }
]

export function App(){
    const formatUserName = (user) => `@${user}`

    return(
        <div className='App'>
            {users.map(({name, user, initialIsFollowing}) => {
                return(
                    <TwitterFollowCard
                        key={user}
                        formatUserName={formatUserName}
                        name={name}
                        user={user}
                        initialIsFollowing={initialIsFollowing}
                    />
                )
            })}
    </div>
    )
}
