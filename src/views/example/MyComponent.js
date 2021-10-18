import React, { Fragment } from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'
class MyComponent extends React.Component {
    state = {
        name: '',
        age: '',
        arrClass: [
            { id: '1', jobTitle: 'classA', salary: '2020-2021' },
            { id: '2', jobTitle: 'classB', salary: '2020-2021' },
            { id: '3', jobTitle: 'classC', salary: '2021-2022' }
        ]
    }
    addNewJob = (job) => {
        // console.log('check add function to parents:' , job)
        this.setState({
            arrClass: [... this.state.arrClass,job]
        })
    }
    deleteJob = (job) => {
        let currentJob = this.state.arrClass;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrClass: currentJob,
        })
    }
    render() {
        return (
            <Fragment>
                <div style={{ color: 'green', textAlign: 'center' }}>
                    <AddComponent addNewJob={this.addNewJob}></AddComponent>
                    <ChildComponent  arrClass={this.state.arrClass} deleteJob={this.deleteJob}></ChildComponent>
                </div>

            </Fragment>
        )
    }
}
export default MyComponent