import logo from '../assets/oppai_logo.svg'

function Footer(){
  return(
    <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <img src={logo} alt='logo' className="text-3xl font-bold mb-8 b mx-auto h-14 text-transparent" />
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-white mb-4">Produit</h4>
            <div className="space-y-2 text-gray-400">
              <p>Fonctionnalités</p>
              <p>Tarifs</p>
              <p>Sécurité</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Entreprise</h4>
            <div className="space-y-2 text-gray-400">
              <p>À propos</p>
              <p>Carrières</p>
              <p>Blog</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <div className="space-y-2 text-gray-400">
              <p>Centre d'aide</p>
              <p>Contact</p>
              <p>Statut</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Légal</h4>
            <div className="space-y-2 text-gray-400">
              <p>Confidentialité</p>
              <p>Conditions</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-gray-400">
          <p>&copy; 2025 OPPAI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer