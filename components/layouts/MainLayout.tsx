import AppHeader from '../AppHeader';

const MainLayout: React.FC = (props) => {
  return (
    <>
      <AppHeader />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default MainLayout;
