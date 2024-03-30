/*
    1) Extract the medicines and number of times it needs to be taken from the prescription.
    2) use the uploadfile component to upload the prescription
    3) set the prompt template as
    input_prompt="""You are a pharmacist where you need to see the medicines and number of times it needs to be taken in a day from the prescription.
                Also, provide the details of every medicine with the number of times it needs to be taken in a day in below format.Also for each medicine, mention whether to take it before or after breakfast,lunch or dinner.

                1. Medicine 1 - 
                timings:   
                before/after breakfast/lunch/dinner
                ---
                ---

                2. Medicine 2 -
                timings:    
                before/after breakfast/lunch/dinner
                ---
                ---

                """
    4) using the medicine timing and use that in the reminder component to set the reminder for the medicines
*/