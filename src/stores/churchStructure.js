import { defineStore } from 'pinia'
import { colRef} from '../firebase/config'

export const usechurchstructureStore = defineStore({
  id: 'churchstructure',
  state: () => ({
    districts: [
      {number: 100, name: 'Cape of Good Hope', alias: 'District100'},
      {number: 200, name: 'Grahamstown', alias: 'District200'},
      {number: 300, name: 'Kumkani Hintsa', alias: 'District300'},
      {number: 400, name: 'Namibia', alias: 'District400'},
      {number: 500, name: 'Mokala Montle', alias: 'District500'},
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
                    {number: 207, name: 'Salem & Alexandria', alias: 'Circuit207'},
                    {number: 208, name: 'Alexandria', alias: 'Circuit208'},
                    {number: 211, name: 'Port Elizabeth Central', alias: 'Circuit211'},
                    {number: 212, name: 'Port Elizabeth Algoa', alias: 'Circuit212'},
                    {number: 214, name: 'Humansdorp', alias: 'Circuit214'},
                    {number: 215, name: 'Wintershoek', alias: 'Circuit215'},
                    {number: 216, name: 'Uitenhage Kabah', alias: 'Circuit216'},
                    {number: 218, name: 'Port Elizabeth North', alias: 'Circuit218'},
                    {number: 219, name: 'Sundays River Valley', alias: 'Circuit219'},
                    {number: 224, name: 'Port Elizabeth Kwazakhele', alias: 'Circuit224'},
                    {number: 227, name: 'Somerset East - Glen Avon', alias: 'Circuit227'},
                    {number: 228, name: 'Kat Valley', alias: 'Circuit228'},
                    {number: 230, name: 'Healdtown', alias: 'Circuit230'},
                    {number: 231, name: 'Port Elizabeth West', alias: 'Circuit231'},
                    {number: 232, name: 'Motherwell', alias: 'Circuit232'},
                    {number: 233, name: 'Annshaw', alias: 'Circuit233'},
                    {number: 234, name: 'Tyhume - Amatole Basin', alias: 'Circuit234'},
                    {number: 235, name: 'Keiskammahoek', alias: 'Circuit235'},
                    {number: 236, name: 'Perksdale', alias: 'Circuit236'},
                    {number: 237, name: 'Port Elizabeth Zwide', alias: 'Circuit237'},
                    {number: 238, name: 'Ayliff', alias: 'Circuit238'},
                    {number: 239, name: 'Tuku', alias: 'Circuit239'},
                    {number: 240, name: 'Newtondale', alias: 'Circuit240'},
                    {number: 241, name: 'Horton Mission', alias: 'Circuit241'}],
      District300: [{number: 301, name: 'Queenstown', alias: 'Circuit301'},
                    {number: 302, name: 'Queenstown and Lesseyton', alias: 'Circuit302'},
                    {number: 303, name: 'Molteno and Stormberg', alias: 'Circuit303'},
                    {number: 304, name: 'Lukhanji', alias: 'Circuit304'},
                    {number: 305, name: 'Kamastone Mission', alias: 'Circuit305'},
                    {number: 308, name: 'Dimbaza', alias: 'Circuit308'},
                    {number: 309, name: 'Kingwilliamstown', alias: 'Circuit309'},
                    {number: 310, name: 'Kei', alias: 'Circuit310'},
                    {number: 311, name: 'Wesleyville', alias: 'Circuit311'},
                    {number: 312, name: 'Kingwilliamstown', alias: 'Circuit312'},
                    {number: 313, name: 'East London', alias: 'Circuit313'},
                    {number: 314, name: 'East London', alias: 'Circuit314'},
                    {number: 315, name: 'Mount Coke', alias: 'Circuit315'},
                    {number: 316, name: 'Nahoon River', alias: 'Circuit316'},
                    {number: 317, name: 'Tamara', alias: 'Circuit317'},
                    {number: 318, name: 'Mount Arthur', alias: 'Circuit318'},
                    {number: 319, name: 'Fransbury', alias: 'Circuit319'},
                    {number: 320, name: 'Tsomo', alias: 'Circuit320'},
                    {number: 321, name: 'Centane', alias: 'Circuit321'},
                    {number: 322, name: 'Butterworth', alias: 'Circuit322'},
                    {number: 323, name: 'Tsojana', alias: 'Circuit323'},
                    {number: 324, name: 'Cala', alias: 'Circuit324'},
                    {number: 326, name: 'Wodehouse Forests', alias: 'Circuit326'},
                    {number: 327, name: 'Ulundi', alias: 'Circuit327'},
                    {number: 328, name: 'Southern Drakensburg', alias: 'Circuit312'},
                    {number: 329, name: 'Nqabara', alias: 'Circuit329'},
                    {number: 330, name: 'Idutywa', alias: 'Circuit330'},
                    {number: 331, name: 'Fort Malan', alias: 'Circuit331'},
                    {number: 332, name: 'Gcaleka', alias: 'Circuit332'},
                    {number: 333, name: 'Nqamakwe', alias: 'Circuit333'},
                    {number: 336, name: 'Seplan', alias: 'Circuit336'},
                    {number: 339, name: 'Mdantsane North', alias: 'Circuit339'},
                    {number: 340, name: 'Gompo', alias: 'Circuit340'},
                    {number: 350, name: 'Mooiplaas', alias: 'Circuit350'},
                    {number: 360, name: 'Qonce West', alias: 'Circuit360'},
                    {number: 365, name: 'Nowawe', alias: 'Circuit365'},
                    {number: 370, name: 'Bisho Mission', alias: 'Circuit370'},
                    {number: 375, name: 'East London South West', alias: 'Circuit375'},
                    {number: 380, name: 'Imonti West', alias: 'Circuit380'},
                    {number: 385, name: 'Mdantsane South', alias: 'Circuit385'}],
      District400: [{number: 450, name: 'Central North', alias: 'Circuit450'},
                    {number: 451, name: 'Namibia South', alias: 'Circuit451'},
                    {number: 452, name: 'Coastal', alias: 'Circuit452'},
                    {number: 453, name: 'Kavango Mission', alias: 'Circuit453'},
                    {number: 454, name: 'Kokerboom', alias: 'Circuit454'}],
      District500: [],
      District600: [],
      District700: [],
      District800: [],
      District900: [{number: 901, name: 'Central Methodist Mission', alias: 'Circuit901'},
                    {number: 902, name: 'Alexandra - Johannesburg', alias: 'Circuit902'},
                    {number: 903, name: 'Johannesburg North', alias: 'Circuit903'},
                    {number: 904, name: 'Johannesburg West', alias: 'Circuit904'},
                    {number: 906, name: 'South Rand', alias: 'Circuit906'},
                    {number: 908, name: 'Johannesburg East', alias: 'Circuit908'},
                    {number: 909, name: 'Roodepoort', alias: 'Circuit909'},
                    {number: 910, name: 'Fourways', alias: 'Circuit910'},
                    {number: 911, name: 'Zola', alias: 'Circuit911'},
                    {number: 912, name: 'Orlando', alias: 'Circuit912'},
                    {number: 913, name: 'Rand West', alias: 'Circuit913'},
                    {number: 914, name: 'Golden West', alias: 'Circuit914'},
                    {number: 915, name: 'Mogale', alias: 'Circuit915'},
                    {number: 917, name: 'Kopano', alias: 'Circuit917'},
                    {number: 920, name: 'Lichtenburg', alias: 'Circuit920'},
                    {number: 921, name: 'Khunwana', alias: 'Circuit921'},
                    {number: 922, name: 'Matlosana', alias: 'Circuit922'},
                    {number: 925, name: 'Kgatelopele Mission', alias: 'Circuit925'},
                    {number: 928, name: 'Jabavu', alias: 'Circuit928'},
                    {number: 929, name: 'Pimville', alias: 'Circuit929'}],
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
