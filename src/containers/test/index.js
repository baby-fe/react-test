import React, { Component } from 'react'
import { connect } from 'react-redux'
import {strEdit} from './redux/action'

class Test extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
		console.log('props:',props)
		console.log('state:',this.state)
		// const { store } = this.context;
		// console.log('store:',store)

	}

	componentDidMount() {
	    // const { store } = this.context;
	    // console.log('store:',store)
	}
    render() {
        const  value  = this.state.tt;
        console.log(value)
        return <div>
        			<span>sdfsdf</span>
        			<h1 onClick={this.state.edit}>{ value }</h1>
        		</div>
        		
    }
}

const mapStateToProps = state => {
	console.log('state:',state)
    return {
    	tt: typeof state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const {
		tt
	} = ownProps;
	const str = tt+1
	return {
		edit: () => {
			console.log('in')
			dispatch(strEdit(str))
		}
	}
}

// Test.contextTypes = {
//   store: React.PropTypes.object
// }

export default connect(mapStateToProps, mapDispatchToProps)(Test);