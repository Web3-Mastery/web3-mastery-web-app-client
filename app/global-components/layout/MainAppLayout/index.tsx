import Navbar from '../Navbar';
import Footer from '../Footer';
import SlideInMenu from '../SlideInMenu';
import BackgroundArtifactsWrapper from '../ArtifactsWrapper';
// import Overlay from '../Overlay';

function MainAppLayout({ children }: ChildProp) {
  return (
    <>
      <SlideInMenu />
      <BackgroundArtifactsWrapper>
        <main className="main-app-layout main-app-layout_bg-glass_light font-light min-h-screen md:px-[5%] lg:px-[10%] md:mx-auto text-[14px] z-10">
          <div className="min-h-screen">
            <Navbar />
            {/* <Overlay /> */}
            {children}
          </div>
          <Footer />
        </main>
      </BackgroundArtifactsWrapper>
    </>
  );
}

export default MainAppLayout;
