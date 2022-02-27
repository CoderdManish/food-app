import React, { Component } from 'react'
import { connect } from 'react-redux'

class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.Delivery.checked)
              this.props.substractDelivery()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addDelivery();
        }
        else{
            this.props.substractDelivery();
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="Delivery" onChange= {this.handleChecked} />
                                <span>Delivery(+10Rs)</span>

                                
                                
                            </label>

                            <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Delivery note
          </label>
        </div>
      </div>
    </form>
  </div>



                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} Rs</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn" onclick="myFunction()">Order</button>
                        
             
                   
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addDelivery: ()=>{dispatch({type: 'ADD_DELIVERY'})},
        substractDelivery: ()=>{dispatch({type: 'SUB_DELIVERY'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
