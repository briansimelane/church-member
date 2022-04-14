import { ref } from 'vue'
import { uploadBytes, getDownloadURL } from "firebase/storage"
import { ref as fileRef } from "@firebase/storage"
import {  storage } from '../firebase/config'

const useStorage = () => {
    const error = ref(null)
    const url = ref(null)
    const filePath = ref(null)

    const uploadFile = async (file) => {
        filePath.value = `simulations/${file.name}`
        const storageRef = fileRef(storage, filePath.value)

        try {
            const res = await uploadBytes(storageRef, file)
            console.log("Called from upload file: ", res)
            //url.value = getDownloadURL(res.fileRef)
        } catch (err) {
            console.log(err.message)
            error.value = err.message
        }
    }


    return { error, url, filePath, uploadFile }
}

export default useStorage