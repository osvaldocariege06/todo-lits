import { View, Text } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors'

export default function Header() {
  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 40, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: COLORS.primary }}>
      <Text style={{ color: COLORS.primary, fontSize: 18, fontWeight: '600' }}>TO DO list</Text>
      <Text style={{ color: COLORS.text, fontSize: 12, marginTop: 8, fontWeight: '400' }}>
        Lista de tarefas simples e fácil de usar.
      </Text>
    </View>
  )
}