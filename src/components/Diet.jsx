import React from 'react'
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
        <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Calorie Tracker</h1>
      </div>
        <UploadImage prompt={input_prompt} loading={"Calculating Calories..."}/>
    </>
  )
}

export default Diet
