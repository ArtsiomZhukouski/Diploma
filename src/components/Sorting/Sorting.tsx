import './Sorting.css';

const SortingSection = () => {
    return (
        <>
            <div className='sorting-style'>
                <div className='sorting-item-style'>
                    <button className='sorting-button-style'>Day</button>
                    <button className='sorting-button-style'>Week</button>
                    <button className='sorting-button-style'>Month</button>
                    <button className='sorting-button-style'>Year</button>
                </div>
                <div className='sorting-select-style'>Sort</div>
            </div>
        </>
    )
}

export default SortingSection;