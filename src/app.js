import React from 'react'; 
import { connect } from 'react-redux'; 
import { addItem } from './actions'; 

export class App extends React.Component {
    render(){
        const list = this.props.items.map((item, idx) => (
            <div key={idx}>
                <p>{item}</p>
            </div>
        )); 
        return (
            <div> 
                <input ref={input => this.userInput = input} />
                <button onClick={e => {
                    this.props.dispatch(addItem(this.userInput.value)) 
                    this.userInput.value = ''; 
                }
                }>Add</button> 
                {list}
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    items: state.items
})

export default connect(mapStateToProps)(App); 