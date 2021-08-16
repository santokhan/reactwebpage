import "./sectionone.css";

function Column(title, des, des2) {
  const style = "col-lg-4 px-lg-4 py-lg-5 py-3";
  return (
    <div className={style}>
      <h4>{title}</h4>
      <p className="text-justify">{des}</p>
      <p>{des2}</p>
    </div>
  );
}

function ColumnWithLink(title, des, des2, link) {
  const style = "col-lg-4 px-lg-4 py-lg-5 py-3";
  return (
    <div className={style}>
      <h4>{title}</h4>
      <p className="text-justify">{des}</p>
      <p>
        {des2}
        <a href="https://reactjs.org/" className="text-dark bg-alert px-2">
          {link}
        </a>
      </p>
    </div>
  );
}

export default function SectionOne() {
  return (
    <div className="row p-3 m-lg-5 my-5 sectoion-one">
      {Column(
        "Declarative",
        "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        "Declarative views make your code more predictable and easier to debug."
      )}

      {Column(
        "Component-Based",
        "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
        "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM"
      )}

      {ColumnWithLink(
        "Learn Once, Write Anywhere",
        "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
        "React can also render on the server using Node and power mobile apps using",
        "Read more"
      )}
    </div>
  );
}
