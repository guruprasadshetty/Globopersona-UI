export default function Table({ columns, data }) {
  return (
    <table className="w-full bg-white shadow rounded overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col} className="text-left p-3">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            {Object.values(row).map((v, idx) => (
              <td key={idx} className="p-3">
                {v}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
