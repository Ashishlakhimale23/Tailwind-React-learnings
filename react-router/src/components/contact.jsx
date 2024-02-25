function Contact (){
    return(
      <div class="flex justify-center items-center w-full min-h-screen ">
    <div class="bg-cyan-700 md:flex-row overflow-hidden md:space-x-6 md:space-y-0 sm:p-12 flex flex-col space-y-6 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
         

        <div class="flex flex-col space-y-8 justify-between">
            <div class="font-bold text-4xl tracking-wide">
                <h1>Contact Us</h1>
                <p class="pt-2 text-cyan-100 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis laboriosam asperiores magnam!</p>
            </div>
            <div class="flex flex-col space-y-6">
                <div class="inline-flex space-x-2 items-center">
                    <ion-icon name="call" class="text-teal-300 text-xl"></ion-icon>
                    <span>10290902992</span>
                </div>
                <div class="inline-flex space-x-2 items-center">
                    <ion-icon name="mail" class="text-teal-300 text-xl"></ion-icon>
                    <span>10290902992</span>
                </div>
                <div class="inline-flex space-x-2 items-center">
                    <ion-icon name="pin" class="text-teal-300 text-xl"></ion-icon>
                    <span>10290902992</span>
                </div>
            </div>
            <div class="flex space-x-4 text-lg">
                <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
                <a href=""><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
                <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
            </div>
        </div>
        <div class="relative">
            <div class="w-40 h-40 z-0 absolute rounded-full -right-20 -top-20 bg-teal-300"></div>
            <div class="w-40 h-40 z-0 absolute rounded-full -left-20 -bottom-20 bg-teal-300"></div>
        <div class="bg-white relative z-10 rounded-xl shadow-lg p-8 text-gray-600 md:w-96">
            <form action="" class="flex flex-col space-y-4">

                <div>
                   <label for="" class="text-sm">Your name</label>
                
                    <input type="text" class=" mt-2 w-full ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                </div>

                <div>
                    <label for="" class="text-sm">Email id</label>
                 
                     <input type="text" placeholder="Email" class=" mt-2 w-full ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                 </div>

                 <div>
                    <label for="" class="text-sm">Message</label>
                 
                     <textarea placeholder="Message" rows="4" class="mt-2 w-full ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"></textarea>
                 </div>

                 <button class="inline-block self-end bg-cyan-700 text-white rounded-lg px-6 py-2 uppercase text-sm font-bold">send messsage</button>

            </form>

        </div>
    </div>

       

    </div>
    

  </div>)
}
export default Contact