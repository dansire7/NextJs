export default function new4() {
  return (
    <>
        <h2 className="my-6 mx-4 text-2xl font-extrabold text-red-300 underline"> Grid with Column usage</h2>

      <ul className="my-4 mx-3 grid grid-cols-3">
        <li className="bg-gray-200 border border-red-400">Hamza</li>
        <li className="bg-gray-200 border border-red-400">Saleem</li>
        <li className="bg-gray-200 border border-red-400">Kashif</li>
        <li className="bg-gray-200 border border-red-400">Okasha</li>
      </ul>


        <h2 className="my-6 mx-4 text-2xl font-extrabold text-red-300 underline"> Grid with Column span usage</h2>
        
      <ul className="my-4 mx-3 grid grid-cols-12">
        <li className="bg-gray-200 border border-red-400 col-span-3">Hamza</li>
        <li className="bg-gray-200 border border-red-400 col-span-4">Saleem</li>
        <li className="bg-gray-200 border border-red-400 col-span-2">Kashif</li>
        <li className="bg-gray-200 border border-red-400 col-span-4">Okasha</li>
      </ul>
    </>
  );
}
