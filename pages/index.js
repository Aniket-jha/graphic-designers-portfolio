import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Index = () => {
  return (
    <Layout>
      <div className="section started" id="section-started">
        {/* background */}
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">
                Hello, {`I’m`} <strong>Chaitrali Kadam</strong>, Senior Graphic Designer
                and <br />
                with 3+ years work experience based out of Mumbai currently situated in Dubai.
              </h1>
              <TypingAnimation extraClassName={"h-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
