export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold">Simple Pricing</h2>

      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg">Starter</h3>
          <p className="text-2xl mt-2">Free</p>
          <p className="mt-2 text-gray-600">Basic features</p>
        </div>

        <div className="p-6 border rounded-xl bg-black text-white">
          <h3 className="font-semibold text-lg">Pro</h3>
          <p className="text-2xl mt-2">₹499/mo</p>
          <p className="mt-2">All features included</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg">Enterprise</h3>
          <p className="text-2xl mt-2">Custom</p>
          <p className="mt-2 text-gray-600">For large teams</p>
        </div>

      </div>
    </section>
  );
}