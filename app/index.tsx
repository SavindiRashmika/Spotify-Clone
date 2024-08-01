import { View } from 'react-native'
import React from 'react'
import LodingPage from '@/app/(screen)/LodingPage'
import LoadP from '@/app/(screen)/LoadP'
import LoginPage from '@/app/(screen)/LoginPage'
import CreateAcc from '@/app/(screen)/CreateAcc'
import CreateAccF from '@/app/(screen)/CreateAccF'
import NotificationP from '@/app/(screen)/NotificationP'
import ArtistChoose from '@/app/(screen)/ArtistChoose'
import { Stack } from "expo-router";

export default function index() {
  return (
     <View style={{ flex: 1 }}>
       <LodingPage/> 
       {/* <LoadP/> */}
      {/* <LoginPage/> */}
      {/* <CreateAcc/> */}
      {/* <CreateAccF/> */}
      {/* <NotificationP/> */}
      {/* <ArtistChoose/> */}
    </View> 
  )
}