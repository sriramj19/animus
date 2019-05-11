import { Board } from 'src/app/board/board/board';

export const ANIMUSSAMPLEBOARD: Board = {
    id: 1,
    name: 'Animus',
    listOfList: [
        {
            id: 1,
            trackingId: 'animus-1',
            order: 1,
            state: 'active',
            title: 'Pending list',
            cardList: [
                {
                    id: 1,
                    title: 'In a board, users should be able to create or delete multiple LISTS.',
                    state: 'active',
                    order: 1,
                    comments: [
                        {
                            body: 'Need to add structure for the board, lists and cards',
                            createdDate: 1557547469139
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'In each list, users should be able to create new, update or delete multiple cards.',
                    state: 'active',
                    order: 2,
                    comments: []
                }
            ]
        },
        {
            id: 2,
            trackingId: 'animus-2',
            order: 2,
            state: 'active',
            title: 'Ongoing list',
            cardList: [
                {
                    id: 3,
                    title: 'Host the front end app in Heroku or similar hosts and send us the LINK.',
                    state: 'active',
                    order: 1,
                    comments: []
                },
                {
                    id: 4,
                    title: 'Between lists, users should have functionality to move cards from one list to another.',
                    state: 'active',
                    order: 2,
                    comments: [
                        {
                            body: 'Need to lookup how it can be done. CDK could be a possibility',
                            createdDate: 1557547559321
                        },
                        {
                            body: 'CDK drag drop can be used to implement it',
                            createdDate: 1557547469139
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            order: 3,
            trackingId: 'animus-3',
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
                    title: 'Each card will have description, comments and comments section.',
                    state: 'active',
                    order: 2,
                    comments: []
                }
            ]
        }
    ]
}