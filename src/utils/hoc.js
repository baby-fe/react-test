import React, { Component } from 'react'

export const auth = (WrappedComp) => {
  return class Auth extends Component {
    render(){
      console.log('auth:',this.props)
      return <WrappedComp {...this.props}/>
    }
  }
}