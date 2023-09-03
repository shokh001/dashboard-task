import Icon from "components/Icons";

export const sidebar = {
    menu: [
        {
            id: 1,
            title: 'Document',
            icon: <Icon.Home />,
            path: '/document'
        },
        {
            id: 2,
            title: 'Employees',
            icon: <Icon.Profile2user />,
            path: '/employees'
        },
        {
            id: 3,
            title: 'Tasks',
            icon: <Icon.DocumentText />,
            path: '/tasks'
        },
        {
            id: 4,
            title: 'User Info',
            icon: <Icon.Profile />,
            path: '/userinfo'
        },
        {
            id: 5,
            title: 'User KPI',
            icon: <Icon.PresentionChart />,
            path: '/userKPI'
        },
    ],
    setting: [
        {
            id: 1,
            title: 'Sozlamalar',
            icon: <Icon.Setting />,
            path: '/settings'
        },
        {
            id: 2,
            title: 'Chiqish',
            icon: <Icon.Logout />,
            path: ''
        },
    ]
}