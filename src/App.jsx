import Restaurant from "./Components/Restaurant";
import Search from "./Components/Search";
import Title from "./Components/Title";

export default function App() {
  return (
    <div className="container mx-auto my-5">
      <Title />
      <Search />
      <Restaurant />
    </div>
  );
}
