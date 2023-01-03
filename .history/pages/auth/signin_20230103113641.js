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
      <div>
        <h1 className="text-2xl">Sign in </h1>

      </div>
      <div>



        <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="button"
             onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
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