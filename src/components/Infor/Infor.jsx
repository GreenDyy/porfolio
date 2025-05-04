import React from 'react'
import './Infor.scss';

const renderContent = {
    '1': (
        <div className="infor">
            <h1>Thông tin mô hình 3D</h1>
            <p>Đây là mô hình 3D của một chiếc xe thể thao. Bạn có thể xoay mô hình bằng cách kéo chuột hoặc sử dụng phím mũi tên trái/phải.</p>
        </div>
    ),
    '2': (
        <div className="infor">
            <h1>Chế độ xem thứ hai</h1>
            <p>Trong chế độ này, bạn có thể quan sát mô hình từ một góc nhìn khác. Thử khám phá các chi tiết ẩn của mô hình.</p>
            <p>Mô hình này được tạo bằng công nghệ Three.js và React Three Fiber.</p>
        </div>
    ),
    '3': (
        <div className="infor">
            <h1>Thông tin bổ sung</h1>
            <p>Đây là một dự án demo sử dụng React và Three.js để hiển thị mô hình 3D tương tác.</p>

        </div>
    ),
}

function Infor(props) {
    const { currentState } = props
    return (
        renderContent[currentState]
    )
}

export default Infor