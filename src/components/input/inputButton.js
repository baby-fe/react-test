import React,{Component} from 'react'
import style from './input.less'

class InputButton extends Component{

	constructor(props){
		super(props)
		let const = {
			placeholder:'',
			wrapperStyle:'',
			type:'text',
			value:'',
			callback:undefined,
			btnNeed:false,
			btnText:'',
			btnCallback:undefined
		}
		this.state = Object.assign({}, def, this.props.opts)
		this.state.inputWrapperStyle = style.inputWrapper + ' ' + this.state.wrapperStyle
	}
	componentWillMount(){
        
    }

	render(){
		return(
			<a className={} onClick={this.state.btnCallback}>{this.state.btnText}</a>
		)
	}
}

export default InputButton;