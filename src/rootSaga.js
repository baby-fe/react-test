import {take,fork} from 'redux-saga/effects'
import {load_show} from './common/actionType'

function* load(){
    while (true) {
    yield take(load_show)
    
  }
}

function* alt(){
    while (true) {
        const action = yield take(load_show)
        console.log('action:',action)
    }
}

export default function* root () {
    console.log('actionxx:')
  yield fork(alt)
}