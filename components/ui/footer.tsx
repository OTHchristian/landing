
export default function Footer() {
  return (
    <footer className="absolute left-0 w-full bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-6 mb-6">
          <h2 className="text-2xl font-bold text-white">
            Pronostics Sportifs Premium
          </h2>
          <p className="mt-4 md:mt-0 text-sm text-gray-500 max-w-lg">
            Notre mission : vous fournir chaque jour des analyses fiables,
            des pronostics précis et des conseils experts pour optimiser vos gains
            sur le long terme.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Pronostics Sportifs Premium. Tous droits réservés.
        </div>

      </div>
    </footer>


  );
}
