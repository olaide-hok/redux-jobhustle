import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useSelector, useDispatch } from 'react-redux';

const PageBtnContainer = () => {
    const { numOfPages, page} = useSelector((store) => store.allJobs)
    const dispatch = useDispatch()

    const pages = Array.from({ length: numOfPages }, (_, index) =>{
        return index + 1
    })

    const nextPage = () => {
        console.log('nextPage');
    }

    const prevPage = () => {
        console.log('prevPage');
    }
  return (
    <Wrapper>
        <button
            type='button'
            className='prev-btn'
            onClick={prevPage}
        >
            <HiChevronDoubleLeft/>
            prev
        </button>
        <div className='btn-container'>
        { pages.map((pageNumber) => {
            return (
                <button
                    type='button'
                    key={pageNumber}
                    className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
                    onClick={() => {}}
                >
                    {pageNumber}
                </button>
            )
        })}
        </div>
        

        <button
            type='button'
            className='next-btn'
            onClick={nextPage}
        >
            <HiChevronDoubleRight/>
            next
        </button>
    </Wrapper>
  )
}

export default PageBtnContainer