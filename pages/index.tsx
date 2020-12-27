import React from 'react';
import Head from 'next/head';
import Result from '../components/Result'
import MCT from '../components/MCTForm';

let data = {
  calories: {
    label: "Calories",
    total: 1840,
    target: 1840,
    variant: 15
  },
  carbs: {
    label: "Carbs",
    total: 190,
    target: 160,
    variant: 15
  },
  fat: {
    label: "Fat",
    total: 55,
    target: 60,
    variant: 10
  },
  protein: {
    label: "Protein",
    total: 120,
    target: 165,
    variant: 10
  }
}

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {

  const [results, setResults] = React.useState(data);

  const onChange = (e) => {
    const data = { ...results };

    let name = e.target.name;
    let resultType = name.split(" ")[0].toLowerCase();
    let resultMacro = name.split(" ")[1].toLowerCase();

    data[resultMacro][resultType] = e.target.value;

    setResults(data);
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="container mx-auto">
        <div className="container mx-auto">

          <div className="flex text-center">
            <div className="w-full m-4">
              <h1 className="text-4xl">Macro Compliacne Tracker</h1>
            </div>
          </div>

          <div className="flex text-center">
            <div className="w-1/3 bg-gray-200 p-4">Previous Day</div>
            <div className="w-1/3 p-4">Today</div>
            <div className="w-1/3 bg-gray-200 p-4">Next Day</div>
          </div>

          <div className="flex mb-4 text-center">

            <Result results={results.calories} />
            <Result results={results.carbs} />
            <Result results={results.fat} />
            <Result results={results.protein} />

          </div>

          <div className="flex">
            <MCT data={results} item="Total" onChange={onChange} />
            <MCT data={results} item="Target" onChange={onChange} />
            <MCT data={results} item="Variant" onChange={onChange} />
          </div>

          <div className="flex text-center">
            <div className="w-full m-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}

export default Home;