import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactSwipe from 'react-swipe'
import {getDetail, getProducts} from '../actions/action-home'
import selectorHome from '../selectors/selector-home'
import { Link } from 'react-router'
import { auth ,qq} from '@/utils/hoc'
import style from './home.less'

export class Home extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
        console.log('style:',style)
	}

	componentDidMount() {
        
        
	}

    componentWillMount(){
        // this.state
        this.state.getHomeInfo()
    }
    setSwipesOps(){
        // swipes 的配置
        return {
            distance: 620, // 每次移动的距离，卡片的真实宽度
            currentPoint: 1,// 初始位置，默认从0即第一个元素开始
            autoPlay: true, // 是否开启自动播放
            swTouchstart: (ev) => {

            },
            swTouchmove: (ev) => {

            },
            swTouchend: (ev) => {
                let data = {
                    moved: ev.moved,
                    originalPoint: ev.originalPoint,
                    newPoint: ev.newPoint,
                    cancelled: ev.cancelled
                }
                console.log(data);
                this.setState({
                    curCard: ev.newPoint
                })
            }
        }
    }

    render() {
        if(this.props.products.size<=0){
            return null
        }
        return <div>
                <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                    {
                        this.props.products.map((item,index) => {
                            return <div key={item.getIn(['product','productId'])}><img className={style.bannerImg} src={item.getIn(['product','image'])}></img></div>
                        })
                        
                    }
                </ReactSwipe>
        			<span className={style.btn}>home</span>
        			<Link className={style.bannerImg} to="/test"><h2>to-test</h2></Link>
        		</div>
        		
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getHomeInfo:() => {
            // dispatch(getDetail())
            dispatch(getProducts())
        }
    }
}

export default connect(selectorHome, mapDispatchToProps)(Home);

