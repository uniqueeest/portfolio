import { Line, SectionTitle, Spacing } from '@/components';
import {
  Contact,
  Education,
  Introduce,
  Portfolio,
  Skill,
  WorkExperience,
} from './_components';

export default function Home() {
  return (
    <section className="flex flex-col gap-6 py-20 w-[1020px]">
      <SectionTitle size="large" data-aos="fade-up" data-aos-duration="1000">
        기술 이력서
      </SectionTitle>
      <SectionTitle
        size="small"
        tag="h3"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        프론트엔드 개발자 최윤재입니다.
      </SectionTitle>
      <Contact />
      <Line data-aos="fade-up" data-aos-duration="1000" />
      <Introduce />
      <Line
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      />
      <Skill />
      <Line
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      />
      <WorkExperience />
      <Line
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      />
      <Portfolio />
      <Line
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      />
      <Education />
      <Spacing size={24} />
    </section>
  );
}
