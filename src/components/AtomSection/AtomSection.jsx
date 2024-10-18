
import '../AtomSection/AtomSectionStyles.css'
const AtomSection = () => {
  return (
   <section className='atom-section-container'>
          <div className='text-div'>
          <p className='p-atom'> Qué hay dentro?</p>
          </div>
          <div className='imagen-atom-container'>
                <img  className='atom' src='Images/Atomo.webp' alt='atomo-imagen'></img>
          </div>
          <div className='info-container'>
                <ul className="list-item-container"><span className='title-list'>Ingredientes</span>
                <li className="info-item">Aminoacidos</li>
                <li className="info-item">Aceite de argán</li>
                <li className="info-item">Transglutaminasa</li>
                <li className="info-item">Aceite maleico</li>
                </ul>
                <ul className="list-item-container"><span className='title-list'>Formula</span>
                <li className="info-item">[C4H4O4]</li>
                <li className="info-item">[C27H44O3H2O]</li>
                <li className="info-item">[H2NCHRCOOH]</li>
                <li className="info-item">[C18H34O2]</li>
                </ul>
                <ul className="list-item-container"> <span className='title-list'>Función</span>
                <li className="info-item">Reparación de cabello dañado</li>
                <li className="info-item">Actúa como adhesivo fortalecedor del cabello</li>
                <li className="info-item">Protege el cabello y la fibra contra el calor</li>
                <li className="info-item">Promueve la salud del cabello</li>
                </ul>
          </div>
   </section>
  )
}

export default AtomSection