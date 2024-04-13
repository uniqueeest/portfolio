'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Flex, Spacing } from '@/components';
import { LINK_STYLE } from '@/constants/style';

export const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Flex
      className="sm:flex-col sm:items-center"
      direction="row"
      justify="start"
      align="start"
      gap={64}
    >
      <picture className="shrink-0">
        <img
          src="/images/sam.webp"
          alt="sam_main"
          className="rounded-full object-cover object-top w-[300px] h-[300px] sm:mt-10 sm:mb-[-40px] sm:w-[250px] sm:h-[250px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </picture>
      <Flex className="sm:self-start" align="start" gap={16}>
        <Spacing size={32} />
        <Flex direction="row" gap={16}>
          <Image
            src="/icons/email.svg"
            width={24}
            height={24}
            alt="emailIcon"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <a
            className="dark:text-gray100"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            dbswo9795@gmail.com
          </a>
        </Flex>
        <Flex direction="row" gap={16}>
          <Image
            src="/icons/linkedIn.svg"
            width={24}
            height={24}
            alt="linkedInIcon"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <a
            href="https://www.linkedin.com/in/%EC%9C%A4%EC%9E%AC-%EC%B5%9C-86572727b/"
            target="_blank"
            rel="noreferrer noopener"
            className={LINK_STYLE}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            LinkedIn
          </a>
        </Flex>
        <Flex direction="row" gap={16}>
          <Image
            src="/icons/github.svg"
            width={24}
            height={24}
            alt="githubIcon"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <a
            href="https://github.com/uniqueeest"
            target="_blank"
            rel="noreferrer noopener"
            className={LINK_STYLE}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            GitHub
          </a>
        </Flex>
        <Flex direction="row" gap={16}>
          <Image
            src="/icons/notion.svg"
            width={24}
            height={24}
            alt="notionIcon"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <a
            href="https://scalloped-pencil-870.notion.site/194399ffd80e436bb9cdf4a5f1546588"
            target="_blank"
            rel="noreferrer noopener"
            className={LINK_STYLE}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Notion
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};
