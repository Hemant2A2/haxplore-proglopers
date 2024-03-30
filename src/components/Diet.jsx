/*
    1) Add the UploadImage component to the Diet component
    2) set the prompt template as 
    input_prompt="""
    You are an expert in nutritionist where you need to see the food items from the image
                and calculate the total calories, also provide the details of every food items with calories intake
                is below format

                1. Item 1 - no of calories
                2. Item 2 - no of calories
                ----
                ----

                """
    3) The calories of each food item in the image should be displayed in a list
*/


import React, { useContext, useEffect } from 'react'
import UploadImage from './UploadImage'

const Diet = () => {

    const input_prompt=`
        You are an expert in nutritionist where you need to see the food items from the image
        and calculate the total calories, also provide the details of every food items with calories intake
        in the below format

                    1. Item 1 - no of calories
                    2. Item 2 - no of calories
                    ----
                    ----

        Also provide suggestions to make the meal more healthy

                `
    
  return (
    <>
        <UploadImage prompt={input_prompt}/>
    </>
  )
}

export default Diet
