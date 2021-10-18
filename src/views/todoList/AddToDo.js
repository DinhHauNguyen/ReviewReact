import React, { Fragment } from 'react'

class AddToDo extends React.Component {
    state={
        title:''   
    }
    handleOnChangeList = (event) => {
        console.log('>> checkk handle List:' , this.state)
        this.setState({
            title: event.target.value,
        })
    }
    handleOnClick = () => {
        this.props.addToList ({
            id: Math.floor(Math.random()*11),
            title: this.state.title
        })
        this.setState({
            title:''
        })
    }
    render() {
        let {arrList} = this.props;
        return (
            <Fragment>
                <div>
                    <div className="to-do-list-container">
                        <h1 style={{ color: 'pinkred' }}>TO DO LIST</h1>
                        <input value={this.state.title} onChange={(event)=>{this.handleOnChangeList(event)}}className="tag-add" style={{ padding: '4px', border: 'solid 1px ', borderRadius: '5px' }} type='text'></input>
                        <button onClick={()=>{this.handleOnClick()}} className="btn-add" style={{ padding: '4px', margin: '0 10px', border: 'solid 2px green', borderRadius: '5px', cursor: 'pointer' }}>ADD</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default AddToDo