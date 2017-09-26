import React from 'react'
import { View, Text } from 'react-native'
import { EditView, EditInput } from '../EditView'

const ChangeUsername = () => (
  <EditView pageName="corasan">
    <EditInput placeholder="Username" />
  </EditView>
)

export default ChangeUsername
