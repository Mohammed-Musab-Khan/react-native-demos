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
import ImageComponent from '../components/ImageComponent'
import CarComponent from '../components/CarComponent'
import ListData from '../components/ListData'
import ArrayOfObject from '../components/ArrayOfObject'
import HugeComponent from '../components/HugeComponent'

const Index = () => {
  return (
    <View>
      <Text>Hello</Text>
      <HugeComponent />

      <ArrayOfObject />
      {/* <ListData /> */}
      {/* <CarComponent /> */}
      {/* <ImageComponent /> */}
      {/* <NameComponent />
      <AgeComponent />
      <XHandleComponent />
      <FavSubjectComponent />

      <ExternalStyle /> */}
      {/* <ProductComponent /> */}
      {/* <DynamicContext /> */}
      {/* <ProfileCardComponent />  */}

    </View>
  )
}

export default Index