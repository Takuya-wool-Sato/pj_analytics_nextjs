import Link from 'next/link'
import { getArticles } from '../lib/newt'
// import styles from '@/app/page.module.css'
// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Newt・Next.jsブログ',
//   description: 'NewtとNext.jsを利用したブログです',
// }

export default async function Home() {
  const articles = await getArticles()
  return (
    <>
      <h1 className="text-2xl">Newt(お知らせ投稿ヘッドレスCMS)</h1>
      <div className="flex justify-between flex-wrap mt-10">
        <div className="card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5 min-h-full grid gap-4">
            <div>
              <div className="title text-lg font-bold">Newtとは</div>
              <ul>
                <li>
                  <a href="https://www.newt.so/">公式サイト</a>
                </li>
                <li>
                  ・お知らせやブログ投稿目的のコンテンツ管理CMSです。同様のものとして、Micro
                  CMSがあります。
                </li>
              </ul>
            </div>
            <div>
              <div className="title text-lg font-bold">内容</div>
              <ul>
                <li>
                  ・ここ最近リリースされたものとして、NewtのUIや機能に興味があったのと、Next.jsで正しく連携できるか確かめたいと思い実装しました。
                </li>
              </ul>
            </div>
            <div>
              <div className="title text-lg font-bold">実装</div>
              <ul>
                <li>
                  ・実装は以下の記事を参考にしました↓
                  <br />
                  <a href="https://www.newt.so/docs/tutorials/get-contents-in-nextjs">
                    NewtとNext.js (App Router) を利用してブログを作成する
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul>
        {articles.map((article) => {
          return (
            <a
              href={`articles/${article.slug}`}
              className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-96"
              key={article._id}
            >
              <div className="p-5 min-h-full card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="title">
                  <h5 className="mb-2 text-xl font-semibold">
                    {article.title}
                  </h5>
                </div>
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium mt-2">
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </div>
              </div>
            </a>
          )
        })}
      </ul>
    </>
  )
}
