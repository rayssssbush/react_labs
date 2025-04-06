import { useLoaderData, Link, Outlet } from 'react-router-dom'; // Импортируем необходимые компоненты

function Root() {
  const { students } = useLoaderData(); // Получаем данные студентов через useLoaderData

  return (
    <div id="main">
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

      <div id="student">
        <Outlet /> {/* Рендерим дочерние маршруты */}
      </div>
    </div>
  );
}

export default Root;
