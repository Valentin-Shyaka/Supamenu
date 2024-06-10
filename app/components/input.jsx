import React from 'react';
import {View, TextInput} from 'react-native';


const Input = ({Icon, placeholder,value,onChangeText, onBlur, security=false, borderColor='gray',type='default'}) => {
  type == null && (type='default')
  return (
    //   <View className={`w-full mt-2 flex-row border p-4 rounded-[2] border-${borderColor}-200`}>
    //     {Icon}
    //      <TextInput placeholder={placeholder} className={`ml-2`}
    //      secureTextEntry={security}
    //      keyboardType={type}
    //      onChangeText={onChangeText}
    //      onBlur={onBlur}
    //      value={value}
    //      />
    //   </View>
    <View className='border border-slate-200 rounded-lg flex flex-row p-2 w-full mt-2 gap-x-1'>

        {Icon}
            <TextInput
                secureTextEntry={security}
                keyboardType={type}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                className='' 
                placeholder={placeholder}>

            </TextInput>
    </View>
  )
}

export default Input;