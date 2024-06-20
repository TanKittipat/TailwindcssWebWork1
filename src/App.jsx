import Card from "./Components/Card";

export default function App() {
  return (
    <div class="container mx-auto my-5">
      <h1 className="text-5xl font-semibold text-center my-7">
        Grab Restaurant
      </h1>
      <div id="search">
        <label className="input input-bordered flex items-center gap-2 my-5">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex flex-wrap justify-center gap-4" id="cards">
        <Card
          img={
            "https://food-cms.grab.com/compressed_webp/merchants/3-C6DWC4DECE4BEN/hero/5c9f447e8ae849fc9245f0ff5ce6675c_1707376518599040939.webp"
          }
          title={"สุกี้โบราณ - คอนโดลุมพินี ชลบุรี"}
          desc={"อาหารเส้น"}
        />
      </div>
    </div>
  );
}
