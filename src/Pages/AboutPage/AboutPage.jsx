import Avatar from "../../Components/Avatar/Avatar";
import Layout from "../../Components/Layout/Layout";
import Heading from "../../Components/Heading/Heading";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Layout>
        <Avatar />
        <Heading as={"h1"}>Mehrdad Rayati</Heading>
        <Heading as={"h2"}>Junior Front-End Developer</Heading>
        <div className="Summary">
          <p>
            Eu est ad aute culpa nisi elit ullamco velit occaecat officia aliqua
            dolor dolore. Sit tempor nulla adipisicing occaecat deserunt tempor
            eiusmod do tempor sint duis elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            modi porro ab expedita suscipit dicta at, nesciunt beatae.
            Praesentium sunt voluptates nulla mollitia. Soluta doloribus quidem
            aliquam odio inventore pariatur.
          </p>
        </div>
        <div className="extra-Summary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            modi porro ab expedita suscipit dicta at, nesciunt beatae.
            Praesentium sunt voluptates nulla mollitia. Soluta doloribus quidem
            aliquam odio inventore pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            modi porro ab expedita suscipit dicta at, nesciunt beatae.
            Praesentium sunt voluptates nulla mollitia. Soluta doloribus quidem
            aliquam odio inventore pariatur.
          </p>
        </div>
      </Layout>
    </div>
  );
}

export default AboutPage;
