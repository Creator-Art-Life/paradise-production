'use client'

import BlurPage from '@/components/global/blur-page';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ClipboardIcon } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
  text: string
  link: string
  icon: ReactNode
}

const MobileWarning: React.FC<Props> = ({ children, text, link, icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      // Проверка ширины экрана
      const isMobileByWidth = window.innerWidth <= 768;

      // Проверка user-agent для определения мобильного устройства
      const isMobileByAgent = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
        navigator.userAgent
      );

      // Если хотя бы один метод возвращает true — это мобильное устройство
      setIsMobile(isMobileByWidth || isMobileByAgent);
    };

    checkIfMobile(); // Первичная проверка при монтировании

    // Обновление при изменении размера окна
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  {
    if (isMobile) {
      return (
        <BlurPage>
          <div className="absolute -top-10 -left-10 right-0 bottom-0 z-30 flex items-center justify-center backdrop-blur-md bg-background/50">
            <Card>
              <CardHeader>
                <CardTitle className=''>Warning</CardTitle>
                <CardDescription>
                  This content is only available on PC.
                </CardDescription>
                <Link
                  href={link}
                  className="p-2 w-fit bg-secondary text-white rounded-md flex items-center gap-2"
                >
                  {icon}
                  {text}
                </Link>
              </CardHeader>
            </Card>
          </div>
        </BlurPage>
      );
    }
  }

  return <>{children}</>;
};

export default MobileWarning;
