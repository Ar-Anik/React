import Person from "./Person";

function Element() {
  return (
    <div>
      <Person
        // name="Aranik"
        name={87}
        age="43"
        email="aranik@gmail.com"
        isMarried={false}
        children={[]}
      />

      <Person
        name="Anisul Oni"
        age={15}
        email="oni@gmail.com"
        isMarried="true"
        children={["mota", "chota"]}
      />

      <Person
        name="Anik Das"
        age={"bis"}
        email="anikd@gmail.com"
        isMarried={true}
        children={["fahim", "riju"]}
      />

      <Person
        name="Biddut Debnath"
        age={32}
        email="biddut@gmail.com"
        isMarried={false}
        children={[]}
      />
    </div>
  );
}

export default Element;
