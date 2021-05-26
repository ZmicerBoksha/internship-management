import {IEventTypeDto} from './IEventTypeDto'
export interface IEventDto {
  id?: number
  city?: string
  country?: string
  //   creatorEvent?: 0,
  //   dateOfEndAccept?: string,
  deadline?: string
  duration?: string
  //   employee?: 0,
  englishLevel?: string
  eventTab?: string
  eventType?: IEventTypeDto
  format?: string
  //   image?: 0,
  startDate?: string
  technologies?: string
}
