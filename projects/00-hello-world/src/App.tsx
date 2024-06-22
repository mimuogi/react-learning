import './App.css'
import { FollowCard } from './MimuogiFollowCard'

export function App (){

    return (
    <section className='App'>
     <FollowCard
        userName ="mimuogi" 
        name = "Miguel Alejandro Muñoz"
        initialIsFollowing = {false}
        />
    {/*Coments in JSX are not a recomended practice*/ }
    </section>
    )
   
}