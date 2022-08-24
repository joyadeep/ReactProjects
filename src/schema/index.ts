import * as yup from 'yup'

const contactSchema=yup.object({
    fullname:yup.string().required("Fullname is a required field"),
    email:yup.string().email().required("Email field cannot be empty"),
    message:yup.string().required("Message field cannot be empty")
})
export default contactSchema;