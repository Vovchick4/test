import React from "react"

import urls from './urls'

const routes = [
    {
        path: urls.taskOne,
        exact: true,
        component: React.lazy(() => import('../pages/TaskOne')),
    }
]

export default routes