import { Flex, Line, SectionTitle, Spacing } from '@/components';
import { LINK_STYLE, LIST_STYLE } from '@/constants/style';
import { cn } from '@/utils';

export const Portfolio = () => {
  return (
    <Flex align="start" gap={12} className="text-18">
      <SectionTitle className="text-blue" size="medium">
        Portfolio
      </SectionTitle>
      <SectionTitle size="small" tag="h3">
        [K피노키오] 국회의원 공약 이행률 확인 사이트
      </SectionTitle>
      <a
        href="https://k-pinocchio.co.kr"
        target="_blank"
        rel="noreferrer noopener"
        className={LINK_STYLE}
      >
        https://k-pinocchio.co.kr
      </a>
      <a
        href="https://github.com/WIP-Who-Is-the-Pinocchio/wip-next"
        target="_blank"
        rel="noreferrer noopener"
        className={cn('text-gray600', LINK_STYLE)}
      >
        Github Link
      </a>
      <Spacing size={0} />
      <span>사용기술 : Next js, Typescript, tailwind css</span>
      <span className="text-gray600">2023.12.01 ~ 2024.04.03</span>
      <span className="font-bold">Description</span>
      <ul className={LIST_STYLE}>
        <li>
          총선을 앞두고 2030 세대들이 정치에 조금은 더 관심을 가졌으면 하는
          바람으로 국회의원의 공약이행률을 알려주는 웹 사이트를 제작하였습니다.
        </li>
      </ul>
      <span className="font-bold">What did I do</span>
      <ul className={LIST_STYLE}>
        <li>
          탭 버튼, 아코디언 컴포넌트, 테이블 등의 컴포넌트들을 라이브러리를
          사용하지 않고 직접 구현했습니다.
        </li>
        <li>
          검색엔진 최적화(SEO)와 웹 접근성 향상을 위해 많은 고민을 하였고, 이를
          통해 키워드 최적화, 스크린 리더 호환성 개선을 구현했습니다. 이로
          인하여 키워드 검색 시 페이지가 상위 노출이 되었습니다.
        </li>
        <li>
          모바일 기기 사용자의 접근성을 고려하여, 모바일 친화적 화면을
          구현하였습니다.
        </li>
      </ul>
      <Spacing size={0} />
      <Line />
      <Spacing size={0} />
      <SectionTitle size="small" tag="h3">
        [마음이음] 봉사 커뮤니티 모집 플랫폼
      </SectionTitle>
      <a
        href=" http://maumeum.site"
        target="_blank"
        rel="noreferrer noopener"
        className={LINK_STYLE}
      >
        http://maumeum.site
      </a>
      <a
        href="https://github.com/orgs/maeumeum/repositorie"
        target="_blank"
        rel="noreferrer noopener"
        className={cn('text-gray600', LINK_STYLE)}
      >
        Github Link
      </a>
      <Spacing size={0} />
      <span>
        React, Vite, Typescript, styled-components, zustand, storybook
      </span>
      <span className="text-gray600">2023.05.27 ~ 2023.07.08</span>
      <span className="font-bold">Description</span>
      <span className="text-gray600">컴포넌트에 대한 이해와 추상화</span>
      <ul className={LIST_STYLE}>
        <li>
          사용성이 높아진 컴포넌트와 코드 품질의 향상을 위해 추상화를
          진행하였습니다.
        </li>
        <li>
          자주 썼던 Form 태그들을 추상화를 진행하였습니다. 각 에러들을 분기
          처리를 하였고, props를 통하여 데이터를 넘겨주는 과정을 통해 추상화를
          진행하였습니다.
        </li>
        <li>
          추상화를 통해 재사용성이 높아진 컴포넌트를 구현할 수 있었고, 코드
          품질의 향상을 경험했습니다.
        </li>
      </ul>
      <Spacing size={0} />
      <span className="text-gray600">쓰로틀링, 무한스크롤 구현</span>
      <ul className={LIST_STYLE}>
        <li>
          쓰로틀링을 사용하지 않고 스크롤 이벤트에 따라 무한스크롤을 구현하려고
          하니 스크롤 이벤트가 연속적으로 발생하는 것을 확인했습니다.
        </li>
        <li>
          이러한 문제를 해결하기 위해 쓰로틀링 함수를 구현하여 일정 시간이 지날
          경우에만 스크롤 이벤트가 재호출될 수 있도록 구현하였습니다.
        </li>
        <li>
          쓰로틀링 함수를 유틸 폴더로 분리하여 관리함으로써 재사용성을
          높였습니다.
        </li>
      </ul>
      <Spacing size={0} />
      <span className="text-gray600">스토리북 적용과 뷰 테스트</span>
      <ul className={LIST_STYLE}>
        <li>
          원하는 컴포넌트만 개별적으로 확인할 수 있기 때문에 편리하게 컴포넌트의
          테스트가 가능하였습니다.
        </li>
        <li>
          뷰 테스트의 간편화로 레이아웃과 스타일의 통일성이 향상되었습니다.
        </li>
        <li>
          문서화를 시킬 수 있었기 때문에 프로젝트 기간이 짧았음에도 불구하고
          협업의 원활함을 가져올 수 있었습니다.
        </li>
      </ul>
      <Spacing size={0} />
      <span className="text-gray600">반응형 구현</span>
      <ul className={LIST_STYLE}>
        <li>
          media query와 react-responsive를 사용하여 반응형을 구현하였습니다.
        </li>
        <li>
          뷰 테스트의 간편화로 레이아웃과 스타일의 통일성이 향상되었습니다.
        </li>
        <li>
          웹과 모바일의 레이아웃이 다른 부분이 존재하였기에, media query로만
          구현하는 것에는 한계가 있었습니다. react-responsive를 사용하여 웹과
          모바일의 차별화 된 디자인을 구현할 수 있었습니다.
        </li>
      </ul>
      <Spacing size={0} />
      <span className="text-gray600">라이브러리를 선택하는 기준 정립</span>
      <ul className={LIST_STYLE}>
        <li>
          라이브러리를 선택함에 있어서 기준을 가지고 선택했다기보다는 많은
          사람들이 정리해놓은 자료들이 많아서 사용한 경우가 대다수였습니다.
          그렇기 때문에 프로젝트에 적합한 라이브러리가 아닐 때도 있었습니다.
        </li>
        <li>
          많은 고민을 통해 저만의 라이브러리를 선택하는 기준을 정립할 수
          있었습니다.
        </li>
      </ul>
    </Flex>
  );
};
