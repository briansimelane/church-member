import { defineStore } from 'pinia'
import { membersData } from '../firebase/config'

export const useMemberDataStore = defineStore({
  id: 'memberData',
  state: () => ({
    memberData: membersData
  }),
  getters: {
    
  },
  actions: {
   
  }
})
