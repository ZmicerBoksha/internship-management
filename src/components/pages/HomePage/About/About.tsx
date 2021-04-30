import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";

import Article from "./Article/Article";
import "./About.css";

type AboutType = {
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

const About: FunctionComponent = () => {
  const [evtArr, setEvtArr] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8085/api/event/all`)
    .then(res => {
      setEvtArr(res.data.content);
    })
  }, []);

  return <section className="about">
    <header className="header">
      <h2>About us</h2>
    </header>

    <div className="wrap">
      {evtArr.map((x: AboutType, i) => {
        if (i > 2) return;
        return <Article
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
}

export default About;