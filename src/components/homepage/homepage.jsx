import "./homepage.css";
import Banner from "./banner/banner";
import SectionOne from "./sectionone/sectionone";
import SectionTwo from "./sectiontwo/sectiontwo";
import SectionThree from "./sectionthree/sectionthree";
import Info from "./section4/info";
import ToDo from "./todo-app/todo";

export default function Main() {
  // const link = "https://reactjs.org";
  return (
    <div className="container-fluid">
      <Banner />
      <SectionOne />
      <hr />
      <SectionTwo />
      <SectionThree />
      <SectionThree />
      <Info />
      <ToDo />
    </div>
  );
}
