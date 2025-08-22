import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Card/Card';
import { Htag } from '@/components/Htag/Htag';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { type JSX } from 'react';
import { Like } from '@/components/Like/Like';
import { TimeTag } from '@/components/TimeTag';

export default function Home(): JSX.Element {
  return (
    <>
      <Card>
        <BreadCrumbs />
        <Htag tag="h3">Как работать с CSS Grid</Htag>
        <Paragraph size="s">
          Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
          сеток в CSS. Гриды подойдут и для верстки основных областей страницы..
        </Paragraph>
        <TimeTag>3 минуты</TimeTag>
        <Button appearance="blue" className="buttonref">
          Читать
        </Button>
      </Card>
      <Like size="m" />
    </>
  );
}
