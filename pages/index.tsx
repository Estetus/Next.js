import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Card/Card';
import { During } from '@/components/During/During';
import { Htag } from '@/components/Htag/Htag';
import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { Paragraph } from '@/components/Paragraph/Paragraph';

import type { JSX } from 'react';
import { Like } from '@/components/Like/Like';

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
        <During>3 минуты</During>
        <Button appearance="blue" className="buttonref">
          Читать
        </Button>
      </Card>
      <Like size="m" />
    </>
  );
}
