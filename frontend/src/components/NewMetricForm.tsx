const units = [
  "Count",
  "Seconds", "Minutes", "Hours", "Days", "Weeks", "Months", "Years",
  "Pounds", "Kilograms", "Ounces", "Grams",
  "Miles", "Kilometers", "Feet", "Meters", "Inches", "Centimeters",
  "Gallons", "Liters", "Cups", "Ounces (fl)",
  "Dollars", "Euros", "Pounds (£)",
  "Percent",
];

function NewMetricForm() {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">New Metric</h2>
      <form className="flex flex-col gap-4">
        <label className="text-sm font-medium text-gray-700">
          Metric title<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Metric title"
          required
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-sm font-medium text-gray-700">
          Unit of measure<span className="text-red-500">*</span>
        </label>
        <select
          required
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a unit</option>
          {units.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <button
          type="submit"
          className="self-start px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default NewMetricForm;
