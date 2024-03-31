import React from 'react'
import UploadImage from './UploadImage'

const Prescription = () => {

    const input_prompt=`
    You are a pharmacist where you need to see the medicines and number of times it needs to be taken in a day from the prescription.
    Also, provide the details of every medicine with the number of times it needs to be taken in a day in below format.Also for each medicine.


    1. {Name of Medicine 1}
    Timings:  
    Amount to be taken:

    2. {Name of Medicine 2}
    Timings: 
    Amount to be taken:
    

    ---
    ---

    Make a routine for the patient to take the medicines on time and make all medicines at correct timings are taken as mentioned in the prescription.
    Specify whether to take it before/after breakfast/lunch/dinner. 
    For example: if a medicine needs to be taken after breakfast, write that "Take it after breakfast" and make the font of the medicine name in bold.
    Make sure not to provide incorrect dosage or timings for the medicines.

    `

  return (
    <>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Medication Reminder</h1>
      </div>
        <UploadImage prompt={input_prompt} loading={"Extracting Medicine Timings..."}/>
    </>
  )
}

export default Prescription
