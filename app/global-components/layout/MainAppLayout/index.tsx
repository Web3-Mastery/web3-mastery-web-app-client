import Navbar from '../Navbar';
import Footer from '../Footer';
import SlideInMenu from '../SlideInMenu';
import BackgroundArtifactsWrapper from '../ArtifactsWrapper';
// import Overlay from '../Overlay';
import CustomModal from '../CustomModal';

function MainAppLayout({ children }: ChildProp) {
  return (
    <>
      <SlideInMenu />
      <CustomModal />
      {/* <Overlay /> */}
      <BackgroundArtifactsWrapper>
        <main className="main-app-layout main-app-layout_bg-glass_light font-light min-h-screen md:px-[5%] lg:px-[10%] md:mx-auto text-[14px] z-10">
          <div className="min-h-screen">
            <Navbar />
            {children}
          </div>
          <Footer />
        </main>
      </BackgroundArtifactsWrapper>
    </>
  );
}

export default MainAppLayout;
