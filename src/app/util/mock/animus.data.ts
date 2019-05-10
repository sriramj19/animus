import { Board } from 'src/app/board/board/board';

export const ANIMUSSAMPLEBOARD: Board = {
    id: 1,
    name: 'Animus',
    listOfList: [
        {
            id: 1,
            order: 1,
            state: 'active',
            title: 'Pending list',
            cardList: [
                {
                    id: 1,
                    title: 'In a board, users should be able to create or delete multiple LISTS.',
                    state: 'active',
                    order: 1,
                    comments: []
                },
                {
                    id: 2,
                    title: 'In each list, users should be able to add, update or delete multiple cards.',
                    state: 'active',
                    order: 2,
                    comments: []
                }
            ]
        },
        {
            id: 2,
            order: 2,
            state: 'active',
            title: 'Ongoing list',
            cardList: [
                {
                    id: 3,
                    title: 'In a board, users should be able to create or delete multiple LISTS.',
                    state: 'active',
                    order: 1,
                    comments: []
                },
                {
                    id: 4,
                    title: 'Between lists, users should be able to move cards from one list to another.',
                    state: 'active',
                    order: 2,
                    comments: []
                }
            ]
        },
        {
            id: 3,
            order: 3,
            state: 'active',
            title: 'Completed',
            cardList: [
                {
                    id: 5,
                    title: 'Each list will have a Title.',
                    state: 'active',
                    order: 1,
                    comments: []
                },
                {
                    id: 6,
                    title: 'Each card will have title, description and comments section.',
                    state: 'active',
                    order: 2,
                    comments: []
                }
            ]
        }
    ]
}