import Head from 'next/head';
import { memo } from 'react';

import PersonalInfoPage from 'components/PersonalInfoPage/PersonalInfoPage';

const PersonalInfo = memo(() => (
  <>
    <Head>
      <title>Toxin | Персональная информация</title>
      <meta
        name="description"
        content="Здесь собрана вся информация о Вас, которая есть в нашей системе"
      />
      <meta name="keywords" content="отель, номер, аккаунт, инфо, информация" />
    </Head>
    <PersonalInfoPage />
  </>
));

PersonalInfo.displayName = 'PersonalInfo';

export default PersonalInfo;
