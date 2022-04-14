<script setup>
import { ref } from 'vue';
import { useTopNav } from '@/stores/topnav'

const topnav = useTopNav()
const steps = topnav.steps
 // Statuses = 'complete', 'current', 'upcoming'


</script>

<template>
<!-- Progress navigation start -->
  <div aria-label="Progress" class="hidden md:block">
    <ol role="list" class="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
      <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative md:flex-1 md:flex">
        <span v-if="step.status === 'complete'" class="group flex items-center w-full">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full group-hover:bg-red-800">
              <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <span class="ml-4 text-sm font-medium text-gray-900">{{ step.name }}</span>
          </span>
        </span>
        <span v-else-if="step.status === 'current'" class="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
          <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-red-600 rounded-full">
            <span class="text-red-600">{{ step.id }}</span>
          </span>
          <span class="ml-4 text-sm font-medium text-red-600">{{ step.name }}</span>
        </span>
        <span v-else class="group flex items-center">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
              <span class="text-gray-500 group-hover:text-gray-900">{{ step.id }}</span>
            </span>
            <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</span>
          </span>
        </span>
        <template v-if="stepIdx !== steps.length - 1">
          <!-- Arrow separator for lg screens and up -->
          <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
            <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
              <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
            </svg>
          </div>
        </template>
      </li >
    </ol >
  </div >
<!--Progress navigation end -->

<!--Progress navigation start -->
    <div aria-label="ProgressMobile" class="m-5 flex justify-center md:hidden">
        <ol role="list" class="flex items-center">
            <li v-for="(step, stepIdx) in steps" :key="step.name" :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative']">
            <template v-if="step.status === 'complete'">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="h-0.5 w-full bg-red-600" />
                </div>
                <span href="#" class="relative w-8 h-8 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-900">
                    <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" />
                    <span class="sr-only">{{ step.name }}</span>
                </span>
            </template>
            <template v-else-if="step.status === 'current'" condition="step.status === 'current'">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="h-0.5 w-full bg-gray-200" />
                </div>
                <span href="#" class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-red-600 rounded-full" aria-current="step">
                    <span class="h-2.5 w-2.5 bg-red-600 rounded-full" aria-hidden="true" />
                    <span class="sr-only">{{ step.name }}</span>
                </span>
            </template>
            <template v-else>
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="h-0.5 w-full bg-gray-200" />
                </div>
                <span href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
                    <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
                    <span class="sr-only">{{ step.name }}</span>
                </span>
            </template>
        </li>
    </ol>
  </div >
<!-- Progress navigation mobile end-->

</template>