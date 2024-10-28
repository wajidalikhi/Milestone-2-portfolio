export default function about() {
  return (
    // about Section
    <section className="py-14">
      <div className="container w-full">
        <section>
          <div className="flex flex-col justify-between gap-10 lg:h-[600px] lg:gap-10">
            <div className="h-[150px] lg:w-full">
              <h1 className=" ps-44 text-[50px] font-bold uppercase md:text-left text-black text-center">
                reach out me
              </h1>
            </div>
            <div className="flex flex-col justify-between md:h-[450px] h-auto md:flex-row">
              <div className="flex flex-col justify-around px-5 md:h-auto h-[300px] md:w-[40%] w-full">
                <div>
                  <h3 className=" ps-44 text-center text-[18px] font-bold md:text-left text-black">
                    +92 316 2071268
                  </h3>
                  <h3 className=" ps-44 text-center text-[18px] font-bold md:text-left text-black">
                    aliw5592@gmail.com
                  </h3>
                </div>
                <div>
                  <p className="ps-44 text-base md:text-left text-center font-medium uppercase text-[#141313]">
                    Malir, Karachi.
                  </p>
                </div>
              </div>

              <div className="px- bg-gradient-to-r from-[#5257dc] to-[#6c81d8] md:w-[60%]">
                <form className="mx-auto max-w-full space-y-4 rounded-lg p-6">
                  {/* First Line: Name and Email */}
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1">
                      <label
                        htmlFor="name"
                        className="block text-lg font-medium text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full border-b bg-transparent p-2 text-white" //need to modified on focus
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="email"
                        className="block text-lg font-medium text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full border-b bg-transparent p-2 text-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Second Line: Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full border-b bg-transparent p-2 text-white"
                      required
                    />
                  </div>

                  {/* Third Line: Attach File */}
                  <div className="flex items-center">
                    <label
                      htmlFor="file"
                      className="cursor-pointer rounded-md bg-transparent px-4 py-2 font-semibold uppercase text-white transition duration-300 ease-in-out hover:bg-[#381a5b] hover:text-white"
                    >
                      Attach File
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="hidden"
                    />
                  </div>

                  {/* Fourth Line: Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md shadow-[5px_5px_5px_gray]   bg-[#371670] p-2 font-semibold focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:w-[211px]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
