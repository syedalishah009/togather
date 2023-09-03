import React from 'react'

const SignUp = () => {
    return (
        <div className='flex justify-center mt-[47px]'>
        <div class="flex flex-wrap bg-white w-[875px] h-[960px]">
            <div class="flex w-full flex-col md:w-1/2">
               
                <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                    <p class="text-left text-[34px] font-[400]">CREATE AN ACCOUNT</p>
                    <p class="mt-2 text-[14px] text-left text-gray-500">Already have an account? <span className='text-black'>Log in</span></p>
                    <button class="-2 mt-[39px] flex items-center justify-center h-[48px] rounded-[24px] border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img class="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt /> Log in with Google</button>
                    <button class="-2 mt-[10px] flex items-center justify-center h-[48px] rounded-[24px] border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img class="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt /> Log in with Google</button>
                    <button class="-2 mt-[10px] flex items-center justify-center h-[48px] rounded-[24px] border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img class="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt /> Log in with Google</button>
                    <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
                        <div class="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
                    </div>
                    <form class="flex flex-col pt-3 md:pt-8">
                        <div class="flex flex-col pt-4">
                            <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                <input type="email" id="login-email" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                            </div>
                        </div>
                        <div class="mb-12 flex flex-col pt-4">
                            <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                <input type="password" id="login-password" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
                            </div>
                        </div>
                        <button type="submit" class="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Log in</button>
                    </form>
                    <div class="py-12 text-center">
                        <p class="whitespace-nowrap text-gray-600">
                            Don't have an account?
                            <a href="#" class="underline-offset-4 font-semibold text-gray-900 underline">Sign up for free.</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
               
                <img class="-z-1 absolute top-0 w-full object-fit h-[953px] " src="./images/signup.png" />
            </div>
        </div>
        </div>
    )
}

export default SignUp