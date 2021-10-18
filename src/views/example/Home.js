import React, { Fragment } from 'react'
import { connect } from 'react-redux'
class Home extends React.Component {
    state ={
        list: []
    }
    handleOnDelete = (user) => {
        this.props.deleteUserRedux(user)
    }
    render() {
        let { dataRedux } = this.props
        // console.log(">>>> check props", this.props.dataRedux)
        return (
            <Fragment>
                <h3>WELCOME TO HOME PAGE</h3>
                <div className="list-dataRedux">
                    {dataRedux && dataRedux.length > 0 &&
                        dataRedux.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - id: {item.id} - Name: {item.name} <button onClick={() => this.handleOnDelete(item)} style={{ cursor: 'pointer' }}>X</button>
                                </div>

                            )
                        })

                    }
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.user }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux : (userDelete) => dispatch({type: 'DELETE_USER' , payload: userDelete})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home) 