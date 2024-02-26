export default async function Home() {
  return (
    <>
      <h1 className="text-2xl">Next.jsのApp routerによる仕様の検証</h1>
      <div className="card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <div className="p-5 min-h-full grid gap-4">
          <div>
            <div className="title text-lg font-bold">目的</div>
            <ul>
              <li>
                ・Next.js 13.4よりApp routerが安定版となり、page
                routerから様々な仕様が変わっているので、公式や記事から実際に実装してみて検証する
              </li>
            </ul>
          </div>
          <div>
            <div className="title text-lg font-bold">主な検証フロー</div>
            <ul>
              <li>
                ・<a href="https://nextjs.org/docs/app">公式サイト</a>
                から紹介されている技術や、その他よく使われる技術をこのサイトで実際に実装
              </li>
              <li>・実装後どういう挙動になるかなどを確認する</li>
            </ul>
          </div>
          <div>
            <div className="title text-lg font-bold">Gitリポジトリ</div>
            <ul>
              <li>
                <a href="https://github.com/Takuya-wool-Sato/pj_analytics_nextjs">
                  https://github.com/Takuya-wool-Sato/pj_analytics_nextjs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="title text-lg font-bold">使用技術</div>
            <ul>
              <li>・Next.js</li>
              <li>・Vercel</li>
              <li>・tailwindcss</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
