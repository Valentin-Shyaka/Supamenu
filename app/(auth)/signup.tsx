import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { useFormik } from "formik";
import * as Yup from "yup";
import Feather from '@expo/vector-icons/Feather';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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

  const fields = [
    {
      icon: <MaterialCommunityIcons name="head" size={24} color="silver" />,
      placeholder: "Full Names",
      value: "fullNames",
      secure: false,
      required: true,
    },
    {
      icon: <MaterialCommunityIcons name="phone" size={24} color="silver" />,
      placeholder: "Phone",
      value: "phone",
      secure: false,
      type: "number-pad",
      required: true,
    },
    {
      icon: <Feather name="mail" size={24} color="silver" />,
      placeholder: "Email",
      value: "email",
      secure: false,
      type: "email-address",
      required: true,
    },
    {
      icon: <Feather name="lock" size={24} color="silver" />,
      placeholder: "Password",
      value: "password",
      secure: true,
      required: true,
    },
  ];

  const initialValues = fields.reduce((acc, field) => {
    acc[field.value] = "";
    return acc;
  }, {});

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


  const handleSubmit = async () => {
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
        navigation.navigate("/login");
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

  const { handleChange, handleBlur, values, errors, touched, resetForm } = formik;

  

  return (
    <SafeAreaView className='w-full h-full bg-[#e38a3d]'>
      <ScrollView className='absolute bg-white w-full h-fit p-6 bottom-0 rounded-t-2xl'>
        <Text className='text-center text-[#e38a3d] font-bold text-4xl'>
          <Text className='text-black'>SUPA</Text>MENU
        </Text>
        <Text className='text-slate-600 font-bold mt-4 text-center'>Welcome...</Text>
        <Text className='text-slate-300 font-bold mt-4 text-center mb-4'>Please fill in the information</Text>

        <View className='mt-6 flex flex-col gap-y-2 items-center'>
          {error.length > 0 && (
            <Text className='mt-4 text-red-500 text-center'>{error}</Text>
          )}
          {fields.map((field, index) => (
            <Input
              key={index}
              Icon={field.icon}
              placeholder={field.placeholder}
              onChangeText={handleChange(field.value)}
              onBlur={handleBlur(field.value)}
              value={values[field.value]}
              security={field.secure}
              type={field?.type}
              borderColor={
                touched[field.value] && errors[field.value]
                  ? "red"
                  : "gray"
              }
              className=""
              placeholder={field.placeholder}
            />
          ))}
        </View>
        <Link href={'/login'} className='shadow-md shadow-black mt-6 p-4 w-full bg-[#e38a3d] rounded-lg'>
          <Text className='text-white text-center font-bold'>Proceed</Text>
        </Link>
        <Text className='text-center font-bold text-slate-400 mt-4'>OR</Text>
        <Text className='text-slate-400 text-center mt-2'>if you have a PMG account</Text>

        <View className='text-center w-full shadow-md shadow-black self-center mt-4 p-4 bg-[#e38a3d] rounded-lg'>
          <Pressable className='text-white text-center font-bold' onPress={handleSubmit}>
            <Text className='text-center font-bold text-white'>{loading ? "Registering..." : "Register"}</Text>
          </Pressable>
        </View>

        <Text className='text-slate-400 text-center mt-2'>
          Don't have an account? <Text className='font-bold text-[#e38a3d]'>Register</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;