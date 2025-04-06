import { useLoaderData, Link, Outlet, Form } from 'react-router-dom'; // Импортируем необходимые компоненты
import { createStudent } from '../forStorage'; // Импортируем функцию для создания студента

// Функция action для создания студента
export async function action() {
  const student = await createStudent(); // Создаем студента
  return { student }; // Возвращаем нового студента
}

function Root() {
  const { students } = useLoaderData(); // Получаем данные студентов через useLoaderData

  return (
    <div id="main">
      <div id="menu">
        {/* Кнопка для добавления нового студента */}
        <Form method="post">
          <button type="submit">add student</button>
        </Form>

        {students.length ? (
          <nav>
            {students.map((student) => (
              <Link key={student.id} to={`students/${student.id}`}>
                {student.name ? student.name : <i>Unnamed</i>} {/* Выводим имя студента или "Unnamed" */}
              </Link>
            ))}
          </nav>
        ) : (
          <p><i>no students here ...</i></p> {/* Если студентов нет */}
        )}
      </div>

      <div id="student">
        <Outlet /> {/* Рендерим дочерние маршруты */}
      </div>
    </div>
  );
}

export default Root;
