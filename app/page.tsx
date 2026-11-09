export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      
      {/* Conteneur principal avec effet Glassmorphism */}
      <div className="max-w-4xl w-full mx-auto p-10 md:p-16 text-center space-y-6 bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40">
        
        {/* Badge décoratif */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-blue-700 bg-blue-100/80 rounded-full ring-1 ring-blue-700/10">
          Portail Officiel
        </div>

        {/* Titre principal avec dégradé de texte */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800 leading-[1.15]">
          Système intégré de promotion des investissements
        </h1>
        
        {/* Sous-titre moderne */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium mt-6">
          Une plateforme numérique centralisée pour dynamiser, faciliter et suivre les opportunités d'affaires.
        </p>

        {/* Bouton d'action (Optionnel pour le design) */}
        <div className="pt-8">
          <button className="px-8 py-3.5 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-2xl shadow-lg hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5">
            Accéder au portail
          </button>
        </div>
        
      </div>
    </main>
  );
}