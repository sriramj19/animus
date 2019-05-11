export class Card {
    id: number;
    comments: Comment[];
    title: string;
    order: number;
    state: 'active' | 'archived';
    createdDate?: number;
}

export class Comment {
    body: string;
    createdDate?: number;
}