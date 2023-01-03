import { getProviders, signIn } from "next-auth/react"
import Image from "next/image"

export default function SignIn({ providers }) {
  return (
    <>
    <div className="bg-amazon  max-w-xl  flex items-center mx-auto  ">

     <Image src="https://links.papareact.com/f90"
            width={200} height={50} alt=""
            className='cursor-pointer object-cover mt-4 px-4 '
            />
            </div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}