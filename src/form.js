import React from 'react'; 
import { connect } from 'react-redux'; 
import { addItem } from './actions'; 

export class Form extends React.Component {
    render(){
        return (
            <div> 
                <div className="form">
                    <input className="input" placeholder="Add an item" ref={input => this.userInput = input} />
                    <button className="button" onClick={e => {
                        this.props.dispatch(addItem(this.userInput.value)) 
                        this.userInput.value = ''; 
                    }
                    }>Add</button> 
                </div>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Form)

