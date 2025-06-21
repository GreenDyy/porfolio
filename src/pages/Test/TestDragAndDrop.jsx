import React, { useState, useEffect } from 'react'

const initialBoardData = {
    // Đối tượng chứa tất cả các card, key là card.id
    // Giúp truy cập card nhanh chóng bằng ID
    cards: {
        'card-1': { id: 'card-1', content: 'Học React Hooks' },
        'card-2': { id: 'card-2', content: 'Tìm hiểu Native D&D' },
        'card-3': { id: 'card-3', content: 'Viết component Card' },
        'card-4': { id: 'card-4', content: 'Viết component Column' },
        'card-5': { id: 'card-5', content: 'Kết nối Board với state' },
    },
    // Đối tượng chứa tất cả các cột, key là column.id
    // Mỗi cột có title và mảng cardIds để biết các card thuộc về nó theo đúng thứ tự
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Cần làm',
            cardIds: ['card-1', 'card-2', 'card-3'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Đang làm',
            cardIds: ['card-4', 'card-5'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Hoàn thành',
            cardIds: [],
        },
    },
    // Mảng chứa thứ tự của các cột.
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

const Column = ({ column, allCards, onDrop }) => {
    const handleDragOver = (e) => {
        e.preventDefault()
    }
    const handleDrop = (e) => {
        e.preventDefault()
        //cb data
        const cardIdDraged = e.dataTransfer.getData('cardId')
        const sourceColumnId = e.dataTransfer.getData('sourceColumnId')
        const targetColumnId = column.id
        
        // Gọi hàm handleDrop từ component cha
        onDrop(cardIdDraged, sourceColumnId, targetColumnId)
    }
    return (
        <div style={{ width: 300, height: '100%', borderRadius: '10px', padding: '10px', border: '1px solid #ccc', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <h2>{column.title}</h2>
            {column.cardIds.map((cardId) => (
                <Card key={cardId} card={allCards[cardId]} columnId={column.id} />
            ))}
        </div>
    )
}

const Card = ({ card, columnId }) => {
    const [isDragging, setIsDragging] = useState(false)
    const handleDragStart = (e) => {
        e.dataTransfer.setData('cardId', card.id)
        e.dataTransfer.setData('sourceColumnId', columnId)
        setIsDragging(true)
    }
    const handleDragEnd = () => {
        setIsDragging(false)
    }
    return (
        <div className='card-duy' style={{
            cursor: isDragging ? 'grabbing' : 'grab', width: '90%', borderRadius: '10px', padding: '10px', border: '1px solid #ccc',
            backgroundColor: 'green',
            opacity: isDragging ? 0.5 : 1,
        }}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <p>{columnId}</p>
            <p>{card.id}</p>
            <p>{card.content}</p>
        </div>
    )
}

function TestDragAndDrop() {
    const [boardData, setBoardData] = useState(initialBoardData)
    
    const handleDrop = (cardIdDraged, sourceColumnId, targetColumnId) => {
        //1. lấy ra các card trong cột nguồn
        const sourceColumn = boardData.columns[sourceColumnId]
        const sourceCardIds = sourceColumn.cardIds
        //2. lấy ra các card trong cột đích
        const targetColumn = boardData.columns[targetColumnId]
        const targetCardIds = targetColumn.cardIds
        console.log(`tui se luu cai id card ${cardIdDraged} tu cot ${sourceColumnId} vao cot ${targetColumnId}`)
        //3. xóa card trong cột nguồn
        const newSourceCardIds = sourceCardIds.filter((cardId) => cardId !== cardIdDraged)
        //4. thêm card vào cột đích
        const newTargetCardIds = [...targetCardIds, cardIdDraged]
        //5. cập nhật lại state
        setBoardData((prevBoardData) => {
            return {
                ...prevBoardData,
                columns: {
                    ...prevBoardData.columns,
                    [sourceColumnId]: { ...sourceColumn, cardIds: newSourceCardIds },
                    [targetColumnId]: { ...targetColumn, cardIds: newTargetCardIds },
                },
            }
        })
    }
    
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}       >
            <h1>Bảng của GreenDev</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                {boardData.columnOrder.map((columnId) => {
                    return (
                        //Render column
                        <Column key={columnId} column={boardData.columns[columnId]} allCards={boardData.cards} onDrop={handleDrop} />
                    )
                })}
            </div>
        </div>
    )
}

export default TestDragAndDrop