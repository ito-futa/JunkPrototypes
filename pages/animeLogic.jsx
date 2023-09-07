import { React, useState, useEffect } from 'react';

export default function Anime() {
  // // // スクロールでアニメーション // // //
  const useScrollAnimation = () => {
    useEffect(() => {
      const handleScroll = () => {
        const elements = document.querySelectorAll('.jsAnime');
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add('fadeAnime2');
          }
        });
      };

      // スクロールイベントの登録
      window.addEventListener('scroll', handleScroll);

      // コンポーネントのアンマウント時にイベントを解除
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  };
};