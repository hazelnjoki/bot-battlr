import React from "react";
import BotCard from "./BotCard";

function BotCollection({ displayBots, dischargeBot, handlenlist }) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {
          displayBots.map((bot) => (
            <BotCard bot={bot} key={bot.id} dischargeBot={dischargeBot} handleBot={handlenlist} />
          ))
        }
      </div>
    </div>
  );
}

export default BotCollection;