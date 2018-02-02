import React, { Component } from 'react'
import { hashHistory,browserHistory } from 'react-router'

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

export const auth = (WrappedComp) => {
  return class Auth extends Component {
    render(){
      console.log('auth:',this.props)
      return <WrappedComp {...this.props}/>
    }
  }
}

//反向继承，渲染劫持
export const qq = (WrappedComp) => {
  return class Qq extends WrappedComp {
    render(){
      console.log('qq:',this.props)
      return super.render();
    }
  }
}


export const expansion = (WrappedComp) => {
  
  return class Expansion extends Component {
    render(){
      let props = Object.assign({},this.props,{rHistory:history})
      return <WrappedComp {...props}/>
    }
  }
}