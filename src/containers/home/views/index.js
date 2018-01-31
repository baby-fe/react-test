import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getDetail} from '../actions/action-home'
import selectorHome from '../selectors/selector-home'
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
                    <button onClick={this.state.getHomeInfo}>get_data</button>
        		</div>
        		
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getHomeInfo:() => {
            dispatch(getDetail())
        }
    }
}

export default connect(selectorHome, mapDispatchToProps)(Home);

