import { View } from 'react-native'
import React from 'react'
import LodingPage from '@/screen/LodingPage'
import LoadP from '@/screen/LoadP'
import LoginPage from '@/screen/LoginPage'
import CreateAcc from '@/screen/CreateAcc'
import CreateAccF from '@/screen/CreateAccF'
import NotificationP from '@/screen/NotificationP'

export default function index() {
  return (
    <View style={{ flex: 1 }}>
       {/* <LodingPage/>  */}
      {/*  <LoadP/> */}
      {/* <LoginPage/> */}
      {/* <CreateAcc/> */}
      {/* <CreateAccF/> */}
      <NotificationP/>
    </View>
  )
}