import { UsersListGrouping } from "../../../modules/apps/user-management/users-list/components/header/UsersListGrouping"
import { UsersListSearchComponent } from "../../../modules/apps/user-management/users-list/components/header/UsersListSearchComponent"
import { useListView } from "../../../modules/apps/user-management/users-list/core/ListViewProvider"
import { UsersListToolbar } from "./UserListToolbar"


const UsersListHeader = ({state}) => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <UsersListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <UsersListGrouping /> : <UsersListToolbar setUpdate={state} />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {UsersListHeader}
