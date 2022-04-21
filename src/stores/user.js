import { defineStore } from 'pinia'
import { colRef} from '../firebase/config'
import { doc, addDoc } from 'firebase/firestore'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
      id: '',
      name: '',
      email: '',
      district: '',
      circuit: '',
      society: '',
      unlistedCircuit: '',
      unlistedSociety: '',
      isLoggedIn: false
  
  }),
  getters: {
    
  },
  actions: {

  }
})
