import { defineStore } from 'pinia'

export const useTopNav = defineStore({
  id: 'topNav',
  state: () => ({
    steps: [
      { id: '01', name: 'Personal Information', status: 'current' },
      { id: '02', name: 'Organisational Membership', status: 'upcoming' },
      { id: '03', name: 'Employment / Schooling', status: 'upcoming' },
      { id: '04', name: 'Formal Education', status: 'upcoming' },
      { id: '05', name: 'Skills & Knowledge', status: 'upcoming' },
      { id: '06', name: 'Giving', status: 'upcoming' },
      { id: '07', name: 'Next of Kin', status: 'upcoming' }         
    ]     
    
  })
})
