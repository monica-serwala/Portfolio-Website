// src/App.tsx
import Navbar from "./components/Navbar";
import floralArc from "./assets/floral-arc.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-rose-200 text-zinc-900">
      {/* Navbar is fixed, but we’ll later make it appear on scroll */}
      <Navbar />

      <main className="mx-auto max-w-6xl px-8">
        {/* HERO */}

        <div className="absolute top-0 right-0 z-0">
              <img
                src={floralArc}
                alt=""
                className="w-[850px] translate-x-20 -translate-y-10 pointer-events-none select-none"
              />
            </div>
  
        <section
          id="home"
          className="relative min-h-screen flex items-center pt-24 overflow-hidden">
                
            

           <div className="max-w-3xl">
            <p className="text-sm tracking-wide text-zinc-500">
              BSc IT · Vereeniging, South Africa
            </p>

            <h1 className="mt-4 text-7xl font-bold leading-none tracking-tight">
              Monica{" "}
              <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                Serwala
              </span>
            </h1>

            <p className="mt-6 text-2xl font-semibold text-zinc-800">
              Software Engineer &amp; Data Engineer
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
              Designing and developing scalable software, data pipelines, and SaaS platforms.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-rose-400 px-7 py-3 text-white font-medium hover:bg-rose-600 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-zinc-300 px-7 py-3 font-medium hover:bg-zinc-100 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT (next section to create scroll) */}
        <section id="about" className="py-24 border-t border-zinc-100">
          <h2 className="text-3xl font-bold tracking-tight">About</h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600">
            I’m Monica Serwala, a BSc IT graduate based in Vereeniging, South Africa.
            I enjoy building clean, user-friendly products with strong backend foundations —
            from scalable APIs to data pipelines that turn raw data into useful insights.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">
            Currently building: <span className="font-medium text-zinc-800">JobTracker</span> (SaaS in progress).
          </p>
        </section>

       <section
          id="skills"
          className="py-28 bg-gradient-to-br from-rose-30  to-rose-100">
          <div className="mx-auto max-w-6xl px-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Technical Skills
            </h2>

            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full" />

            <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 rounded-xl bg-white/90 border border-rose-100 shadow-sm">
                <h3 className="text-sm  uppercase tracking-wider text-zinc-700">
                  Backend & Languages
                </h3>
                <ul className="mt-4 space-y-2 text-zinc-900 font-medium">
                  <li>C#</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white/90 border border-rose-100 shadow-sm">
                <h3 className="text-sm  uppercase tracking-wider text-zinc-700">
                  Frameworks
                </h3>
                <ul className="mt-4 space-y-2 text-zinc-900 font-medium">
                  <li>.NET Core</li>
                  <li>Flask</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white/90 border border-rose-100 shadow-sm">
                <h3 className="text-sm  uppercase tracking-wider text-zinc-700">
                  Frontend
                </h3>
                <ul className="mt-4 space-y-2 text-zinc-900 font-medium">
                  <li>React</li>
                  <li>JavaScript</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white/90 border border-rose-100 shadow-sm">
                <h3 className="text-sm  uppercase tracking-wider text-zinc-700">
                  Cloud & Data
                </h3>
                <ul className="mt-4 space-y-2 text-zinc-900 font-medium">
                  <li>Azure</li>
                  <li>Cosmos DB</li>
                  <li>Event Hub</li>
                  <li>Neo4j</li>
                  <li>Power BI</li>
                </ul>
              </div>


            </div>
          </div>
        </section>

        <section id="projects" className="py-28 bg-white">
          <div className="mx-auto max-w-6xl px-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>

            <div className="mt-16 space-y-20">
              {/* Project cards will go here */}
              <div className="border-b border-zinc-500 pb-16">
                <h3 className="text-2xl font-semibold tracking-tight">
                  JobTracker — SaaS Application Management Platform
                </h3>

                <p className="mt-6 max-w-3xl text-lg text-zinc-600 leading-relaxed">
                  A full-stack web application designed to help users track and manage job applications in a structured way.
                </p>

                <div className="mt-8 space-y-3 text-zinc-800">
                  <p>• RESTful API built with ASP.NET Core</p>
                  <p>• Layered architecture (Controllers, Services, Data Access)</p>
                  <p>• Database integration using Entity Framework Core</p>
                  <p>• State-managed frontend connected via API</p>
                  <p>• Status tracking system for application lifecycle</p>
                </div>

                <div className="mt-8 flex gap-6 text-sm font-medium">
                  <a
                    href="https://github.com/monica-serwala/job-application-tracker.git"
                    target="_blank"
                    className="text-rose-600 hover:underline"
                  >
                    View Code
                  </a>
                </div>
              </div>

              

              <div className="border-b border-zinc-500 pb-16">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Diabetes Classification — Machine Learning Project
                </h3>

                <p className="mt-6 max-w-3xl text-lg text-zinc-600 leading-relaxed">
                  A machine learning project focused on predicting diabetes risk using structured healthcare data.
                </p>

                <div className="mt-8 space-y-3 text-zinc-900 font-medium">
                  <p>• Performed data preprocessing and feature engineering</p>
                  <p>• Implemented Random Forest, Gradient Boosting, and SVM models</p>
                  <p>• Evaluated models using precision, recall, and ROC curves</p>
                  <p>• Applied SMOTE for class imbalance handling</p>
                </div>

                <div className="mt-8 flex gap-6 text-sm font-medium">
                  <a
                    href="YOUR_DIABETES_GITHUB_LINK"
                    target="_blank"
                    className="text-rose-600 hover:underline"
                  >
                    View Code
                  </a>
                </div>
              </div>


              {/*third project*/}
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Encryption Desktop Application — Vernam Cipher Implementation
                </h3>

                <p className="mt-6 max-w-3xl text-lg text-zinc-600 leading-relaxed">
                  A desktop-based encryption and decryption application developed for a cryptography module, implementing classical and hybrid algorithms.
                </p>

                <div className="mt-8 space-y-3 text-zinc-900 font-medium">
                  <p>• Implemented Vernam Cipher using XOR-based encryption logic</p>
                  <p>• Designed secure random key generation</p>
                  <p>• Enforced key-length validation for cryptographic correctness</p>
                  <p>• Integrated encryption logic into Tkinter-based GUI</p>
                </div>

                <div className="mt-8 flex gap-6 text-sm font-medium">
                  <a
                    href="YOUR_CRYPTO_GITHUB_LINK"
                    target="_blank"
                    className="text-rose-600 hover:underline"
                  >
                    View Code
                  </a>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* CONTACT (anchor for button) */}
        <section id="contact" className="py-24 border-t border-zinc-100">
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mt-6 text-lg text-zinc-600">
            Email: <a className="text-rose-600 hover:underline" href="mailto:your.email@example.com">
              your.email@example.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}