'use client'

import { signIn, signOut } from 'next-auth/react'

// ログインボタン
export const LoginButton = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signIn()}
    >
      signIn
    </button>
  )
}

// ログアウトボタン
export const LogoutButton = () => {
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  )
}
