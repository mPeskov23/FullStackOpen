/* eslint-disable react/prop-types */
const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <h4>Total of exercises in the  course {course.parts.reduce((sum, part) => sum + part.exercises, 0)}</h4>
    </div>
  );
};

export default Course;
