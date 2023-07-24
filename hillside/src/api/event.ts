/* Defines the user entity */
export interface IEvent {
  eventId: number;
  eventName: string;
  eventDesc: string;
  eventDate: string;
}

export interface EventResolved {
  event: IEvent | null;
  error?: string;
}
