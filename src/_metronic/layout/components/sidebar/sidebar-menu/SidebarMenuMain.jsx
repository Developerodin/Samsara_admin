/* eslint-disable react/jsx-no-target-blank */
import{useContext} from 'react'
import {useIntl} from 'react-intl'

import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import UserContext from '../../../../../Context/UserContext'

const SidebarMenuMain = () => {
  // const {userPermisson}=useContext(UserContext);
  const userPermisson=JSON.parse(sessionStorage.getItem('userPermisson'))
  const intl = useIntl();


  return (

  
      <>
        
      {/* dashboard */}
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/general/gen025.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
  
  
  
  
  <div className='menu-item mt-5'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7'>Manage Corporate</span>
          </div>
               </div>
               <SidebarMenuItem
            to='/corporate/company/'
            icon='/media/icons/duotune/general/gen019.svg'
            
            title='Company'
            fontIcon='bi-layers'
           
          />

<SidebarMenuItem
            to='/corporate/users/'
            icon='/media/icons/duotune/general/gen022.svg'
            title='Users'
            fontIcon='bi-layers'
           
          />


                <div className='menu-item mt-5'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7' style={{color:"#fff"}}>Manage Users</span>
          </div>
               </div>
  
  
              <SidebarMenuItem
            to='/clients/'
            icon='/media/icons/duotune/communication/com013.svg'
            title='UserList'
            fontIcon='bi-layers'
           
          />
        
           
  
  
          
              <SidebarMenuItem
              to='complains/'
              icon='/media/icons/duotune/abstract/abs026.svg'
              title='Complains'
              fontIcon='bi-layers'
             
            />
          
        
  
  
  
  
  
  
  
  <div className='menu-item'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7'>Manage Trainers</span>
          </div>
        </div>
  
      
 
 
              <SidebarMenuItem
            to='/trainers/'
            icon='/media/icons/duotune/communication/com013.svg'
            title='Trainers List'
            fontIcon='bi-layers'
           
          />

<div className='menu-item'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7'>Manage Classes</span>
          </div>
        </div>
        
        <SidebarMenuItem
            to='/classes/'
            icon='/media/icons/duotune/communication/com013.svg'
            title='Classes'
            fontIcon='bi-layers'
           
          />

<SidebarMenuItem
            to='/recorded_classes/'
            icon='/media/icons/duotune/communication/com013.svg'
            title='Recorded Classes'
            fontIcon='bi-layers'
           
          />
<SidebarMenuItem
            to='/time-slots/'
            icon='/media/icons/duotune/communication/com013.svg'
            title='Time Slots'
            fontIcon='bi-layers'
           
          />
<SidebarMenuItem
            to='/custom_sessions/'
            icon='/media/icons/duotune/communication/com013.svg'
            title='Custom Session'
            fontIcon='bi-layers'
           
          />


  
        {/* <div className='menu-item mt-5'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7'>Billing & Payments</span>
          </div>
        </div> */}
  
  
              {/* <SidebarMenuItem
              to='/billing/alltransaction/'
              icon='/media/icons/duotune/layouts/lay008.svg'
              title='All Transactions'
              fontIcon='bi-layers'
            />

              <SidebarMenuItem
              to='/billing/discountCoupons/'
              icon='/media/icons/duotune/abstract/abs014.svg'
              title='Discount Coupons'
              fontIcon='bi-layers'
            /> */}
    
  
  
  
  
  
  
       
  
  {/* <div className='menu-item mt-5'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7'>Settings</span>
          </div>
        </div>
  
              <SidebarMenuItem
              to='/settings/adminmanagment/'
              icon='/media/icons/duotune/general/gen002.svg'
              title='Admin Managment'
              fontIcon='bi-layers'
            />
       

              <SidebarMenuItem
      to='/settings/accessmanagment/'
      icon='/media/icons/duotune/abstract/abs027.svg'
      title='Access Management'
      fontIcon='bi-layers'
    /> */}
  
    </>
 
  
  )
}

export {SidebarMenuMain}
