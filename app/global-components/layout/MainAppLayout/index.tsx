import Navbar from '../Navbar';
import Footer from '../Footer';
import SlideInMenu from '../SlideInMenu';
import BackgroundArtifactsWrapper from '../ArtifactsWrapper';
// import Overlay from '../Overlay';

function MainAppLayout({ children }: ChildProp) {
  return (
    <BackgroundArtifactsWrapper>
      <main className="main-app-layout main-app-layout_bg-glass_light font-light min-h-screen md:px-[5%] lg:px-[10%] md:mx-auto text-[14px] relative z-10">
        <div className="min-h-screen">
          <Navbar />
          <SlideInMenu />
          {/* <Overlay /> */}
          {children}
        </div>
        <Footer />
      </main>
    </BackgroundArtifactsWrapper>
  );
}

export default MainAppLayout;
