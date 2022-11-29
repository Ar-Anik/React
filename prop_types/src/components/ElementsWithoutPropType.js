import PersonWithoutPropType from "./PersonWithoutPropType";

function ElementsWithoutPropType() {
  return (
    <div>
      <PersonWithoutPropType
        name={87} //name can't be a number but it accept
        age={14}
        email="aranik@gmail.com"
        isMarried={"false"} // it need boolean value
        children={[]}
      />

      <PersonWithoutPropType
        name="Anisul Oni"
        age={15}
        email="oni@gmail.com"
        isMarried={true}
        children={["mota", "chota"]}
      />

      <PersonWithoutPropType
        name="Anik Das"
        age={"bis"}
        email="anikd@gmail.com"
        isMarried={true}
        children={["fahim", "riju"]}
      />

      <PersonWithoutPropType
        name="Biddut Debnath"
        age={32}
        email="biddut@gmail.com"
        isMarried={false}
        children={[]}
      />
    </div>
  );
}

export default ElementsWithoutPropType;
