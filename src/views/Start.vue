<script setup>
import { ref } from 'vue';
//import { CheckIcon } from '@heroicons/vue/solid'
import { useMemberStore } from '@/stores/member'
import { usechurchstructureStore } from '@/stores/churchStructure'




import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import Section3 from './Section3.vue';
import Section4a from './Section4a.vue';
import Section4b from './Section4b.vue';
import Section5 from './Section5.vue';
import Section6 from './Section6.vue';
import End from './End.vue';
import InfoGathered from '@/components/InfoGathered.vue'


const store = useMemberStore()
const structure = usechurchstructureStore()

const circuits = structure.circuits
const societies =ref('')

const chooseCircuit = (circuit) => {
store.$patch({ member: {
    circuit: circuit.name },
    navigationLog: 0.5  })

        if(circuit.alias == "Jabavu"){
                societies.value = [{name: 'Dube'}, {name: 'Ikwezi'}, {name: "Jabulani"}, {name: "Jabavu 7am"}, {name: "Jabavu 11am"}, {name: "Moroka"}, {name: "Zondi"}]
            }

        if(circuit.alias == "JohnMasiza"){
        societies.value = [{name: "John Masiza Society"}]
        }

}

const goBack = () => {
   store.$patch({ 
    navigationLog: 0 }) 
}

const carouselSlides = ["@/assets/images/bg-1.png", "bg-2", "bg-3", "bg-4", "bg-5", "bg-6", "bg-7", "bg-8", "bg-9", "bg-10"]



</script>

<template>
 <div>
     <!-- landing page to choose Circuit or Section -->
        <div class="bg-white" v-if="store.navigationLog == 0">
            <div class="max-w-7xl mx-auto text-center py-2 px-4 sm:px-6 lg:py-2 lg:px-8">
        <div class="">
            <img class="w-auto h-32 mx-auto" src = "@/assets/mcsalogo.png" alt = "MCSA Logo"/>
        </div>

              <h2 class="text-3xl font-extrabold tracking-tight text-red-900 sm:text-4xl">
                <span class="block">Member Details Registration</span> <br>
              </h2>

              <div>
                <p class="mt-0 mb-5 text-gray-900">
    Please note that by starting the registration process, you consent to the South African POPI Act provisions on data security and usage.
                  </p>
              </div>
            <h3 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              
                <span class="block">Ready to start? </span>
                <span class="block">Choose your circuit or section:</span>
            </h3>
            <div class="mt-4 flex justify-center">
                <div class="ml-3 flex rounded-md shadow" v-for="circuit in circuits" :key="circuit">
                <button class=" inline-flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                @click="chooseCircuit(circuit)"> {{ circuit.name }} </button>
                </div>
            </div>
            
            </div>

            <div class="mb-5">
                    <InfoGathered></InfoGathered>
                </div>
        </div>

    

     <!-- landing page to choose society -->
         <div class="bg-gray-100" v-if="store.navigationLog == 0.5">
            <div class="max-w-7xl mx-auto text-center py-4 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">             
                <span class="block">Choose your society:</span>
            </h2>
            <div class="mt-2 ml-2 md:mt-8 flex justify-center flex-wrap">
                <div class="flex rounded-md mt-2 " v-for="society in societies" :key="society">
                <button class="ml-3 flex items-center justify-center px-3 py-2 md:px-5 md:py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700" 
                @click="store.$patch({ member: {
                    society: society.name},
                    navigationLog: 1 })"> {{ society.name }} </button>
                </div>
                
            </div>
            <div class="mt-2 flex justify-center">
                <button class="text-red-600 ml-1" @click="goBack">Go back &nbsp;</button> <span> to choose circuit.</span>
            </div>
            </div>
        </div>


<!-- Section 1: Personal Information Start -->
<Section1 v-if="store.navigationLog == 1"></Section1>

<!-- Section 2: Organisational Membership -->
  <Section2 v-if="store.navigationLog == 2" ></Section2>

<!--Section 3: Employment / Schooling -->
<Section3 v-if="store.navigationLog == 3"></Section3>

<!-- Section 4a: Formal Education -->
<Section4a v-if="store.navigationLog == 4"></Section4a>

<!-- Section 4a: Field of Study -->
<Section4b v-if="store.navigationLog == 5"></Section4b>

<!-- Section 5: Giving -->
<Section5 v-if="store.navigationLog == 6"></Section5>

<!-- Section 6: Next of kin -->
<Section6 v-if="store.navigationLog == 7"></Section6>

<!-- End Section -->
    <End v-if="store.navigationLog == 8"></End>

</div> 
</template>



<style scoped>
.carousel {
    max-height: 100vh;
    height: 20vh;
}

</style>