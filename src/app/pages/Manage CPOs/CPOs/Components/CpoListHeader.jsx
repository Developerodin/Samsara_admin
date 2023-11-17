
import { UsersListToolbar } from "../../../Internal-Cpo-Managment/AllCpos/UserListToolbar"
import { CPOListSearchComponent } from "./CPOListSearchComponent"




const CpoListHeader = ({state,handleSearchInputChange,searchInput}) => {

  return (
    <div className='card-header border-0 pt-6'>
      <CPOListSearchComponent 
      handleSearchInputChange={handleSearchInputChange}
      searchInput={searchInput}
      />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        <UsersListToolbar setUpdate={state} />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {CpoListHeader}
