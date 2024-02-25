function Home(){
    return (
      <div>
        <div className="flex xl:flex-col">
          <div className="pl-32 pt-32 pr-32 xl: flex justify-center py-32">
            <img
              src="https://i.pinimg.com/564x/37/66/4f/37664f010a6cebd4e5883b173a6fbaeb.jpg"
              alt=""
              className="h-96"
            />
          </div>
          <div className="flex flex-col  pl-64  justify-center items-center xl:p-0">
            <span className="text-4xl font-bold ">Download now</span>
            <span className="text-3xl font-bold flex flex-row-reverse">
              lorem ipsum
            </span>

            <div className="flex flex-row-reverse">
              <button className="mt-5 bg-orange-600 w-44 rounded-md  text-white flex py-4 px-3 justify-between flex-row-reverse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download Now
              </button>
            </div>
          </div>
        </div>
        <div className="pl-32 pt-20 flex justify-center xl:pl-0">
            <img src="https://i.pinimg.com/564x/d0/59/83/d059839f9662060fe5eafa618492a908.jpg" alt="" className="h-96"/>
        </div>
      </div>
    );

}
export default Home