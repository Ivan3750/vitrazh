const Summary = ({ data, prevStep }) => {
  const { profile, window, total } = data;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Підсумок замовлення</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Профіль:</h3>
          <p>{profile?.name}</p>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Форма вікна:</h3>
          <p>{window.shape}</p>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Розміри:</h3>
          <p>{window.width} x {window.height} см</p>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Фурнітура:</h3>
          <p>{window.hardware}</p>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Склопакет:</h3>
          <ul className="list-disc ml-5">
            {window.glass.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Колір:</h3>
          <p>{window.color}</p>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Послуги:</h3>
          <ul className="list-disc ml-5">
            {window.services.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2 text-green-700">Загальна ціна:</h3>
          <p className="text-2xl font-bold">{total} грн</p>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ← Назад
        </button>
      </div>
    </div>
  );
};

export default Summary;