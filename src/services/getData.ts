export async function getData() {
  try {
    const data = await fetch(
      "https://api.chucknorris.io/jokes/random?category={category}"
    ).then((res) => res.json());
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
