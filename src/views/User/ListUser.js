import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class ListUser extends React.Component {
    state = {
        listUser: []
    }
    //   componentDidMount() {
    //     axios.get('https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
    //     .then(res => {
    //         console.log('>>> check rest', res)
    //     })
    // }
    handleOnUserClick = (e) => {
        this.props.history.push(`user/${e.maNhom}`)
    }
    async componentDidMount() {
        let res = await axios.get('https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP03');

        console.log('...check data', res)
        this.setState({
            listUser: res && res.data ? res.data : []
            
        })
        // console.log('>>>> check data', res.data.data)

    }
    render() {
        let { listUser } = this.state;
        console.log('>>>> check object', listUser)
        return (
            <div className="list-user-container">
                <h1>LIST USER IN THIS WEBSITE</h1>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div onClick={() => this.handleOnUserClick(item)} key={item.maKhoaHoc}>
                                    {index + 1} - {item.biDan} - The name of course: {item.tenKhoaHoc} - Day : {item.ngayTao}
                                    <img style={{height:'50px'}} src={item.hinhAnh}></img>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser)