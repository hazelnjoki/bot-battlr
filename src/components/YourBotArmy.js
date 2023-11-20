import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({ botsArmy, releaseBot, dischargeBot }) {
 
  const enlistedBot = botsArmy.map((bot) => {
    return <BotCard key={bot} bot={bot} handleBot={releaseBot} dischargeBot={dischargeBot}/>

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