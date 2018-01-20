import React, { Component } from 'react'
import { connect } from 'react-redux'
import {strEdit,getData} from './redux/action'
import {STATE_KEY} from './redux/constant'
import { Link } from 'react-router'
import './test.less'

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
        			<Link to="/test/inner/lius"><h2>to-test/inner</h2></Link>
        			<h1 onClick={this.state.edit}>{ value }</h1>
        			<button onClick={this.state.print} className="btn">print aync</button>
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
		},
		print:() => {
			dispatch(getData({page:0,pageCount:10}))
			// getData({page:0,pageCount:10})
		}
	}
}

// Test.contextTypes = {
//   store: React.PropTypes.object
// }

export default connect(mapStateToProps, mapDispatchToProps)(Test);