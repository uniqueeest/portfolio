'use client';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Flex, SectionTitle } from '@/components';
import { LIST_STYLE } from '@/constants/style';

export const Skill = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Flex align="start" gap={12} className="text-18">
      <SectionTitle
        className="text-blue"
        size="medium"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        Skill
      </SectionTitle>
      <SectionTitle
        size="small"
        tag="h3"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        Front-End
      </SectionTitle>
      <ul
        className={LIST_STYLE}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        <li>JavaScript, React, Next js, TypeScript, HTML/CSS</li>
        <li>
          주로 React를 사용하여 웹을 만듭니다. 재사용 로직을 분리하기 위해
          custom Hooks를 자유롭게 활용합니다. 다양한 디자인 패턴에 대해 관심이
          있으며, 아토믹 디자인 패턴, 컴파운드 컴포넌트 패턴 등을 사용합니다.
        </li>
        <li>
          Suspense, Error Boundary, React query 등 최신 리액트 관련 기술에
          관심이 많으며, 꾸준히 스터디를 하며 적절히 활용하기 위해 노력합니다.
        </li>
        <li>
          비동기 처리에 대한 이해를 바탕으로 promise, async/await 함수를
          사용하여 문제 해결을 하고, JS의 자료형, 메서드, 함수 등을 적절히
          사용할 수 있습니다.
        </li>
      </ul>
      <SectionTitle
        size="small"
        tag="h3"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        Back-End
      </SectionTitle>
      <ul
        className={LIST_STYLE}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <li>Node.js</li>
        <li>
          Node.js를 활용하여 기본적인 3계층 구조를 설계할 수 있고, api 구축이
          가능합니다.
        </li>
      </ul>
      <SectionTitle
        size="small"
        tag="h3"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        Database
      </SectionTitle>
      <ul
        className={LIST_STYLE}
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        <li>MongoDB</li>
        <li>MongoDB를 활용하여 NoSql database를 구축할 수 있습니다.</li>
      </ul>
    </Flex>
  );
};
