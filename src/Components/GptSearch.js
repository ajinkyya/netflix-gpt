import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMAGE } from '../Utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BG_IMAGE}
          alt="bg-image"
        />
      </div>
        <GptSearchBar />
    </div>
  )
}

export default GptSearch