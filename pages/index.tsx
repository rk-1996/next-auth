import Link from 'next/link'
import Layout from '../components/Layout'
import { signIn, signOut, useSession } from "next-auth/client"

export default function IndexPage() {
  // `session` should match `callbacks.session()` in `NextAuth()`
  const [session] = useSession()
  // const session = 
  //   {
  //     user:{
  //       tokken:"jbhjvhjvhjvhjvhjvhjvhjhjvhjvh",
  //       email:"rajkamdiya@gmail.com"
  //     }
  //   }
  
  return (
    <Layout session={session} title="Home | Next.js + TypeScript Example">
      <>
        {!session && 
        <>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500 sign-in-page-height">
            <div className="container mx-auto h-full flex justify-center items-center">
              <div className="w-1/3">
                <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                  <div className="mb-4">
                    <label className="font-bold text-gray-600 block mb-2">Username or Email</label>
                    <input type="text" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username" />
                  </div>

                  <div className="mb-4">
                    <label className="font-bold text-gray-600 block mb-2">Password</label>
                    <input type="text" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password" />
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="bg-color-13aeb7 hover:bg-teal text-white font-bold py-2 px-4 rounded">
                      Login
                    </button>

                    <a className="no-underline inline-block align-baseline font-bold text-sm text-gray-600 hover:text-blue-dark float-right" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}
        {session && <>
          {/* Signed in as {session.user.email} <br/>
          <button onClick={() => signOut()}>Sign out</button> */}
        </>}
    </>
    </Layout>
  )
}
