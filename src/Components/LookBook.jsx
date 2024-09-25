import React from 'react';
import WinterShoe from './assest/winterShoe.jpg'
import summer from './assest/summer.jpg'
import goPlay from './assest/goPlay.jpg'
import advanture from './assest/advanture.jpg'


// import Bottom from './Bottom';



const LookBook = () => {
  return (
    <div className="bg-zinc-600">
      <div >
        <nav>
        <h1 className='h-72 text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl p-12 sm:p-8 md:p-15 text-slate-400 shadow-lg' style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
  Lookbook
</h1>

          <img className='mx-auto p-5 sm:p-7 md:p-9' src={WinterShoe} alt="img" />
          <div className="container mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-start text-slate-400">
              Fall/Winter  2024</h1>
            <p className="text-cyan-600 text-sm sm:text-base md:text-lg lg:text-xl text-right mb-4 sm:mb-6 md:mb-8 lg:mb-9 ml-2 sm:ml-4 md:ml-6 lg:ml-8">
            Elementum donec leo vulputate sit proin suspendisse<br/>
             malesuada neque proin gravida ut platea vitae duis hac<br/>
              hac vel id ipsum ultricies ut faucibus ultrices.
            </p>
            <div className="text-right mr-4 sm:mr-10 md:mr-20 lg:mr-40 xl:mr-80">
              <a className="text-lg sm:text-xl md:text-2xl underline" href="/lookbook">Shop Now</a>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <nav>
         
          <img className='mx-auto p-5 sm:p-7 md:p-9' src={summer} alt="img" />
          <div className="container mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-start  text-slate-400">Spring/Summer 2024</h1>
            <p className="text-cyan-600 text-sm sm:text-base md:text-lg lg:text-xl text-right mb-4 sm:mb-6 md:mb-8 lg:mb-9 ml-2 sm:ml-4 md:ml-6 lg:ml-8">
            Elementum donec leo vulputate sit proin suspendisse<br/> 
            malesuada neque proin gravida ut platea vitae duis hac<br/>
            hac vel id ipsum ultricies ut faucibus ultrices.
            </p>
            <div className="text-right mr-4 sm:mr-10 md:mr-20 lg:mr-40 xl:mr-80">
              <a className="text-lg sm:text-xl md:text-2xl underline" href="/lookbook">Shop Now</a>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <nav>
         
          <img className='mx-auto p-5 sm:p-7 md:p-9' src={goPlay} alt="img" />
          <div className="container mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-start  text-slate-400">Go & Play</h1>
            <p className="text-cyan-600 text-sm sm:text-base md:text-lg lg:text-xl text-right mb-4 sm:mb-6 md:mb-8 lg:mb-9 ml-2 sm:ml-4 md:ml-6 lg:ml-8">
            Elementum donec leo vulputate sit proin suspendisse<br/> 
            malesuada neque proin gravida ut platea vitae duis hac<br/>
            hac vel id ipsum ultricies ut faucibus ultrices.
            </p>
            <div className="text-right mr-4 sm:mr-10 md:mr-20 lg:mr-40 xl:mr-80">
              <a className="text-lg sm:text-xl md:text-2xl underline" href="/lookbook">Shop Now</a>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <nav>
         
          <img className='mx-auto p-5 sm:p-7 md:p-9' src={advanture} alt="img" />
          <div className="container mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4">
            <h1 className=" text-slate-400 text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-start">Adventurer Gear</h1>
            <p className="text-cyan-600 text-sm sm:text-base md:text-lg lg:text-xl text-right mb-4 sm:mb-6 md:mb-8 lg:mb-9 ml-2 sm:ml-4 md:ml-6 lg:ml-8">
            Elementum donec leo vulputate sit proin suspendisse<br/> 
            malesuada neque proin gravida ut platea vitae duis hac<br/>
            hac vel id ipsum ultricies ut faucibus ultrices.
            </p>
            <div className="text-right mr-4 sm:mr-10 md:mr-20 lg:mr-40 xl:mr-80">
              <a className="text-lg sm:text-xl md:text-2xl underline" href="/lookbook">Shop Now</a>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <div>
        <div>
  
</div>




        </div>
      </div>


    </div>
  )
}

export default LookBook
