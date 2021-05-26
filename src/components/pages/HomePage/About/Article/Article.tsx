import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

type ArticleType = {
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

const Article: FunctionComponent<ArticleType> = ({ startDate, duration, englishLevel, format, id, eventType }) => <Link to={`about/${id}`} className="link__wrap">
    <article>
      <header>
        <h3>{ eventType.name }</h3>
      </header>

      <div className="date">{ startDate }</div>

      <div className="info">
        { duration }
        <br/><br/>
        { eventType.description }
      </div>

      <footer className="footer">Read More ...</footer>
    </article>
  </Link>


export default Article;