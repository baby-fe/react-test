import React, { Component } from 'react'
import { Link } from 'react-router'

export class Home extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
	}

	componentDidMount() {
	}
    render() {
        return <div>
        			<span>home</span>
        			<Link to="/test"><h2>to-test</h2></Link>
        		</div>
        		
    }
}

export default Home

