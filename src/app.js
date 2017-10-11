import React from 'react'; 
import { connect } from 'react-redux'; 
import { addItem } from './actions'; 
import './index.css'; 
import Form from './form'; 

export class App extends React.Component {
    render(){
        const list = this.props.items.map((item, idx) => (
            <div className="item-container" key={idx}>
                <p>{item}</p>
            </div>
        )); 
        return (
            <div> 
                <Form />
                {list}
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    items: state.items
})

export default connect(mapStateToProps)(App); 