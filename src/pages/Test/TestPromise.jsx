import { Button, Flex } from 'antd'
import React, { useState, useEffect } from 'react'


export const TestPromise = () => {
    const testFunc = async () => {
        console.log('1')
        await setTimeout(() => {
            console.log('2')
        }, 1000)
        console.log('3')
    }
    const theHell = (message, callback) => {
        callback(message)
    }

    const triggerTheHell = () => {
        theHell('hello 1', (message) => {
            console.log(message)
            theHell('hello2', (message) => {
                console.log(message)
                theHell('hello3', (message) => {
                    console.log(message)
                })
            })
        })
    }
    function divide(a, b) {
        if (b === 0) {
            throw new Error("Không thể chia cho 0!"); // Ném ra một lỗi
        }
        return a / b;
    }
    const handleThrowError = () => {
        try {
            const result = divide(10, 2); // Thành công
            console.log("Kết quả:", result); // In ra "Kết quả: 5"

            const resultError = divide(10, 0); // Sẽ ném ra lỗi ở đây
            console.log("Kết quả lỗi:", resultError); // Dòng này sẽ không bao giờ được thực thi
        } catch (error) {
            console.error("Đã xảy ra lỗi:", error.message); // Bắt lỗi "Không thể chia cho 0!"
        }
    }

    const handleTestPromise = (condition) => {
        const promise = new Promise((resolve, reject) => {
            if (condition) {
                resolve('Thành công rồi nè!');
            } else {
                reject('Lỗi rồi nè!');
            }
        })
        promise.then(result => {
            console.log('Then 1:', result);
            return 'Kết quả từ then 1';
        })
            .then(result => {
                console.log('Then 2:', result);
                return 'Kết quả từ then 2';
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                console.log('Finally');
            })
    }

    const handleLog1Cho2Log3 = async () => {
        console.log('1')
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('2')
            }, 1000)
        })
        console.log('2')
        console.log('3')
    }

    return (
        <Flex vertical gap={10} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={() => triggerTheHell()}>Trigger the callback hell nè</Button>
            <Button onClick={() => handleThrowError()}>Test throw error</Button>
            <Button onClick={() => handleTestPromise(true)}>Test Promise resolve</Button>
            <Button onClick={() => handleTestPromise(false)}>Test Promise reject</Button>
            <Button onClick={() => handleLog1Cho2Log3()}>Chờ 2</Button>
        </Flex>
    )
}
