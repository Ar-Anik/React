const ShowData = ({ values }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">UserID</th>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {values.map((value) => (
            <tr key={value.id}>
              <td>{value.userId}</td>
              <td>{value.id}</td>
              <td>{value.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
