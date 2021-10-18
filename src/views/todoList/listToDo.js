import React, { Fragment } from 'react';
import AddToDo from './AddToDo';
import { toast } from 'react-toastify';
// import 'ListToDo.scss';
class ListToDo extends React.Component {
    state = {
        arrList: [
            { id: 'number1', title: 'Do homework', time: '2:00pm' },
            { id: 'number2', title: 'Working', time: '3:00pm' },
            { id: 'number3', title: 'Take a rest', time: '5:00pm' },
            { id: 'number4', title: 'Playing video game', time: '8:00pm' }
        ]
    }
    addToList = (todo) => {
        this.setState({
            arrList: [...this.state.arrList, todo],
        })
        toast.success("Add successful")
    }
    deleteListToDo = (todo) => {
        let currentList = this.state.arrList;
        currentList = currentList.filter((item) => item.id !== todo.id)
        this.setState({
            arrList : currentList
        })
        toast.error("Delete Successful")
    }
    render() {
        let { arrList } = this.state;
        return (
            <Fragment>
                <div className="container" style={{ textAlign: 'center', backgroundColor: 'pink', margin: '10px 400px' }}>
                    <AddToDo addToList={this.addToList}></AddToDo>
                    <div className="list-to-do">
                        {arrList && arrList.length > 0 &&
                            arrList.map((item, index) => {
                                return (
                                    <Fragment>
                                        <div style={{ marginTop: '10px', }} key={item.id}>
                                            {index + 1} - {item.title}
                                            <button style={{ padding: '4px', margin: '0 5px', border: 'solid 2px yellow', borderRadius: '5px', cursor: 'pointer' }}>EDIT</button>
                                            <button onClick = {()=>{this.deleteListToDo(item)}} style={{ padding: '4px', margin: '0 5px', border: 'solid 2px red', borderRadius: '5px', cursor: 'pointer' }}>DELETE</button>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default ListToDo