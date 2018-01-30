import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getData} from '../actions/action-home'
import {selectorHome} from '../selectors'
import { Link } from 'react-router'
import { auth ,qq} from '@/utils/hoc'
import './test.less'

export class Home extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
	}

	componentDidMount() {
	}

    componentWillMount(){
        // this.state
    }
    render() {
        return <div>
        			<span>home</span>
        			<Link to="/test"><h2>to-test</h2></Link>
        		</div>
        		
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getHomeInfo:() => {
            dispatch(getData())
        }
    }
}

export default connect(selectorHome, mapDispatchToProps)(Home);

