import React, { Component } from 'react'

export const auth = (WrappedComp) => {
	console.log('authinit')
  return class Auth extends Component {
    render(){
      console.log('auth:',this.props)
      return <WrappedComp {...this.props}/>
    }
  }
}

export const qq = (WrappedComp) => {
	console.log('qqinit')
  return class Qq extends Component {
    render(){
      console.log('qq:',this.props)
      const newp = {...this.props,qq:'qqq'}
      return <WrappedComp {...newp}/>
    }
  }
}