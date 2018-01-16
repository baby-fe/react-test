import React ,{Component}from 'react'
import { Router, Route, Redirect ,IndexRoute} from 'react-router'
import App from '@/containers/app'

const moduleRoute  = require.context('../containers', true, /^\.\/\S+\/router\/index\.js$/) //获取view视图下，所有router文件

class Root extends Component {
    render() {
        return (
            <div>
              {this.props.children}
            </div>
        );
    }
}
const router = store => {
    return <Route path="/" component={Root}>
                <IndexRoute component={App} />
                    {
                        moduleRoute.keys().map(key => {
                            return moduleRoute(key).default(store)
                        })
                    }
                    <Redirect from='*' to='/'  />

            </Route>
                
                
                
            
}
export default router