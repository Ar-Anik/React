import PersonWithPropType from "./PersonWithPropType";

function ElementsWithPropType() {
  return (
    <div>
      <PersonWithPropType
        name={87}
        age={14}
        email="aranik@gmail.com"
        isMarried={"true"}
        children={[]}
      />

      <PersonWithPropType
        name="Anisul Oni"
        age={"15"}
        email="oni@gmail.com"
        isMarried={"false"}
        children={["mota", "chota"]}
      />

      <PersonWithPropType
        name="Anik Das"
        age={"bis"}
        email="anikd@gmail.com"
        isMarried={false}
        children={["fahim", "riju"]}
      />

      <PersonWithPropType
        name="Biddut Debnath"
        age={32}
        email="biddut@gmail.com"
        isMarried={true}
        children={[]}
      />
    </div>
  );
}

export default ElementsWithPropType;
