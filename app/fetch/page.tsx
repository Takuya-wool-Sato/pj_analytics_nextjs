import Image from 'next/image'
import { Suspense } from 'react'
import Spinner from '../loading'

async function getNoCacheData() {
  const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo', {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getNoCacheCats() {
  const res = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=9',
    {
      cache: 'no-store',
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getRevalidateData() {
  const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo', {
    next: { revalidate: 60 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getRevalidateCats() {
  const res = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=9',
    {
      next: { revalidate: 60 },
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getForceCacheData() {
  const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo', {
    cache: 'force-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getForceCacheCats() {
  const res = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=9',
    {
      cache: 'force-cache',
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

function formatDate(date: string) {
  var formatdate = new Date(date)
  return formatdate.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
  } as Intl.DateTimeFormatOptions)
}
export default async function Home() {
  const NoCacheData = await getNoCacheData()
  const RevalidateData = await getRevalidateData()
  const ForceCacheData = await getForceCacheData()

  const NoCacheCats = await getNoCacheCats()
  const RevalidateCats = await getRevalidateCats()
  const ForceCacheCats = await getForceCacheCats()

  return (
    <>
      <h1 className="text-2xl">App routerによるfetchの検証</h1>
      <div className="card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <div className="p-5 min-h-full grid gap-4">
          <div>
            <div className="title text-lg">内容</div>
            <ul>
              <li>
                ・App
                routerによりデータ取得部分の仕様が変更になったので実際に検証してみる
              </li>
              <li>
                <a href="https://nextjs.org/docs/app/building-your-application/data-fetching">
                  公式サイト
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="title text-lg">検証したこと</div>
            <ul>
              <li>・3種類のfetchの挙動の確認</li>
            </ul>
          </div>
          <div>
            <div className="title text-lg">実装したこと</div>
            <ul>
              <li>・猫画像APIにより、画像を9枚取得して表示させる</li>
              <li>・fetchの仕方に3種類あるので、それぞれで実装</li>
            </ul>
          </div>
          <div>
            <div className="title text-lg">結果とまとめ</div>
            <ul>
              <li>・</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mt-10">
        <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-96">
          <div className="p-5 min-h-full">
            <div className="title">
              キャッシュなし
              <br />
              (NoCacheData)
            </div>
            <div className="text-sm font-normal text-end">
              {formatDate(NoCacheData.datetime)}
            </div>
            <p>画像</p>
            <div className="flex flex-wrap justify-between gap-2">
              {NoCacheCats.slice(0, 9).map(
                (cat: { url: string }, id: number) => (
                  <Suspense fallback={<Spinner />} key={id}>
                    <img src={cat.url} alt="" className="max-h-24 w-24" />
                  </Suspense>
                )
              )}
            </div>
            <div className="mt-4">
              <div className="title text-lg">挙動</div>
              <ul>
                <li>・リクエストの度にデータを取得して表示</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-96">
          <div className="p-5 min-h-full">
            <div className="title">
              一定間隔(60秒)のデータ再検証ISR
              <br />
              (RevalidateData)
            </div>
            <div className="text-sm font-normal text-end">
              {formatDate(RevalidateData.datetime)}
            </div>
            <p>画像</p>
            <div className="flex flex-wrap justify-between gap-2">
              {RevalidateCats.slice(0, 9).map(
                (cat: { url: string }, id: number) => (
                  <Suspense fallback={<Spinner />} key={id}>
                    <img src={cat.url} alt="" className="max-h-24 w-24" />
                  </Suspense>
                )
              )}
            </div>
            <div className="mt-4">
              <div className="title text-lg">挙動</div>
              <ul>
                <li>
                  ・60秒の間はキャッシュにより、データ更新行われず画像を表示
                </li>
                <li>・再検証を行う間隔の設定は変更可能</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-96">
          <div className="p-5 min-h-full">
            <div className="title">
              永続的キャッシュ
              <br />
              (ForceCacheData)
            </div>
            <div className="text-sm font-normal text-end">
              {formatDate(ForceCacheData.datetime)}
            </div>
            <p>画像</p>
            <div className="flex flex-wrap justify-between gap-2">
              {ForceCacheCats.slice(0, 9).map(
                (cat: { url: string }, id: number) => (
                  <Suspense fallback={<Spinner />} key={id}>
                    <img src={cat.url} alt="" className="max-h-24 w-24" />
                  </Suspense>
                )
              )}
            </div>
            <div className="mt-4">
              <div className="title text-lg">挙動</div>
              <ul>
                <li>
                  ・ビルドのタイミングでデータを取得してキャッシュを永続的に持ち画像を表示
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
