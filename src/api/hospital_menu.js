const items = [{
        id: 1,
        menu_header: "Dashboard",
        // sub_menu: [{
        //     id: 1,
        //     menu_item: "Dashboard",
        //     url: '/dashboard',
        //     icon: 'apps'
        // }, ]
    },
    {
        id: 2,
        menu_header: "Manage Visits",
        sub_menu: [{
                id: 1,
                menu_item: "New Visit",
                url: '/dashboard',
                icon: 'pending'
            },
            {
                id: 2,
                menu_item: "Follow Up Visit",
                url: '/dashboard',
                icon: 'task_alt'
            },
            {
                id: 3,
                menu_item: "Request Code",
                url: '/dashboard',
                icon: 'cancel'
            },
        ]

    },
    {
        id: 3,
        menu_header: "Manage Enrolees",
        sub_menu: [{
                id: 1,
                menu_item: "All Enrolees",
                url: '/dashboard',
                icon: 'settings'
            },
        ]

    },
    {
        id: 4,
        menu_header: "Manage Invoices",
        sub_menu: [{
                id: 1,
                menu_item: "All Invoices",
                url: '/dashboard',
                icon: 'settings'
            },
            {
                id: 2,
                menu_item: "Due Invoices",
                url: '/due-invoices',
                icon: 'notifications'
            },
            {
                id: 3,
                menu_item: "Submitted Invoices",
                url: '/submitted-invoices',
                icon: 'notifications'
            },
        ]

    },
    {
        id: 5,
        menu_header: "HMO Information",
        // sub_menu: [{
        //     id: 1,
        //     menu_item: "Dashboard",
        //     url: '/dashboard',
        //     icon: 'apps'
        // }, ]
    },

]

export default items;