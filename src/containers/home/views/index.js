import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Swiper from '@/components/swiper'
import Footer from '@/components/footer'
import {getProducts} from '../actions/action-home'
import selectorHome from '../selectors/selector-home'
import { expansion, auth, compose } from '@/utils/hoc'
import style from './home.less'

export class Home extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
        console.log('style:',style)
        this.handleSwiperClick = this.handleSwiperClick.bind(this)
	}

	componentDidMount() {
        
        
	}

    componentWillMount(){
        // this.state
        this.state.getHomeInfo()
    }
    handleSwiperClick(){
        console.log('his:',this.props.history)
    }

    render() {
        console.log('this.props:',this.props)
        if(this.props.products.size<=0){
            return null
        }
        return <div className={style.home}>
                <Swiper opts={{continuous: false,pagination:true,sum:this.props.products.size}}>
                    {
                        this.props.products.map((item,index) => {
                            return <div key={item.getIn(['product','productId'])}><img alt="" className={style.bannerImg} src={item.getIn(['product','image'])} onClick={this.handleSwiperClick}></img></div>
                        })
                    }
                </Swiper>
        			<span className={style.btn}>home</span>
        			<Link to="/test"><h2>to-test</h2></Link>
                    <Footer page={1}></Footer>
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

export default compose([auth, expansion(),connect(selectorHome, mapDispatchToProps)],Home);

