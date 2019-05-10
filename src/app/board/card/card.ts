export class Card {
    id: number;
    comments: Comment[];
    title: string;
    order: number;
    state: 'active' | 'archived';
}

export class Comment {
    body: string;
}