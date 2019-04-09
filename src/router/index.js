import VueRouter from 'vue-router'

import ExerciseLibrary from '@/components/ExerciseLibrary'
import CustomizeExercise from '@/components/CustomizeExercise'
import CustomizeRoutine from '@/components/CustomizeRoutine'
import UserSelect from '@/components/UserSelect'
import RoutineList from '@/components/RoutineList'

export default new VueRouter({
  routes: [
    {
      path: '/exercise-library',
      name: 'ExerciseLibrary',
      component: ExerciseLibrary
    },
    {
      path: '/routines/edit/custom-exercise/:id',
      name: 'CustomizeExercise',
      component: CustomizeExercise
    },
    {
      path: '/routines/edit/:id',
      name: 'CustomizeRoutine',
      component: CustomizeRoutine
    },
    {
      path: '/sign-in',
      name: 'UserSelect',
      component: UserSelect
    },
	    {
      path: '/',
      name: 'RoutineList',
      component: RoutineList
    }
  ]
})