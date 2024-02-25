import Link from 'next/link'

export default function Vitest() {
  return (
    <div>
      <h1 className="text-2xl">Vitestの導入と確認</h1>
      <div className="card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <div className="p-5 min-h-full grid gap-4">
          <div>
            <div className="title text-lg">内容</div>
            <ul>
              <li>・テストフレームワークVitestで、Reactのテスト作成してみる</li>
            </ul>
          </div>
          <div>
            <div className="title text-lg">参考にした記事</div>
            <ul>
              <li>
                <a href="https://zenn.dev/tfutada/articles/5557b780050574">
                  Vitest 手動セットアップ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="title text-lg">実装したこと</div>
            <ul>
              <li>・このページのテストを作成</li>
              <li>・見出しh1が「Vitestの導入と確認」であることをテスト</li>
            </ul>
          </div>
          <div>
            <div className="title text-lg">テストコード</div>
            <pre>
              <code>{`
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Vitest from './page'

test('Vitest', () => {
  render(<Vitest />)
  expect(
    screen.getByRole('heading', { level: 1, name: 'Vitestの導入と確認' })
  ).toBeDefined()
})`}</code>
            </pre>
          </div>
          <div>
            <div className="title text-lg">テスト実行</div>
            <ul>
              <li>・package.jsonにて、npm run testで実行できるよう記述</li>
              <li>・問題なくパス出来れば、↓の画像にようになる</li>
            </ul>
            <img src="204816.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
