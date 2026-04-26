export default function Testimonials() {
  const data = [
    {
      name: "Rahul Sharma",
      text: "This tool saved us hours every week managing schedules.",
    },
    {
      name: "Anita Verma",
      text: "Compliance automation is a game changer for our team.",
    },
    {
      name: "John Doe",
      text: "Clean UI and super easy to use.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Loved by Teams</h2>

      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow">
            <p className="text-gray-600">“{item.text}”</p>
            <h4 className="mt-4 font-semibold">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}