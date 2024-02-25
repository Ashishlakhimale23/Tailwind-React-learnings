function Footer(){
    return (
      <footer >
        <div className="flex  pl-5 pr-5 pt-20 pb-5 justify-center items-center shadow-md -top-44">
          <div className="flex flex-1 ">
            <div>
              <div className="text-xl font-bold flex items-center pl-3 ">
                <span>your</span>
                <span className="text-orange-600">logo</span>
                <span className="text-gray-400">*</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-1/2" >
            <div className="flex flex-col flex-1">
              <span className="text-xl font-semibold mb-2">Resources</span>
              <span>Home</span>
              <span>About</span>
            </div>
            <div className="flex flex-col flex-1 ">
              <span className="text-xl font-semibold mb-2">Follow us</span>
              <span>Github</span>
              <span>Discord</span>
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-xl font-semibold mb-2" >Follow us</span>
              <span>Terms&Condition</span>
              <span>Privacy Policy</span>
            </div>

          </div>
        </div>
      </footer>
    );
}
export default Footer