import { defineStore } from 'pinia'
import { colRef} from '../firebase/config'

export const usechurchstructureStore = defineStore({
  id: 'churchstructure',
  state: () => ({
    circuits: [{name: 'Jabavu Circuit', alias: 'Jabavu' }, {name: 'John Masiza Section', alias: 'JohnMasiza'}],
    societies: {
      Jabavu: [{name: 'Dube'}, {name: 'Ikwezi'}, {name: "Jabulani"}, {name: "Jabavu 7am"}, {name: "Jabavu 11am"}, {name: "Molapo"}, {name: "Moroka"}, {name: "Nancefield"}],
      JohnMasiza: [{name: "John Masiza Society"}]
      }
    }
  ),
  getters: {
    
    
  },
  actions: {
    returnSocieties(alias) {
      let societies
      if(alias == "Jabavu"){
        societies = this.societies.Jabavu
      }

      if(alias == "JohnMasiza"){
        societies = this.societies.JohnMasiza
      }
        
        console.log('From the church structure store. Societies alias: ', societies)
      return { societies }

    }
    
  }
})
