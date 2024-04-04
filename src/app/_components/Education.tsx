import { Flex, SectionTitle } from '@/components';

export const Education = () => {
  return (
    <Flex align="start" gap={12} className="text-18">
      <SectionTitle className="text-blue" size="medium">
        Education
      </SectionTitle>
      <SectionTitle size="small" tag="h3">
        2016.03 ~ 2022.02 가천대학교 바이오나노학과
      </SectionTitle>
    </Flex>
  );
};
