const getData = async () => {
  const result = await fetch("https://api.quotable.io/random");
  const data = await result.json();

  return data;
};

export default getData;
