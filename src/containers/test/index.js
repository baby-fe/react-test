import React, { Component } from 'react'
import { connect } from 'react-redux'
import {strEdit} from './redux/action'
import {STATE_KEY} from './redux/constant'

class Test extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
	}

	componentDidMount() {
	}
    render() {
        const  value  = this.props.tt;
        console.log('this.state:',this.props)
        return <div>
        			<span>sdfsdf</span>
        			<h1 onClick={this.state.edit}>{ value }</h1>
        		</div>
        		
    }
}

const mapStateToProps = state => {
    return {
    	tt: state[STATE_KEY].tt||0
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
	
	const str = 1
	return {
		edit: () => {
			dispatch(strEdit(str))
		}
	}
}

// Test.contextTypes = {
//   store: React.PropTypes.object
// }

export default connect(mapStateToProps, mapDispatchToProps)(Test);