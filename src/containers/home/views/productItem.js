import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import PlaceHolderImg from './PlaceHolderImg'
import style from './home.less'



export class ProductItems extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
	}

	componentDidMount() {
        
        
	}

    componentWillMount(){
    }
    

    render() {
        // const placeholderImg = require(`@/images/loading.png`)
        return <div className={style.productWrapper}>{
                        this.state.products.map((immu_item, index) => {
                            return <div className={style.productItem} key={index}>
                                        <LazyLoad height={100} placeholder={<PlaceHolderImg/>} offset={-100}>
                                        <img className={style.productItemImg+` fade_in`} src={immu_item.get('image')} alt={`product_img`}/>
                                        </LazyLoad>
                                        <div>
                                            <p className={style.productItemTitle}>{immu_item.get('leftDesc')}</p> 
                                            <span className={style.productItemPrice}>￥100</span>
                                            <del className={`fontColor_gray`}>￥99</del>
                                        </div>
                                    </div>
                        })
                    
                    }   
                </div>
        		
    }
}


export default ProductItems;

