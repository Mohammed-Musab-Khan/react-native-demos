import { View, Text, Button, StyleSheet } from 'react-native'
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
import ParentComponent from '../components/ParentComponent'
import ConditionalStatements from '../components/ConditionalStatements'
import AndOperator from '../components/AndOperator'
import TernaryOpereator from '../components/TernaryOperator'
import WithoutState from '../components/1. Basic Counter/WithoutState'
import WithState from '../components/1. Basic Counter/WithState'
import UpdateArray from '../components/2. Updating Arrays/UpdateArray'
import UpdateObject from '../components/3. Update Objects/UpdateObject'
import SharingState from '../components/4. Sharing State/SharingState'
import ToggleButton from '../components/ToggleButton'
import WeatherApp from '../components/WeatherApp'
import ColorPicker from '../components/ColorPicker'

const Index = () => {
  return (
    <View>
      <Text style={styles.heading}>My Name is Mohammed Musab Khan</Text>

      {/* <ColorPicker /> */}
      {/* <WeatherApp />   */}
      {/* <ToggleButton /> */}
      {/* <SharingState /> */}
      {/* <UpdateObject /> */}
      {/* <UpdateArray /> */}
      {/* <WithState /> */}
      {/* <WithoutState /> */}
      <TernaryOpereator />
      {/* <AndOperator /> */}
      {/* <ConditionalStatements /> */}
      {/* <ParentComponent /> */}
      {/* <HugeComponent /> */}

      {/* <ArrayOfObject /> */}
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
      <ProfileCardComponent /> 

    </View>
  )
}

const styles = StyleSheet.create({
  heading: {

  }
})

export default Index