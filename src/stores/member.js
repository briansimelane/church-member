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
        womensFellowship: false,
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
        //memberData: this.member,
      circuit: this.member.circuit,
      society: this.member.society,
      classNumber: this.member.classNumber,
      title: this.member.title,
      firstName: this.member.firstName,
      middleName: this.member.middleName,
      surname: this.member.surname,
      knownAs: this.member.knownAs,
      birthDate: this.member.birthDate,
      gender: this.member.gender,
      cellNumber: this.member.cellNumber,
      otherNumber: this.member.otherNumber,
      email: this.member.email,
      homeAddress: this.member.homeAddress,
      communicationMethod: {
        cellphone: this.member.communicationMethod.cellphone,
        announcements: this.member.communicationMethod.announcements,
        email: this.member.communicationMethod.email,
        facebook: this.member.communicationMethod.facebook,
        whatsapp: this.member.communicationMethod.whatsapp
      },
      organisations: {
        childrensMinistry: this.member.organisations.childrensMinistry,
        wesleyGuild: this.member.organisations.wesleyGuild,
        forum: this.member.organisations.forum,
        womensManyano: this.member.organisations.womensManyano,
        womensFellowship: this.member.organisations.womensFellowship,
        preachers: this.member.organisations.preachers,
        yam: this.member.organisations.yam,
        methsoc: this.member.organisations.methsoc,
        ymg: this.member.organisations.ymg,
        music: this.member.organisations.music,
        ywm: this.member.organisations.ywm,
        evangelism: this.member.organisations.evangelism,
        notAmember: this.member.organisations.notAmember,
        other: this.member.organisations.other
      },
      employmentStatus: {
        ftEmployed: this.member.employmentStatus.ftEmployed,
        ptEmployed: this.member.employmentStatus.ptEmployed,
        pensioner: this.member.employmentStatus.pensioner,
        unemployed: this.member.employmentStatus.unemployed,
        businessOwner: this.member.employmentStatus.businessOwner,
        scholar: this.member.employmentStatus.scholar,
        ftStudent: this.member.employmentStatus.ftStudent,
        ptStudent: this.member.employmentStatus.ptStudent,
        other: this.member.employmentStatus.other
      },
      formalEducation: {
        highestLevel: this.member.formalEducation.highestLevel,
        other: this.member.formalEducation.other
      },
      fieldOfStudy: {
        agriculture: this.member.fieldOfStudy.agriculture,
        architecture: this.member.fieldOfStudy.architecture,
        arts: this.member.fieldOfStudy.arts,
        business: this.member.fieldOfStudy.business,
        civil: this.member.fieldOfStudy.civil,
        education: this.member.fieldOfStudy.education,
        electrical: this.member.fieldOfStudy.electrical,
        engineering: this.member.fieldOfStudy.engineering,
        finance: this.member.fieldOfStudy.finance,
        healthcare: this.member.fieldOfStudy.healthcare,
        hospitality: this.member.fieldOfStudy.hospitality,
        humanResources: this.member.fieldOfStudy.humanResources,
        informationTechnology: this.member.fieldOfStudy.informationTechnology,
        law: this.member.fieldOfStudy.law,
        linguistics: this.member.fieldOfStudy.linguistics,
        lifeSciences: this.member.fieldOfStudy.lifeSciences,
        marketing: this.member.fieldOfStudy.marketing,
        mathematics: this.member.fieldOfStudy.mathematics,
        military: this.member.fieldOfStudy.military,
        officeAdmin: this.member.fieldOfStudy.officeAdmin,
        philosophy: this.member.fieldOfStudy.philosophy,
        physicalEd: this.member.fieldOfStudy.physicalEd,
        psychology: this.member.fieldOfStudy.psychology,
        publicAdmin: this.member.fieldOfStudy.publicAdmin,
        safety: this.member.fieldOfStudy.safety,
        tourism: this.member.fieldOfStudy.tourism,
        otherField: this.member.fieldOfStudy.otherField,
        otherSkill: this.member.fieldOfStudy.otherSkill
      },
      plannedGiving: {
        tithe: this.member.plannedGiving.tithe,
        titheFrequency: this.member.plannedGiving.titheFrequency,
        titheAmountRange: this.member.plannedGiving.titheAmountRange,
        pledge: this.member.plannedGiving.pledge,
        pledgeFrequency: this.member.plannedGiving.pledgeFrequency,
        pledgeAmountRange: this.member.plannedGiving.pledgeAmountRange,
        donation: this.member.plannedGiving.donation,
        donationFrequency: this.member.plannedGiving.donationFrequency,
        donationAmountRange: this.member.plannedGiving.donationFrequency
      },
      nextOfKin: {
        name: this.member.nextOfKin.name,
        surname: this.member.nextOfKin.surname,
        number: this.member.nextOfKin.number
      }

      }).then(() => {
        this.loading = false
      })
    }
  }
})
