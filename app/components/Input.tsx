import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../assets/colors'
import { InputProps } from '../types'
import { StyleSheet } from 'react-native'

export default function Input({ props }: InputProps) {

  return (
    <View style={styles.input}>
      <TextInput onChangeText={props.setTask} value={props.task} placeholder='Adicione uma tarefa' style={styles.text_input} />
      <TouchableOpacity onPress={() => props.handleAddTask(props.task)} activeOpacity={0.7} style={styles.button}>
        {props.isLoading ? <ActivityIndicator color={COLORS.secondary} size={16} /> : <Text style={styles.button_text}>Adicionar</Text>}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingVertical: 20
  },
  text_input: {
    width: 230, 
    height: 60, 
    backgroundColor: '#d3d3f3', 
    padding: 8, 
    borderRadius: 8
  },
  button: {
    backgroundColor: COLORS.primary, 
    width: 90, 
    height: 60, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8
  },
  button_text: {
    color: COLORS.secondary,
  }
});