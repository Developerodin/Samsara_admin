import React from 'react'
import { CposTable } from './table/cposTable'
import { KTCard } from '../../../_metronic/helpers'
import { UsersListHeader } from '../../modules/apps/user-management/users-list/components/header/UsersListHeader'

const Cpos = () => {
  return (
    <div>
      cpos
      <KTCard>
      <UsersListHeader />
      <CposTable/>
      </KTCard>
      
    </div>
  )
}

export default Cpos
