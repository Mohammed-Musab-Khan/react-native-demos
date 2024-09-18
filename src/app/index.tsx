import { View, Text, Button } from 'react-native'
import React from 'react'
import ProfileCardComponent from '../components/ProfileCardComponent'
import DynamicContext from '../components/DynamicContent'
import ProductComponent from '../components/ProductComponent'
import ExternalStyle from '../components/ExternalStyle'
import NameComponent from '../components/NameComponent'
import AgeComponent from '../components/AgeComponent'
import XHandleComponent from '../components/XHandleComponent'
import FavSubjectComponent from '../components/FavSubjectComponent'

const Index = () => {
  return (
    <View style={{alignItems:'center'}}>
      {/* <NameComponent />
      <AgeComponent />
      <XHandleComponent />
      <FavSubjectComponent /> */}

      {/* <ExternalStyle /> */}
      {/* <ProductComponent /> */}
      {/* <DynamicContext /> */}
      <ProfileCardComponent />
    </View>
  )
}

export default Index