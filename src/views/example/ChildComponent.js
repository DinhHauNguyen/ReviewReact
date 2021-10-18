import React, { Fragment } from 'react';

class ChildComponent extends React.Component {
    state = {
        showClass: false
    }
    handleShowClass = () => {
        this.setState({
            showClass: !this.state.showClass
        })
    }
    handleHideClass = () => {
        this.setState({
            showClass: !this.state.showClass
        })
    }
    handleDeleteJob = (job) => {
        // console.log('>>>> check delete', job)
        this.props.deleteJob(job)
    }
    render() {
        let { arrClass } = this.props;
        let { showClass } = this.state;
        return (
            <Fragment>
                {
                    showClass === false ?
                        <button onClick={() => this.handleShowClass()}>SHOW</button>
                        :
                        <Fragment>
                            <div>
                                {
                                    arrClass.map((item, index) => {
                                        return (
                                            <div style={{margin:'8px'}} key={item.id}>
                                                {item.jobTitle} - {item.salary} - <span onClick={() => this.handleDeleteJob(item)}>X</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button onClick={() => this.handleHideClass()}>HIDE</button>
                            </div>
                        </Fragment>
                }
            </Fragment >
        )
    }
}
export default ChildComponent;