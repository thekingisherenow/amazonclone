import { getProviders, signIn } from "next-auth/react"
import Image from "next/image"

export default function SignIn({ providers }) {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-amazon w-28 m-10   flex items-center mx-auto  ">

        <Image src="https://links.papareact.com/f90"
          width={200} height={50} alt=""
          className='cursor-pointer object-cover mt-4 px-4 '
        />
      </div>
      <div className="p-10 border max-w-xs mx-auto border-gray-400">
        <h1 className="text-2xl">Sign in </h1>

        <p>Email or Phone number</p>
        <input className="w-full border-gray-200 border"/> 
        <button className="button" >Continue</button>

        <p className="text-sm text-gray-400">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

        {/* <p className="text-sm text-gray-400" >New to Amazon?</p> */}


     

      <p className="text-center p-5">OR</p>

        <div className="text-center">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="border flex text-center cursor-pointer"
           onClick={() => signIn(provider.id)}
          >
            <img className="w-10 h-10" src="https://i.ibb.co/cbtQNd5/google.jpg" />
            <p className="text-center my-2 ml-2"
             >
              Sign in with {provider.name}
            </p>
          </div>
        ))}
        </div>
      
        </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}