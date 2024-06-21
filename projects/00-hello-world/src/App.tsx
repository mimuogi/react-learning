import './App.css'
import { FollowCard } from './MimuogiFollowCard'

export function App (){

    return (
    <section className='App'>
     <FollowCard
        userName ="mimuogi" 
        name = "Miguel Alejandro Muñoz"
        isFollowing ={false}
        />

    </section>
    )
   
}