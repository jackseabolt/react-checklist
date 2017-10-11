import React from 'react'; 
import { connect } from 'react-redux'; 
import { addItem } from './actions'; 

export class Form extends React.Component {
    
    handleSubmit(event){
        event.preventDefault(); 
        this.props.dispatch(addItem(this.userInput.value))
        this.userInput.value = ''; 
    }
    
    render(){
        return (
            <div> 
                <div className="form">
                    <h2>React Checklist</h2>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input className="input" placeholder="Add an item" ref={input => this.userInput = input} />
                        <button className="button" type="submit">Add</button> 
                    </form>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Form)

