/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string,
  Data: [string]
}

const ListsWidget10: React.FC<Props> = ({className,Data}) => {
  const issuesArray = Data ? Data[0].split(',') : [];
  const colorClasses = ['text-danger', 'text-warning', 'text-success'];
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold mb-2 text-dark'>Health Issues</span>
          {/* <span className='text-muted fw-semibold fs-7'>890,344 Sales</span> */}
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Timeline */}
        <div className='timeline-label'>
          
          {
            issuesArray.map((el:any)=>{
              return <div className='timeline-item'>
              {/* begin::Label */}
              <div className='timeline-label fw-bold text-gray-800 fs-6'></div>
              {/* end::Label */}
              {/* begin::Badge */}
              <div className='timeline-badge'>
                <i className={`fa fa-genderless ${colorClasses[Math.floor(Math.random() * colorClasses.length)]} fs-1`}></i>
              </div>
              {/* end::Badge */}
              {/* begin::Text */}
              <div className='fw-mormal timeline-content text-muted ps-3'>
              {el}
              </div>
              {/* end::Text */}
            </div>
            })
          }
          
        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export {ListsWidget10}
