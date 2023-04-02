import React from 'react'
import '../css/coverpage.css'
type Props = {}

const Coverpage = (props: Props) => {
    return (
        <div className='coverpage'>
        <img src="coverpage.png" alt="coverpage" className='coverimg' />
        </div>
    )
}

export default Coverpage