import DataFetcher from "./dataFetcher";

const DataShow = () => {
  return (
    <div>
      <DataFetcher url="https://jsonplaceholder.typicode.com/posts/1">
        {(data) => (
          <div>
            <h2>Title : {data.title}</h2>
            <p>Body : {data.body}</p>
          </div>
        )}
      </DataFetcher>

      <DataFetcher url="https://jsonplaceholder.typicode.com/users/1">
        {(data) => (
          <div>
            <h3>Name : {data.name}</h3>
            <h3>Email : {data.email}</h3>
            <h3>Phone : {data.phone}</h3>
            <h3>Website : {data.website}</h3>
          </div>
        )}
      </DataFetcher>
    </div>
  );
};

export default DataShow;
