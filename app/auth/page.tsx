import Image from 'next/image'
import { Suspense } from 'react'
import { LoginButton, LogoutButton } from '../components/button'
import { getServerSession } from 'next-auth/next'
import { options } from '../options'

export default async function Auth() {
  const session = await getServerSession(options)
  const user = session?.user // ログインしていなければnullになる。
  return (
    <>
      <h1 className="text-2xl">Auth.jsの検証</h1>
      <div className="flex justify-between flex-wrap mt-10">
        <div className="card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5 min-h-full grid gap-4">
            <div>
              <div className="title text-lg font-bold">検証したいこと</div>
              <ul>
                <li>Auth.jsによる認証機能の実装と確認</li>
              </ul>
            </div>
            <div>
              <div className="title text-lg font-bold">実装したこと</div>
              <ul>
                <li>・githubアカウントによる認証を実装</li>
                <li>・signup後アカウント情報取得表示</li>
                <li>
                  ・テストアカウント(email: user1@example.com, password:
                  password1)でもログイン可能
                </li>
              </ul>
            </div>
            <div>
              <div className="title text-lg font-bold">参考にした記事</div>
              <ul>
                <li>
                  <a href="https://zenn.dev/tfutada/articles/5557b780050574">
                    Next.js 13 App Router での Auth.js の使い方
                  </a>
                </li>
              </ul>
            </div>
            {user ? (
              <div>
                <p>{user.name}</p>
                {user.image ? (
                  <>
                    <p>
                      <img
                        src={user.image}
                        alt=""
                        className="w-10 rounded-lg"
                      />
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div></div>
            )}
            <div>{user ? <LogoutButton /> : <LoginButton />}</div>
          </div>
        </div>
      </div>
    </>
  )
}
