import React from 'react'
import { View, Text } from 'react-native'
import { EditView, EditInput } from '../EditView'

const ChangeName = () => (
  <EditView pageName="Henry Paulino">
    <EditInput placeholder="First Name" />
    <EditInput placeholder="Last Name" />
  </EditView>
)

export default ChangeName
