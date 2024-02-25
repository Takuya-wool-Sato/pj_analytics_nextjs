'use client'

import useSWR from 'swr'

export default async function Swr() {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    'https://api.thecatapi.com/v1/images/search',
    fetcher
  )

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <h1 className="text-2xl">SWRの検証</h1>
      <div className="flex justify-between flex-wrap mt-10">
        <div className="card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5 min-h-full grid gap-4">
            <div>
              <div className="title text-lg font-bold">SWRとは</div>
              <ul>
                <li>データフェッチ用のReactフックライブラリ</li>
                <li>
                  ・RSCで使用が出来ない為、クライアントコンポーネントで使用する
                </li>
                <li>
                  ・ページに頻繁に更新されるデータが含まれており、データを事前レンダリングする必要がない場合は、SWR
                  が最適
                </li>
              </ul>
            </div>
            <div>
              <div className="title text-lg font-bold">実装したこと</div>
              <ul>
                <li>・SWRでデータフェッチ（猫画像取得）</li>
              </ul>
              {data.map((item: any) => (
                <img
                  src={item.url}
                  alt=""
                  className="max-h-24 w-24"
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
