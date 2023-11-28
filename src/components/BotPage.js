import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [displayBots, setDisplayBots] = useState([])
  const [botsArmy, setBotsArmy] = useState([])
 // const [botsCollection, setBotsCollection] = useState(false)

  useEffect(() => {
    fetch('https://bot-json-ghdp.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setDisplayBots(data)
      })
      .catch((err) => console.log(err))
   

  }, [botsArmy])

  


  // function addBotToArmy(bot) {
  //   const newBotArmy = botsArmy.find((bt) => bt.id === bot.id)
  //   if (!newBotArmy) setBotsArmy([...botsArmy, bot])

  // }

  function releaseBot(bot) {
    const newBotArmy = botsArmy.find((bt) => bt.id === bot.id)
    if (newBotArmy) {
      setBotsArmy(
        botsArmy.filter((bt) => bt.id !== bot.id)
      )
    }

  }

  function dischargeBot(bot) {
    const botApi = `https://bot-json-ghdp.onrender.com/bots/${bot}`
    fetch(botApi, {
      method: "DELETE",
      
    })
.then((response) =>response.json())
setBotsArmy([...botsArmy,bot])
    // const deleteBot = botsArmy.filter((bt) => bt.id !== bot);
		// setBotsArmy(deleteBot);

  }
function handlenlist(displayBots) {
  if(!botsArmy.some((armybots)=>armybots.id !== displayBots.id)){
    setBotsArmy([...botsArmy, displayBots])
  } 
}


  return (
    <div>
      <YourBotArmy 
        botsArmy={botsArmy}
        releaseBot={releaseBot} 
        dischargeBot={dischargeBot}
      />
      <BotCollection 
        displayBots={displayBots} 
        // dischargeBot={dischargeBot} 
       
        handlenlist={handlenlist}
      />
    
    </div>
  )
}

export default BotsPage;
