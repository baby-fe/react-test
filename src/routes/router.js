import React from 'react'
import { Router, Route, Redirect } from 'react-router'

const moduleRoute  = require.context('../containers', true, /^/((?!\/)[\s\S])+\/index\.js$/) //获取view视图下，所有router文件
const router = store => {
    return <Router>
                <Route path="/">
                    {
                        moduleRoute.keys().map(key => {
                            return moduleRoute(key).default(store)
                        })
                    }
                    <Redirect from='*' to='/'  />
                </Route>
            </Router>
}

export default router