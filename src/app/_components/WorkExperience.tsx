import { Flex, SectionTitle, Spacing } from '@/components';
import { LIST_STYLE } from '@/constants/style';

export const WorkExperience = () => {
  return (
    <Flex align="start" gap={12} className="text-18">
      <SectionTitle
        className="text-blue"
        size="medium"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        Work Experience
      </SectionTitle>
      <SectionTitle
        className="dark:text-gray100"
        size="small"
        tag="h3"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        퀀터스 테크놀로지스
      </SectionTitle>
      <span
        className="dark:text-gray100"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        Front-End Developer
      </span>
      <span
        className="text-gray600 dark:text-gray300"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        2023.08 ~{' '}
      </span>
      <Spacing size={0} />
      <span
        className="font-bold dark:text-gray100"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        Description
      </span>
      <ul
        className={LIST_STYLE}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <li>
          퀀트 투자 퀀터스의 웹 사이트 유지보수와 리팩토링을 진행하였고, 퀀트
          실전 투자 앱인 퀀터스 프라임을 설계하고 출시하였습니다.
        </li>
      </ul>
      <span
        className="font-bold dark:text-gray100"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        What did I do
      </span>
      <ul
        className={LIST_STYLE}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <li>
          기존 퀀터스의 컴포넌트들은 디자인적으로 공통된 부분이 많아, 아토믹
          디자인 패턴을 적용하여 재사용성이 높은 컴포넌트를 구축함으로써 개발
          효율성을 향상시켰습니다.
        </li>
        <li>
          axios와 fetch를 사용하던 기존 코드에서 react query와 react suspense를
          도입하여, 비동기 데이터 관리를 단순화하고 데이터 캐싱을 통해 네트워크
          요청을 최적화하였습니다.
        </li>
        <li>
          Next.js와 웹뷰 기술을 활용하여 퀀터스 프라임 앱을 개발하고
          출시하였습니다. SSR을 적용하여 퀀트 전략 데이터 처리 속도를 개선,
          사용자 경험을 향상시키는 동시에 초기 로딩 시간을 단축시켰습니다.
        </li>
      </ul>
    </Flex>
  );
};
