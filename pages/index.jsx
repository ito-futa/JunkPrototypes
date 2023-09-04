import { React, useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import { AiOutlineTwitter, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLine } from '@fortawesome/free-brands-svg-icons';

export default function Home() {

  // メニューの開閉を制御するisMenuOpenをuseStateで設定
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // toggleMenuを実行時にisMenuOpenの状態を切り替える
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // ウインドウの横幅に応じてisMenuOpenを設定
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {  // PCの場合（768px以上）
        setIsMenuOpen(true); // 初期段階ではメニューを開く
      } else {  // モバイルの場合
        setIsMenuOpen(false); // 初期段階ではメニューを閉じる
      }
    };

    // 初期ロード時に一回だけチェック
    handleResize();

    // ウィンドウリサイズ時にもチェック
    window.addEventListener('resize', handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // スマホの場合、メニューを閉じる処理
  const closeMenu = () => {
    // スマホモードであれば、メニューを閉じる
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed-background"></div>
      <div className="content-wrapper">
        <div className="content">

          {/* SEO対策のためのmetaタグ */}
          <Head>
            <title>サイトタイトル</title>
            <meta name="description" content="サイト説明文" />
          </Head>

          {/* ヘッダー */}
          <header>
            <h1>サイトタイトル</h1>
            {/* メニューボタンをクリックすると開く */}
            <button className={isMenuOpen ? "menuBtn menuCloseBtn" : "menuBtn"} onClick={toggleMenu}>{isMenuOpen ? "Close" : "Menu"}</button>
          </header>

          {/* グローバルナビゲーションメニュー */}
          <nav className="gnavi" style={{ display: isMenuOpen ? "block" : "none" }}>
            <div>MENU</div>
            <ul>
              {/* 内部リンク */}
              <li><a onClick={closeMenu} href="./#" >TOPへ</a></li>
              <li><a onClick={closeMenu} href="./#店舗紹介" >店舗紹介</a></li>
              <li><a onClick={closeMenu} href="./#サービス一覧" >サービス一覧</a></li>
              <li><a onClick={closeMenu} href="./#スタッフ紹介" >スタッフ紹介</a></li>
              <li><a onClick={closeMenu} href="./#お知らせ" >お知らせ</a></li>
              <li><a onClick={closeMenu} href="./#会社情報" >会社情報</a></li>
              <li><Link href="./" >メニュー５</Link></li>
              {/* 外部リンク：新しいタブで開く&"noopener noreferrer" */}
              <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">メニュー6</a></li>
            </ul>
          </nav>

          {/* メイン */}
          <main>
            <Image
              src="/image/futa.jpg" // 画像のパス（必須）
              alt="description" // 代替テキスト（必須）
              width={500} // 画像の幅（必須）
              height={300} // 画像の高さ（必須）
              quality={90} // 画像の品質（1-100）
              objectFit="cover" // 画像のオブジェクトフィット（'fill', 'contain', 'cover', 'none', 'scale-down'）
              layout="responsive"
            />

            <section>
              <h2 id="店舗紹介">店舗紹介</h2>
              <p>本文</p>
            </section>
            <section>
              <h2 id="サービス一覧">サービス一覧</h2>
              <p>本文</p>
            </section>
            <section>
              <h2 id="スタッフ紹介">スタッフ紹介</h2>
              <p>本文</p>
            </section>
            <section>
              <h2 id="お知らせ">お知らせ</h2>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
              <p>本文</p>
            </section>


          </main>

          {/* フッター */}
          <footer>
            <h2 id="会社情報">会社情報</h2>
            <p>住所</p>
            <p>営業時間</p>
            <p>定休日</p>
            <div className="googleMap">
              <iframe
                // GoogleMapの埋め込み住所URL
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12962.672164346553!2d139.7527995!3d35.685175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d8064d%3A0xd11a5f0b379e6db7!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1693725610955!5m2!1sja!2sjp"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="240px"
              ></iframe>
            </div>
            {/* コンテナスタイルを適用 */}
            <div className="socialLinkIcon">
              <a href="https://twitter.com/"><AiOutlineTwitter /></a>
              <a href="https://www.instagram.com/"><AiFillInstagram /></a>
              <a href="https://www.facebook.com/"><AiFillFacebook /></a>
              <a href="https://twitter.com/" className="snsIconAdjustment"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="https://line.me/ja/" className="snsIconAdjustment"><FontAwesomeIcon icon={faLine} /></a>
            </div>
          </footer>

          <div className="copyright">
            <p>© 2023 futa</p>
          </div>

        </div>
      </div >
    </>
  );
};
