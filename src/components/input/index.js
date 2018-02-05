import React,{Component} from 'react'
import style from './input.less'

class Input extends Component{

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
			<div className={this.state.inputWrapperStyle}>
				<input placeholder={this.state.placeholder} type={this.state.type} value={this.state.value} onInput={this.state.callback} />
				{
					if(this.state.btnNeed){
						return (
							<a className={} onClick={this.state.btnCallback}>{this.state.btnText}</a>
						)
					}else{ return null }
				}
			</div>
		)
	}
}

export default Input;