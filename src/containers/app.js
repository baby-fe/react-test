import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
    render() {
        const { value } = this.props;
        return <div>
        			<span>index</span>
        			<Link to="/test"><h2>to-test</h2></Link>
        		</div>
        		
    }
}


export default App;