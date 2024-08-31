import React from 'react'

const TwoStripes = () => {
  return (
    <div className="bg-[#263c28] ">

    <div className="w-[99vw] h-[80vh] bg-[#eefae4]bg-[#263c28] rounded-t-3xl ">
    <div className="h-[160px] bg-[#a5e17d] flex items-center justify-center -rotate-[10deg] top-[24vh] w-[110vw] -left-[9%] relative" style={{transform:"rotate:45deg"}}>
      <p
        className="text-transparent text-[5.2rem] font-roboto"
        style={{
          WebkitTextStroke: "2px white",
          wordSpacing:"1rem",
          
        }}
      >
        Early Detection, Biggest Harvest
      </p>
    </div>
  
    <div className="h-[160px] w-[110vw] relative -left-[5%] bg-[#81b760] flex items-center justify-center rotate-[6deg]">
      <p
        className="text-transparent text-[5.2rem] "
        style={{
          WebkitTextStroke: "2px white",
          
        }}
      >
        Save Your Crop from Disease and Pest
      </p>
    </div>
  </div>
    </div>
  
  
  
  
  )
}

export default TwoStripes