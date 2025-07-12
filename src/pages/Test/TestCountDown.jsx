import { Button, Flex, Layout, message, Space, Typography } from 'antd'
import dayjs from 'dayjs'
import React, { useState, useEffect, useRef } from 'react'
import { use } from 'react'

//các bước thức hiện hàm giảm dần thời gian ước tính
//1. tạo 1 hàm tính toán thời gian còn lại
//2. cập nhật timeLeft
//3. tạo 1 interval để cập nhật timeLeft
//4. clear interval khi timeLeft = 0


const TestCountDown = () => {
    // const [estimatedTime, setEstimatedTime] = useState(1752586326)

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [expired, setExpired] = useState(false)
    const intervalRef = useRef(null)
    const estimatedTime = 1752503406  
    // const estimatedTime = dayjs().add(3, 'hour').unix()

    const updateCountdown = () => {
        //tính toán thời giàn còn lại
        const now = dayjs().unix()
        const timeDiff = estimatedTime - now
        console.log('timeDiff', timeDiff)
        const totalSecondOneDay = 24 * 60 * 60
        const totalSecondOneHour = 60 * 60
        const totalSecondOneMinute = 60

        // Lưu lại tổng số giây còn lại
        // VD: timeDiff = 257847 giây
        setTimeLeft({
            timeStamp: timeDiff,

            // Số ngày = tổng số giây / (24 giờ * 60 phút * 60 giây)
            // VD: 257847 / 86400 = 2.98 => Math.floor = 2 ngày
            days: Math.floor(timeDiff / totalSecondOneDay),

            // Số giờ = (số giây còn lại sau khi chia ngày) / (60 phút * 60 giây) 
            // VD: (257847 % 86400 = 84647) / 3600 = 23.51 => Math.floor = 23 giờ
            hours: Math.floor((timeDiff % totalSecondOneDay) / totalSecondOneHour),

            // Số phút = (số giây còn lại sau khi chia giờ) / 60 giây
            // VD: (84647 % 3600 = 1847) / 60 = 30.78 => Math.floor = 30 phút  
            minutes: Math.floor((timeDiff % totalSecondOneHour) / totalSecondOneMinute),
            // Số giây = số giây còn lại sau khi chia phút
            // VD: 1847 % 60 = 47 giây
            seconds: timeDiff % 60
        })
        if (timeDiff <= 0) {
            setExpired(true)
            clearInterval(intervalRef.current)
        }
        else {
            setExpired(false)
        }
    }

    useEffect(() => {
        //tính toàn làn đầu
        updateCountdown()
        //tạo interval để cập nhật thời gian còn lại
        intervalRef.current = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalRef.current)
    }, [])

    return (
        <Flex vertical style={{ height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
            <p>Thời gian dự kiến Duy set nè: {estimatedTime}</p>
      {
        expired ? (
            <p>Đơn hàng của bạn đã hết hạn</p>
        )
        :
        (
            <>
                  <p>Đơn hàng của bạn còn (Dạng timeStamp): {timeLeft.timeStamp}</p>
                  <p>Đơn hàng của bạn còn: {timeLeft.days > 0 ? `${timeLeft.days}:` : ''}{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</p>
            </>
        )
      }
            <p>Đơn hàng chỉ tồn tại trong 3 ngày</p>
        </Flex>
    )
}

export default TestCountDown