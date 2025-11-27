const Header = ({header}) => 
      <h2>
        {header}
      </h2>

const Part = ({part}) => 
      <p>
        {part.name} {part.exercises}
      </p>

const Content = ({parts}) => 
        <div>
          {parts.map(part => 
            <Part key={part.id} part={part}/>
          )}
        </div>

const Total = ({parts}) => 
      <p>
        <b> 
          Total of {parts.reduce((sum, x) => sum += x.exercises, 0)} exercises 
        </b>
      </p>

const Course = ({course}) => 
      <div>
        <Header key={course.id} header={course.name} />
        <Content key={course.parts.id} parts={course.parts} />
        <Total parts={course.parts} />
      </div>

const Courses = ({courses}) =>
      <div>
          <h1>
              Web development curriculum
          </h1>
          {courses.map(course => 
            <Course key={course.id} course={course}/>
          )}
      </div>

export default Courses

