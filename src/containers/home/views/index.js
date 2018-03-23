import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Swiper from '@/components/swiper'
import Footer from '@/components/footer'
import Loading from '@/components/loading'
import {products,homeInfo} from '../actions/action-home'
import {loading} from '@/common/actions'
import selectorHome from '../selectors/selector-home'
import { expansion, auth, compose } from '@/utils/hoc'
import ProductItems from './productItem'
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
        this.props.load()
        // this.props.history.push(`/goods/1`)
    }

    render() {
        console.log('this.props:',this.props)
        if(this.props.products.size<=0||this.props.sales.size<=0){
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
        			
                    
                    <ProductItems products={this.props.sales} history={this.props.history}></ProductItems>
                    <Footer page={1}></Footer>
        		</div>
        		
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getHomeInfo:() => {
            // dispatch(products())
            dispatch(homeInfo())
        },
        load:() => {
            dispatch(loading())
        }
    }
}

export default compose([auth, expansion(),connect(selectorHome, mapDispatchToProps)],Home);

