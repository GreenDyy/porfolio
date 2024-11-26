import React from 'react'
import './Home.scss'
import { appColors } from '../../constants/appColors'

import { TextComponent,SpaceComponent } from '../../components'

function Home() {
  return (
    <div className='container'>
      <SpaceComponent height={100}/>
      <div style={{ textAlign: 'left', width: '60%'}}>
        <h1 style={{ color: appColors.primary }}>Hello</h1>
        <h2 style={{ color: appColors.primary }}>My name is Huynh Khanh Duy</h2>

        <TextComponent
          text="I'm a developer who likes to do different and cool things, learn from great people"

        />
        <div style={{ flexDirection: 'row', height: 200, background:'purple' }}>

        </div>
      </div>
    </div>
  )
}

export default Home