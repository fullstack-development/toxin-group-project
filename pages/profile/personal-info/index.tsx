import Head from 'next/head';

import { PersonalInfoPage } from 'modules/Profile';

const PersonalInfo = (): JSX.Element => (
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
);

export default PersonalInfo;
