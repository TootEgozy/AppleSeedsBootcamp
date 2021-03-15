import React from 'react'
import Q1 from './Q1'
import Q2 from './Q2'
import QuizTitle from './QuizTitle'

export default function Quiz() {
    return (
      <fieldset className="Quiz">
          <QuizTitle/>
          <Q1/>
          <Q2/>
      </fieldset>
    )
}
