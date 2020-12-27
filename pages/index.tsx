import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Result from '../components/result';

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
            <div className="w-1/3">
              <h2 className="text-3xl p-4">Results</h2>
              <div className="p-4">
                <label className="block">Calories</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="p-4">
                <label className="block">Carbs</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="p-4">
                <label className="block">Fat</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="p-4">
                <label className="block">Protein</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Save
                </button>
              </div>

            </div>

            <div className="w-1/3">
              <h2 className="text-3xl p-4">Target</h2>
              <div className="p-4">
                <label className="block">Calories</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="p-4">
                <label className="block">Carbs</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="p-4">
                <label className="block">Fat</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="p-4">
                <label className="block">Protein</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Save
                </button>
              </div>

            </div>

            <div className="w-1/3">
              <h2 className="text-3xl p-4">Variance</h2>
              <div className="p-4">
                <label className="block">Calories</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="p-4">
                <label className="block">Carbs</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="p-4">
                <label className="block">Fat</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="p-4">
                <label className="block">Protein</label>
                <input
                  type="number"
                  className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Save
                </button>
              </div>

            </div>


          </div>

        </div>
      </div>


    </div>
  );
}

export default Home;