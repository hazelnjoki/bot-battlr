import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [displayBots, setDisplayBots] = useState([])
  const [botsArmy, setBotsArmy] = useState([])
  const [botsCollection, setBotsCollection] = useState(false)

  useEffect(() => {
    fetchBots()

  }, [botsCollection])

  const fetchBots = () => {
    const api = 'http://localhost:3000/bots'
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setDisplayBots(data)
      })
      .catch((err) => console.log(err))
  }


  function addBotToArmy(bot) {
    const newBotArmy = botsArmy.find((bt) => bt.id === bot.id)
    if (!newBotArmy) setBotsArmy([...botsArmy, bot])

  }

  function releaseBot(bot) {
    const newBotArmy = botsArmy.find((bt) => bt.id === bot.id)
    if (newBotArmy) {
      setBotsArmy(
        botsArmy.filter((bt) => bt.id !== bot.id)
      )
    }

  }

  function dischargeBot(bot) {
    const botApi = `http://localhost:3000/bots/${bot}`
    fetch(botApi, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    const deleteBot = botsArmy.filter((bt) => bt.id !== bot);
		setBotsArmy(deleteBot);

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
        addBotToArmy={addBotToArmy}
      />
    
    </div>
  )
}

export default BotsPage;
