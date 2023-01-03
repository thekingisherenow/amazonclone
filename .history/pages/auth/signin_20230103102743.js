import { getProviders, signIn } from "next-auth/react"
import Image from "next/image"

export default function SignIn({ providers }) {
  return (
    <>
    <div className="bg-amazon w-30 text-center mx-auto  ">

     <Image src="https://links.papareact.com/f90"
            width={140} height={30} alt=""
            className='cursor-pointer mt-4 px-4 '
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