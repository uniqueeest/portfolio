'use client';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Flex, SectionTitle } from '@/components';

export const Introduce = () => {
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
        data-aos-duration="1800"
      >
        Introduce
      </SectionTitle>
      <span
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        기본기가 탄탄한 개발자는 항상 가파른 러닝 커브를 거듭할 것이라고
        자신합니다. 그래서 항상 기본기에 중점을 두고 공부하며, JS와 CS 지식을
        공식 문서와 책, 강의를 통해 학습하고 노션 등을 활용해 체계적으로
        정리하는 것을 즐깁니다.
      </span>
      <span
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2200"
      >
        또한, 정형화 된 코드가 무조건적인 정답이라고 생각하지 않습니다. 그렇기
        때문에 오픈 소스와 GitHub에서 다른 개발자들의 코드를 탐구하고 이해하여
        저만의 코드로 풀어나가고자 노력합니다.
      </span>
      <span
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2400"
      >
        항상 성장과 학습에 열정을 가지고 있습니다. 지식을 습득하는 것을 바탕으로
        코드를 개선해나가는 것을 즐기며, 개발자로서의 전문성과 효율성을 높이기
        위해 노력하고 있습니다.
      </span>
    </Flex>
  );
};
