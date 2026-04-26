export default function Features() {
    return (
         <section id="features" className="py-20 px-6 bg-gray-50">
                <h2 className="text-3xl font-bold text-center">
                    Everything You Need in One Platform
                </h2>

                <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition">
                        <h3 className="text-xl font-semibold">Smart Scheduling</h3>
                        <p className="mt-2 text-gray-600">
                            Create, edit, and manage shifts with drag-and-drop ease.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition">
                        <h3 className="text-xl font-semibold">Compliance Engine</h3>
                        <p className="mt-2 text-gray-600">
                            Automatically follow labor laws and avoid costly mistakes.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition">
                        <h3 className="text-xl font-semibold">Team Collaboration</h3>
                        <p className="mt-2 text-gray-600">
                            Keep employees connected with real-time updates and notifications.
                        </p>
                    </div>

                </div>
            </section>
    )
}