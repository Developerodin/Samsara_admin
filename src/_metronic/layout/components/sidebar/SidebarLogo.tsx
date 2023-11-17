import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'

const SidebarLogo = () => {
  const {config} = useLayout()
  const appSidebarDefaultMinimizeDesktopEnabled =
    config?.app?.sidebar?.default?.minimize?.desktop?.enabled
  const appSidebarDefaultCollapseDesktopEnabled =
    config?.app?.sidebar?.default?.collapse?.desktop?.enabled
  const toggleType = appSidebarDefaultCollapseDesktopEnabled
    ? 'collapse'
    : appSidebarDefaultMinimizeDesktopEnabled
    ? 'minimize'
    : ''
  const toggleState = appSidebarDefaultMinimizeDesktopEnabled ? 'active' : ''
  const appSidebarDefaultMinimizeDefault = config.app?.sidebar?.default?.minimize?.desktop?.default
  return (
    <div className='app-sidebar-logo px-6' id='kt_app_sidebar_logo' >
      <Link to='/dashboard'>
        {/* {config.layoutType === 'dark-sidebar' ? (
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/logos/Logo_1.png')}
            className='h-55px app-sidebar-logo-default'
          />
        ) : (
          <>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/Logo_1.png')}
              className='h-55px app-sidebar-logo-default theme-light-show'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/Logo_1.png')}
              className='h-55px app-sidebar-logo-default theme-dark-show'
            />
          </>
        )} */}

        {/* <img
          alt='Logo'
          src={toAbsoluteUrl('/media/logos/Logo_1.png')}
          className='h-20px app-sidebar-logo-minimize'
        /> */}
        <div style={{textAlign:"center",marginLeft:23}}>
        <h2  style={{fontSize:25,letterSpacing:3,color:"#363062",fontWeight:"bold"}}>SAMSARA</h2>
        </div>
       
      </Link>

    </div>
  )
}

export {SidebarLogo}
