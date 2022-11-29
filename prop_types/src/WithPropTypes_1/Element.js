import Person from "./Person";

function Element() {
  const anik = {
    name: 87,
    age: 14,
    email: "aranik@gmail.com",
    isMarried: "false",
    children: [],
  };

  const oni = {
    name: "Anisul Islam Oni",
    age: 16,
    email: "oni@gmail.com",
    isMarried: true,
    children: ["mota", "chota"],
  };

  const anikdas = {
    name: "Anik Das",
    age: "18",
    email: "anikdas@gmail.com",
    isMarried: true,
    children: ["fahim", "riju"],
  };

  const biddut = {
    name: "Biddut Debnath",
    age: 32,
    email: "biddut@gmail.com",
    isMarried: true,
    children: ["sojol", "shihab"],
  };

  return (
    <>
      <Person person={anik} />
      <Person person={oni} />
      <Person person={anikdas} />
      <Person person={biddut} />
    </>
  );
}

export default Element;
