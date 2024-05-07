import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors'
import { TaskProps } from '../types'

export default function Task({ onDelete, onUpdate, title, id, completed, isLoadingDelete, isLoadingUpdate }: TaskProps) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8, paddingHorizontal: 20, paddingVertical: 26, backgroundColor: COLORS.secondary, }}>
      <Text>{title}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => onDelete(id)} activeOpacity={0.7} style={{ marginRight: 20 }}>
          {isLoadingDelete ? <ActivityIndicator color={COLORS.danger} /> : <Text style={{ color: COLORS.danger }}>Excluir</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onUpdate(id, completed)} activeOpacity={0.7}>
          
          {isLoadingUpdate ? <ActivityIndicator color={COLORS.primary} /> : <Text style={{ color: COLORS.primary }}>Concluir</Text>}
        </TouchableOpacity>
      </View>
    </View>
  )
}