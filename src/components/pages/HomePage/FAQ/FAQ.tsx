import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";

import Accord from "./Accord/Accord";
import "./FAQ.css";

type FaqType = {
  startDate: string,
  duration: string,
  englishLevel: string,
  format: string,
  id: number,
  eventType: {
    name: string
    description: string,
  }
}

const FAQ: FunctionComponent = () => {
  const [evtArr, setEvtArr] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8085/api/event/all`)
    .then(res => {
      setEvtArr(res.data.content);
    })
  }, []);

  return <section className="faq">
    <header className="header">
      <h2>FAQ</h2>
    </header>

    <div className="wrap">
      {evtArr.map((x: FaqType, i) => {
        if (i > 5) return;
        return <Accord
          key={i}
          startDate={x.startDate}
          duration={x.duration}
          englishLevel={x.englishLevel}
          format={x.format}
          id={x.id}
          eventType={x.eventType}
        />
      })}
    </div>
  </section>
};

export default FAQ;