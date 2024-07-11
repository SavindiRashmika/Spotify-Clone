import { View } from 'react-native'
import React from 'react'
import LodingPage from '@/screen/LodingPage'
import LoadP from '@/screen/LoadP'

export default function index() {
  return (
    <View style={{ flex: 1 }}>
      {/* <LodingPage/> */}
      <LoadP/>
    </View>
  )
}