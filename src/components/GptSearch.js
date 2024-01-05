import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-[100vh] w-screen object-cover"
          src={BG_URL}
          alt="back-image"
        />
      </div>
      <div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch