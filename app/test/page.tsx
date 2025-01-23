import React from 'react'

const TestPage = () => {
    return (
        <div className="flex flex-row justify-evenly items-start">
            <div className="flex border  bg-red-500 w-full">
                Item 1
            </div>
            <div className="flex bg-red-500 border w-full">
                Item 2
            </div>
            <div className="flex bg-red-500 border w-full">
                Item 3
            </div>
        </div>
    )
}
export default TestPage