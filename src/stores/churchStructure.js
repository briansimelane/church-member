import { defineStore } from 'pinia'
import { colRef} from '../firebase/config'

export const usechurchstructureStore = defineStore({
  id: 'churchstructure',
  state: () => ({
    districts: [
      {number: 100, name: 'Cape of Good Hope', alias: 'District100'},
      {number: 200, name: 'Grahamstown', alias: 'District200'},
      {number: 300, name: 'Queenstown', alias: 'District300'},
      {number: 400, name: 'Namibia', alias: 'District400'},
      {number: 500, name: 'Mokalamontle', alias: 'District500'},
      {number: 600, name: 'Nothern Free State & Lesotho', alias: 'District600'},
      {number: 700, name: 'Natal Costal', alias: 'District700'},
      {number: 800, name: 'Natal West', alias: 'District800'},
      {number: 900, name: 'Central', alias: 'District900'},
      {number: 1000, name: 'Highveld & Eswatini', alias: 'District1000'},
      {number: 1100, name: 'Limpopo', alias: 'District1100'},
      {number: 1300, name: 'Clarkebury', alias: 'District1300'},
      {number: 1400, name: 'Camdeboo', alias: 'District1400'},
      {number: 1500, name: 'Molopo', alias: 'District1500'},
    ],
    circuitList: {
      District100: [{number: 101, name: 'Table Bay', alias: 'Circuit101'},
                    {number: 102, name: 'Belville', alias: 'Circuit102'},
                    {number: 103, name: 'Dumisani', alias: 'Circuit103'},
                    {number: 106, name: 'Helderberg', alias: 'Circuit106'},
                    {number: 107, name: 'Worcester', alias: 'Circuit107'},
                    {number: 109, name: 'Wynberg', alias: 'Circuit109'},
                    {number: 110, name: 'Fish Hoek', alias: 'Circuit110'},
                    {number: 111, name: 'Heathfield', alias: 'Circuit111'},
                    {number: 112, name: 'Victoria Road', alias: 'Circuit112'},
                    {number: 114, name: 'Blue Downs', alias: 'Circuit114'},
                    {number: 115, name: 'Namaqualand Mission', alias: 'Circuit115'},
                    {number: 120, name: 'Tygerberg', alias: 'Circuit120'},
                    {number: 121, name: 'Cape West Coast', alias: 'Circuit121'},
                    {number: 122, name: 'Bongani', alias: 'Circuit122'},
                    {number: 123, name: 'Cape Gateway', alias: 'Circuit123'},
                    {number: 125, name: 'Mowbray', alias: 'Circuit125'},
                    {number: 127, name: 'Stellenbosch', alias: 'Circuit127'},
                    {number: 128, name: 'False Bay', alias: 'Circuit128'},
                    {number: 129, name: 'Paarl Valley (North East Cluster)', alias: 'Circuit129'},
                    {number: 132, name: 'Brede River', alias: 'Circuit132'}],
      District200: [{number: 201, name: 'Grahamstown', alias: 'Circuit201'},
                    {number: 206, name: 'Bathrust - Port Alfred', alias: 'Circuit202'},
                    {number: 207, name: 'Salem', alias: 'Circuit207'},
                    {number: 208, name: 'Alexandria', alias: 'Circuit208'},
                    {number: 211, name: 'Port Elizabeth Central', alias: 'Circuit211'},
                    {number: 212, name: 'Port Elizabeth Algoa', alias: 'Circuit212'},
                    {number: 214, name: 'Humansdorp', alias: 'Circuit214'},
                    {number: 215, name: 'Wintershoek', alias: 'Circuit215'},
                    {number: 216, name: 'Uitenhage Kabah', alias: 'Circuit216'},
                    {number: 218, name: 'Port Elizabeth North', alias: 'Circuit218'},
                    {number: 219, name: 'Sundays River Valley', alias: 'Circuit219'},
                    {number: 224, name: 'Port Elizabeth Algoa', alias: 'Circuit212'},
                  ],
      District300: [],
      District400: [],
      District500: [],
      District600: [],
      District700: [],
      District800: [],
      District900: [],
      District1000: [],
      District1100: [],
      District1300: [],
      District1400: [],
      District1500: [],

    },
    societiesList: {
      Circuit101: [{number: '101-01', name: 'Table Bay Society 1', alias: 'Society101-01'}],
      Circuit102: [{number: '102-01', name: 'Society 1', alias: 'Society102-01'}],
    },
    

    circuits: [{name: 'Jabavu Circuit', alias: 'Jabavu' }, {name: 'John Masiza Section', alias: 'JohnMasiza'}],
    societies: {
      Jabavu: [{name: 'Dube'}, {name: 'Ikwezi'}, {name: "Jabulani"}, {name: "Jabavu 7am"}, {name: "Jabavu 11am"}, {name: "Molapo"}, {name: "Moroka"}, {name: "Nancefield"}],
      JohnMasiza: [{name: "John Masiza Society"}]
      }
    }
  ),
  getters: {
    getCircuits: (state) => state.circuitList
    
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
