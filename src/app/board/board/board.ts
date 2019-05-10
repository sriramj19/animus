export class Board {
    id: number = 1;
    listOfList: List[] = [];
    name: string;
}

export class List {
    id: number;
    title: string;
    state: 'active' | 'archived' | 'deleted';
    order: number;
}