import { Card } from '../card/card';

export class List {
    id: number;
    title: string;
    state: 'active' | 'archived' | 'deleted';
    order: number;
    cardList: Card[] = [];
    trackingId: string;
    createdDate?: number;
}