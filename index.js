const getTheData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw Error();
    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

getTheData();
