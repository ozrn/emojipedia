import React from 'react'
import Emoji from './components/Emoji/Emoji'
import emojipedia from './assets/emojipedia'

const App = () => {

  return (
    <>
     <h1><span>emojipedia</span></h1>
     
     <dl className="dictionary">
        
        {emojipedia.map(emoji => 
            (
                <Emoji
                key = {emoji.id}
                emoji = {emoji.emoji}
                name = {emoji.name}
                definition = {emoji.meaning}
                />
            )
        )}
     
     </dl>
    </>
   )
}     
      
export default App   


