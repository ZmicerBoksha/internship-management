import React, { FunctionComponent } from "react";
import {
  Link,
  useParams
} from "react-router-dom";
import useAxios from 'axios-hooks';
import {IEventDto} from '../../../models/IEventsDto';

import './About.css';

type idType = {
  id: string
}

const About: FunctionComponent = () => {
  const {id} = useParams<idType>()
  const [{data}] = useAxios<IEventDto>({
    url: `/event/${id}`,
    method: 'GET',
  })
console.log(data);
  return (
    <section className="page-about">
      <div className="wrap">
        <div className="page-about__back"><span>about &#8594;</span> <Link to="/" className="link">Home</Link></div>

        <h1>{data?.eventType?.name}</h1>

        <h2>{data?.startDate}</h2>
        <h2>{data?.duration}</h2>
        <h2>{data?.format}</h2>

        <p>{data?.eventType?.description}</p>
      </div>
    </section>
  );
};

export default About;