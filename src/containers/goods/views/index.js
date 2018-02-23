import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swiper from '@/components/swiper'
import {getProducts} from '../actions/action-goods'
import selectorGoods from '../selectors/selector-goods'
import { expansion, auth, compose } from '@/utils/hoc'
import style from './goods_detail.less'

export class Goods extends Component {

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
        this.state.getProductDetail()
    }
    handleSwiperClick(){
        console.log('his:',this.props.history)
    }

    render() {
        console.log('this.props:',this.props.banners)
        if(!this.props.banners) return null
        return <div className={style.home}>
                    <Swiper opts={{continuous: false,pagination:true,sum:this.props.banners.size}}>
                        {
                            this.props.banners.map((item,index) => {
                                return <div key={item.get('content')}><img alt="" className={style.bannerImg} src={item.get('content')}></img></div>
                            })
                        }
                    </Swiper>
        		</div>
        		
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProductDetail:() => {
            dispatch(getProducts())
        }
    }
}

export default compose([auth, expansion(),connect(selectorGoods, mapDispatchToProps)],Goods);

