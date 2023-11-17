import React from 'react'
import ProfilePage from '../../modules/profile/ProfilePage'
import { ProfileHeader } from '../../modules/profile/ProfileHeader'
import { ProfileDetails } from '../../modules/accounts/components/settings/cards/ProfileDetails'

const MyProfile = () => {
  return (
    <div>
      <ProfileHeader/>
      <ProfileDetails/>
    </div>
  )
}

export default MyProfile
