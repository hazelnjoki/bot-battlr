import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({ botsArmy, releaseBot, dischargeBot }) {
 
  const enlistedBot = botsArmy.map((bot) => {
   return(<div key ={bot.id}>
    <button onClick={()=>releaseBot(bot)} >release</button>
    <button onClick={()=>dischargeBot(bot)} >discharge</button>
    <BotCard key={bot} bot={bot}  />
   </div>)
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row"> 
        
          {enlistedBot}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;