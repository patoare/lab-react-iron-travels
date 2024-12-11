import React from 'react';
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
    return(
        <div>
            <ul>
                {travelPlansData.map((plan) => (
                  <li key={plan.id}>
                  {plan.destination}
                  <img src={plan.image} />
                  {plan.days}
                  {plan.allInclusive ? 'yes' : "no"}
                  ${plan.totalCost}
                  {plan.description}
                  <ul>
                  {plan.parts.map((part, index) =>(
                    <li key={index}>
                        {part.name}
                        {part.description}
                        {part.cost}
                    </li>
                  ))}
                  </ul>
                  </li>
    ))}
    </ul>
          </div>
      )
  }

              




export default TravelList
