import { Flex, SectionTitle } from '@/components';

export const Education = () => {
  return (
    <Flex align="start" gap={12} className="text-18 sm:text-16">
      <SectionTitle
        className="text-blue sm:text-18"
        size="medium"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        Education
      </SectionTitle>
      <SectionTitle
        className="dark:text-gray100 sm:text-18 sm:break-keep"
        size="small"
        tag="h3"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        2016.03 ~ 2022.02 가천대학교 바이오나노학과
      </SectionTitle>
    </Flex>
  );
};
