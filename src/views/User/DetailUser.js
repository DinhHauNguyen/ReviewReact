import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class DetaiUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let maNhom = this.props.match.params.maNhom;
            let res = await axios.get(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maNhom=${maNhom}`)
            this.setState({
                user: res && res.data ? res.data : {}
            })
            console.log('>>> check user', res)
        }
    }
    render() {
        let { user } = this.state;
        let isEmtyObj = Object.keys(user).length === 0;
        console.log('>>> check props', user)
        return (
            <Fragment>
                <div>RETURN A DETAIL USER : {this.props.match.params.maNhom}</div>
                {isEmtyObj === false &&
                    user.map((item,index) => {
                        return(
                        <div key={item.maNhom}>{index + 1} - Ten Khoa Hoc : {item.tenKhoaHoc} - Ngay tao: {item.ngayTao}</div>
                        )
                    })
                }
            </Fragment>
        )
    }
}
export default withRouter(DetaiUser);