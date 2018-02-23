import React, { Component } from 'react'
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
        return <div className={style.productWrapper}>{
                        this.state.products.map((immu_item, index) => {
                            return <div className={style.productItem} key={index}>
                                        <img className={style.productItemImg} src={immu_item.get('image')}/>
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

