import React from 'react'
import { CustomersTable } from './table/customersTable'
import { KTCard } from '../../../_metronic/helpers'
import { UsersListHeader } from '../../modules/apps/user-management/users-list/components/header/UsersListHeader'

const Customers = () => {
  return (
    <div>
      customers
      <KTCard>
      <UsersListHeader />
      <CustomersTable/>
      </KTCard>
      
    </div>
  )
}

export default Customers
