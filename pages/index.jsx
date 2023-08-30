import React from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';

export default function Home() {

  return (
    <>
      <div className="fixed-background"></div>
      <div className="content-wrapper">
        <div className="content">

          {/* SEO対策のためのmetaタグ */}
          <Head>
            <title>サイトタイトル</title>
            <meta name="Description" content="サイト説明文" />
          </Head>

          {/* ヘッダー */}
          <header>
            <h1>サイトタイトル</h1>
            {/* タイトルスタイルを適用 */}
            <div>メニューボタン（仮）</div>
          </header>

          {/* グローバルナビゲーションメニュー */}
          <nav className="gnavi">
            <div>サイトメニュー</div>
            <ul>
              {/* 内部リンク */}
              <li><Link href="./" >メニュー１</Link></li>
              <li><Link href="./" >メニュー２</Link></li>
              <li><Link href="./" >メニュー３</Link></li>
              <li><Link href="./" >メニュー４</Link></li>
              <li><Link href="./" >メニュー５</Link></li>
              {/* 外部リンク：新しいタブで開く&"noopener noreferrer" */}
              <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">メニュー6</a></li>
              <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">メニュー7</a></li>
              <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">メニュー8</a></li>
            </ul>
          </nav>

          {/* メイン */}
          <main>
            メインコンテンツ
            {/* コンテナスタイルを適用 */}
            <div className="bg-blue-500 text-white p-4 rounded w-[100px]">
              ボタン
            </div>
            <section><h2>セクション1</h2></section>
            <section><h2>セクション2</h2></section>
            <section><h2>セクション3</h2></section>
          </main>

          {/* フッター */}
          <footer>
            <p>会社情報</p>
            <p>利用規約</p>
            <p>プライバシーポリシー</p>
            <p>特定商取引法に基づく表記</p>
            {/* コンテナスタイルを適用 */}
          </footer>

          <div className="copyright">
            <p>© 2023 futa</p>
          </div>

        </div>
      </div>
    </>
  );
};
