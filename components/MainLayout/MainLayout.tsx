import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

type Props = {
  children?: JSX.Element;
  authStatusText: string;
  displayName: string;
  hasAuth: boolean;
};

const MainLayout: React.FC<Props> = ({ children, displayName, hasAuth }: Props): JSX.Element => (
  <>
    <Header hasAuth={hasAuth} displayName={displayName} />
    {children}
    <Footer />
  </>
);

export default MainLayout;
