import React, { Fragment } from 'react'

class AddComponent extends React.Component {
    state = {
        jobTitle: '',
        salary: '',
    }
    handleOnChangeJobTitle = (event) => {
        this.setState({
            jobTitle: event.target.value,
        })
    }
    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }
    handleOnClick = () => {
        console.log('>>>> check STate:', this.state)
        // this.props.addNewJob('hello')
        this.props.addNewJob ({
            id: Math.floor(Math.random()*11),
            jobTitle: this.state.jobTitle,
            salary: this.state.salary
        })
    }
    render() {
        let { jobTitle, salary } = this.state;
        return (
            <Fragment>
                <h4>JOB'S TITLE:</h4>
                <input value={jobTitle} type='text' onChange={(event) => { this.handleOnChangeJobTitle(event) }}></input>
                <h4>SALARY:</h4>
                <div style={{ margin: '10px' }}>
                    <input value={salary} type='text' onChange={(event) => { this.handleOnChangeSalary(event) }}></input>
                </div>
                <div>
                    <button style={{ margin: '10px' }} onClick={() => { this.handleOnClick() }}>SUBMIT</button>
                </div>
            </Fragment>
        )
    }
}

export default AddComponent;