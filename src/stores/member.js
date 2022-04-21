import { defineStore } from 'pinia'
import { colRef} from '../firebase/config'
import { doc, addDoc } from 'firebase/firestore'

export const useMemberStore = defineStore({
  id: 'member',
  state: () => ({
    member: {
      circuit: '',
      society: '',
      classNumber: '',
      title: '',
      firstName: '',
      middleName: '',
      surname: '',
      knownAs: '',
      birthDate: '',
      gender: '',
      cellNumber: '',
      otherNumber: '',
      email: '',
      homeAddress: '',
      communicationMethod: {
        cellphone: false,
        announcements: false,
        email: false,
        facebook: false,
        whatsapp: false
      },
      organisations: {
        childrensMinistry: false,
        wesleyGuild: false,
        forum: false,
        womensManyano: false,
        preachers: false,
        yam: false,
        methsoc: false,
        ymg: false,
        music: false,
        ywm: false,
        evangelism: false,
        notAmember: false,
        other: ''
      },
      employmentStatus: {
        ftEmployed: false,
        ptEmployed: false,
        pensioner: false,
        unemployed: false,
        businessOwner: false,
        scholar: false,
        ftStudent: false,
        ptStudent: false,
        other: ''
      },
      formalEducation: {
        highestLevel: '',
        other: ''
      },
      fieldOfStudy: {
        agriculture: false,
        architecture: false,
        arts: false,
        business: false,
        civil: false,
        education: false,
        electrical: false,
        engineering: false,
        finance: false,
        healthcare: false,
        hospitality: false,
        humanResources: false,
        informationTechnology: false,
        law: false,
        linguistics: false,
        lifeSciences: false,
        marketing: false,
        mathematics: false,
        military: false,
        officeAdmin: false,
        philosophy: false,
        physicalEd: false,
        psychology: false,
        publicAdmin: false,
        safety: false,
        tourism: false,
        otherField: '',
        otherSkill: ''
      },
      plannedGiving: {
        tithe: false,
        titheFrequency: '',
        titheAmountRange: '',
        pledge: false,
        pledgeFrequency: '',
        pledgeAmountRange: '',
        donation: false,
        donationFrequency: '',
        donationAmountRange: ''
      },
      nextOfKin: {
        name: '',
        surname: '',
        number: ''
      }
    },
    navigationLog: 0,
    loading: false,
    navigationUser: 0,
    user: false
  }),
  getters: {
    
  },
  actions: {
    setNavigationLog(num) {
      this.navigationLog = num
    },
    async addMemberToDatabase() {
      this.loading = true
      addDoc(colRef, {
        memberData: this.member
      }).then(() => {
        this.loading = false
      })
    }
  }
})
