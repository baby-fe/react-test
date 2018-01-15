import React, { Component } from 'react'
import { connect } from 'react-redux'

class Test extends Component {
    render() {
        const { value } = this.props;
        return <h1>{ value }</h1>
    }
}

const mapStateToProps = state => {
    return { ...state.test }
}

const mapDispathToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispathToProps)(Test);