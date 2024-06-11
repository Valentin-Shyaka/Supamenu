import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable,TextInput } from 'react-native';
import { useFormik } from "formik";
import * as Yup from "yup";
import Feather from '@expo/vector-icons/Feather';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from "@expo/vector-icons";
import { Link } from 'expo-router';
import Input from '../components/input';
import API_URL from '../../services';
import axios from "axios";
import AppServices from '../../services'

import { useNavigation } from '@react-navigation/native';



//
const sendRequest = async (url, method, data) => {
  // Replace with your actual API request logic
  // Example using fetch:
  try {
    const response = await axios.post(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        
      },
      body:data,
    });
    return await response.data;
  } catch (error) {
    console.error("Error during API request:", error);
    throw error;
  }
};

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigation();

  

  const initialValues = {
    email:"",
    password:"",
    fullNames:"",
    phone:""
  }
   
 

  const validationSchema = Yup.object().shape({
    fullNames: Yup.string().required("Full Names is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Phone must contain only numerical characters")
      .required("Phone is required")
      .min(10, "Phone must be 10 characters")
      .max(10, "Phone must be 10 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  

  

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const isValid = await validationSchema.isValid(values);
      if (!isValid) {
        try {
          validationSchema.validateSync(values, { abortEarly: false });
        } catch (validationErrors) {
          const fieldErrors = {};
          validationErrors.inner.forEach((error) => {
            fieldErrors[error.path] = error.message;
          });
          formik.setErrors(fieldErrors);
          return;
        }
      }
      setLoading(true);
      setError("");
      const response = await AppServices.register(
        // `${API_URL}/users`,
        // "POST",
        values
      );
      if (response?.status === 201) {
        setLoading(false);
        navigation.navigate("login");
        resetForm();
      } else {
        setLoading(false);
        setError(response?.message || "Error occurred while registering");
      }
    } catch (submissionError) {
      setLoading(false);
      setError(submissionError?.message || "An error occurred");
    }
  };


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,


  });

  const { handleChange, handleBlur,handleSubmit : submitForm, values, errors, touched } = formik;
  

 

  

  return (
    <SafeAreaView className='w-full h-full bg-[#e38a3d]'>
      <ScrollView className='absolute bg-white w-full h-fit p-6 bottom-0 rounded-t-2xl'>
        <Text className='text-center text-[#e38a3d] font-bold text-4xl'>
          <Text className='text-black'>SUPA</Text>MENU
        </Text>
        <Text className='text-slate-600 font-bold mt-4 text-center'>Welcome...</Text>
        <Text className='text-slate-300 font-bold mt-4 text-center mb-4'>Please fill in the information</Text>

        <View className='mt-4 flex flex-col items-center'>
          {error.length > 0 && (
            <Text className='mt-4 text-red-500 text-center'>{error}</Text>
          )}

            <View className='border border-slate-200 rounded-lg flex flex-row  p-2 w-full'>

            <Fontisto name="user" size={24} color="black" />
            <TextInput 
              placeholder='Full names'
              onChangeText={handleChange('fullNames')}
              onBlur={handleBlur('fullNames')}
              value={values.fullNames}
              className='ml-4'
            ></TextInput>
            </View>
            {touched.fullNames && errors.fullNames && (
            <Text className='text-red-500'>{errors.fullNames}</Text>
            )}

            <View className='border border-slate-200 rounded-lg flex mt-4 flex-row  p-2 w-full'>

            <Fontisto name="mail" size={24} color="black" />
            <TextInput 
              placeholder='Email'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              className='ml-4'
            ></TextInput>
            </View>
            {touched.email && errors.email && (
            <Text className='text-red-500'>{errors.email}</Text>
            )}

            <View className='border border-slate-200 rounded-lg flex mt-4 flex-row  p-2 w-full'>

            <Fontisto name="phone" size={24} color="black" />
            <TextInput
              placeholder='Phone Number'
              keyboardType='number-pad'
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              className='ml-4'
            ></TextInput>
            </View>
            {touched.phone && errors.phone && (
            <Text className='text-red-500'>{errors.phone}</Text>
            )}

            <View className='border border-slate-200 rounded-lg flex flex-row mt-4 p-2 w-full'>

            <Fontisto name="unlocked" size={24} color="black" />
            <TextInput
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              className='ml-4'
            ></TextInput>
          </View>
          {touched.password && errors.password && (
            <Text className='text-red-500'>{errors.password}</Text>
          )}
          
   
        </View>
        <Link href={'/login'} className='shadow-md shadow-black mt-6 p-4 w-full bg-[#e38a3d] rounded-lg'>
          <Text className='text-white text-center font-bold'>Proceed</Text>
        </Link>
        <Text className='text-center font-bold text-slate-400 mt-4'>OR</Text>
        <Text className='text-slate-400 text-center mt-2'>if you have a PMG account</Text>

        <View className='text-center w-full shadow-md shadow-black self-center mt-4 p-4 bg-[#e38a3d] rounded-lg'>
          <Pressable className='text-white text-center font-bold' onPress={submitForm}>
            <Text className='text-center font-bold text-white'>{loading ? "Registering..." : "Register"}</Text>
          </Pressable>
        </View>

        <Text className='text-slate-400 text-center mt-2'>
          Already have an account?<Link href={'/login'}><Text className='font-bold text-[#e38a3d]'>Log in</Text></Link> 
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;