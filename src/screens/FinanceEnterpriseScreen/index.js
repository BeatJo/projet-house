import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components';
import { fifthSection, firstSection1, secondSection, thirdSection } from '../../data/investData';
import '../../styles/Cart.css'

const FinanceEnterpriseScreen = () => {

  const [mouseOver, setMouseOver] = useState(1);
  const [mouseOver1, setMouseOver1] = useState(0);
  function mouseOverToggle(number, section) {
    switch (section) {
      case 1:
        setMouseOver(number)
        break;
    
      case 2:
        setMouseOver1(number)
        break;
    
      default:
        break;
    }
    
  }
  return ( 
    <Container header footer>
      <div className="stdPage">
      <section className="page-accueil2-part1">
        <div className="stdContainer">
        <div>
          <h1 className="stdGrosTitre leftTitle">Financez <span className="stdGrosTitre-underlined">simplement</span> <br />et <span className="stdGrosTitre-underlined">rapidement</span> votre entreprise</h1>
          <h2>
          Tudigo réinvente le financement des entreprises françaises. <br />De <b>2 000</b> à <b>8 millions d'euros</b>, en 30 à 60 jours. Réponse sous 48h.
          </h2>
          <div>
            <Link className="stdBtn btn-200">Testez votre éligibilité</Link>
          </div>
        </div>
          <p>Pauline, dirigeante chez "Ty Vrac ", Trégnuc (Tudigo)</p>
        </div>
      </section>
      
      <section className="page-accueil2-part4Chiffres">
        <div className="stdContainer">
          <h2 class="stdGrosTitre">Comment financer <span class="stdGrosTitre-underlined">votre entreprise</span> avec Tudigo ?
          </h2>
          <p class="center">4 offres de financement pour répondre à votre envie d'entreprendre</p>
          <div class="page-accueil2-partGridChiffres-content">
            {firstSection1.map((item, index) => (
              <Link key={index}>
                <div>
                  <img src={item.icon} alt="Diversifiez votre épargne, investissez autrement" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Link>))}
          </div>
        </div>
      </section>
      
      <section className="page-accueil2-part5">
        <div className="stdContainer">
          {secondSection.map((item, index) => (
            <div style={{flexDirection: item.left ? "row-reverse" : "row"}} key={index}>
              <div>
                <h4 className="stdGrosTitre leftTitle">{item.title} <span className="stdGrosTitre-underlined">{item.titleUnderline}</span></h4>
                <p>{item.content}</p>
                <div className="page-accueil2-part5-boutons">
                  <Link href="/user/profil/investisseur/v2/motivation" className="stdBtn">{item.buttonTitle}</Link>
                </div>
              </div>
              <div className="page-accueil2-part5-bigImage">
                <img src={item.image} alt="Investisseurs, développez votre patrimoine" />
              </div>
            </div>))}
        </div>
      </section>

      <section className="page-accueil2-part4">
        <div className="stdContainer">
          <div className="page-accueil2-part4-card-container">
          {thirdSection.map((item, index) => (
            <div key={index} className="page-accueil2-part4-card">
              <div>
                <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/quotes.svg" alt="Quotes" />
                <p>&nbsp;{item.content}</p>
                <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/quotesFlip.svg" alt="Quotes" />
              </div>
              <div>
                <img src={item.image} alt="Photoimage" />
                <div>
                  <div>{item.name}</div>
                  <div>{item.role}</div>
                </div>
              </div>
            </div>))}
          </div>
        </div>
      </section>

      <section className="page-accueil2-part6">
        <div className="stdContainer">
          <h2 className="stdGrosTitre">Vous souhaitez approfondir vos <span className="stdGrosTitre-underlined">connaissances</span> sur l'investissement ?</h2>
          <p>Commencez notre programme gratuit !</p>
          <div className="page-accueil2-part6-content page-accueil2-part6-content-justOne">
            <div>
              <h3>7 jours pour investir</h3>
              <p>Besoin d'en savoir plus sur l'investissement ? Nous vous avons préparé un programme gratuit, recevez un conseil quotidien pendant 7 jours pour apprendre à investir sereinement.</p>
              <Link href="https://share.hsforms.com/6032261/7bfa2cfc-f52c-45f2-9d29-69f4e986bbb8" className="stdBtn btn-200" target="_blank" rel="noopener noreferrer">C'est parti</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-accueil2-part7">
        <div className="stdContainer">
        <h2 className="stdGrosTitre">Des centaines de <span className="stdGrosTitre-underlined">projets financés avec succès</span> !</h2>
        <p className="center">Devenez un héros de votre territoire</p>
        <div className="page-accueil2-part7-container">
        <div onMouseOver={() => mouseOverToggle(1, 1)} className={mouseOver === 1 ? "act" : ""}>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/part7_pic1.svg" alt="SVG" />
        <div>Tudigo Made in France</div>
        </div>
        <div onMouseOver={() => mouseOverToggle(2, 1)} className={mouseOver === 2 ? "act" : ""}>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/part7_pic2.svg" alt="SVG" />
        <div>Tudigo Energie</div>
        </div>
        <div onMouseOver={() => mouseOverToggle(3, 1)} className={mouseOver === 3 ? "act" : ""}>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/part7_pic3.svg" alt="SVG" />
        <div>Tudigo Local</div>
        </div>
        <div onMouseOver={() => mouseOverToggle(4, 1)} className={mouseOver === 4 ? "act" : ""}>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/part7_pic4.svg" alt="SVG" />
        <div>Tudigo Gastronomie</div>
        </div>
        <div onMouseOver={() => mouseOverToggle(5, 1)} className={mouseOver === 5 ? "act" : ""}>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/part7_pic5.svg" alt="SVG" />
        <div>Tudigo Commerces</div>
        </div>
        <div onMouseOver={() => mouseOverToggle(6, 1)} className={mouseOver === 6 ? "act" : ""}>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/part7_pic6.svg" alt="SVG" />
        <div>Tudigo Solidaire</div>
        </div>
        </div>
        <div className="page-accueil2-part7-container2">
        <div onMouseOver={() => mouseOverToggle(1, 1)} className={mouseOver === 1 ? "act" : ""}>
        <div>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/coq.svg" alt="" />
        <h4>Made in France</h4>
        <p>Les entreprises du Made in France sont aujourd’hui 63% à avoir des difficultés de financement. Découvrez comment vous pouvez les soutenir (<Link href="https://blog.tudigo.co/enquete-made-in-france-entrepreneurs/" target="_blank" rel="noreferrer">étude Tudigo 2019</Link>)</p>
        </div>
        <div>
        <div>
        <h4>Moon Harbour, le whisky français</h4>
        <p>Bordeaux 33</p>
        <p>Soutenu par 243 investisseurs, Jean-Philippe et Yves ont lancé la 1ère distillerie 100% made in Bordeaux dans un bunker de la 2nde guerre mondiale</p>
        <div>1&nbsp;044&nbsp;290 € levés</div>
        </div>
        <Link href="/produit/moon-harbour"><img src="https://statictudigo.com/bundles/main/img/Main/Accueil/projets/moon-harbour.jpg" alt="" /></Link>
        </div>
        </div>
        <div onMouseOver={() => mouseOverToggle(2, 1)} className={mouseOver === 2 ? "act" : ""}>
        <div>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/eclair.svg" alt="" />
        <h4>Energie</h4>
        <p>L'objectif 2030 : 32% de la consommation énergétique française sera issue des énergies renouvelables. Soit le double d’aujourd’hui, ouvrant de belles perspectives de croissance et d’embauche.</p>
        </div>
        <div>
        <div>
        <h4>Parc Solaire Essendiéras, Cap Vert Energie</h4>
        <p>Saint-Médard-d’Excideuil, 24</p>
        <p>Soutenu par 94 investisseurs, Cap Vert Energie a inauguré le parc solaire d’Essendiéras en septembre 2019. Le parc produira l’équivalent de la consommation de 17 000 personnes.</p>
        <div>521 000€ levés</div>
        </div>
        <Link href="/produit/parc-solaire-cap-vert-energie-essendieras"><img src="https://statictudigo.com/bundles/main/img/Main/Accueil/projets/parcsolaire.jpg" alt="" /></Link>
        </div>
        </div>
        <div onMouseOver={() => mouseOverToggle(3, 1)} className={mouseOver === 3 ? "act" : ""}>
        <div>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/local.svg" alt="" />
        <h4>Local</h4>
        <p>Nous impactons directement les territoires en permettant à des entreprises locales d’avoir accès à un marché, en favorisant leur développement. On parle d’effet multiplicateur local.</p>
        </div>
        <div>
        <div>
        <h4>Brasserie des Trois Becs, la Drômoise</h4>
        <p>Gigors-et-Lozeron, 26</p>
        <p>Soutenu par 60 investisseurs, Emmanuel a pu tripler sa capacité de production et vient d’ouvrir un lieu d’accueil pour vendre en consommation direct ou à emporter.</p>
        <div>295 000€ levés</div>
        </div>
        <Link href="/produit/brasserie-des-trois-becs"><img src="https://statictudigo.com/bundles/main/img/Main/Accueil/projets/brasserie3becs.jpg" alt="" /></Link>
        </div>
        </div>
        <div onMouseOver={() => mouseOverToggle(4, 1)} className={mouseOver === 4 ? "act" : ""}>
        <div>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/gastro.svg" alt="" />
        <h4>Gastronomie</h4>
        <p>En France, la gastronomie représente 87 milliards de CA et plus de 794 milliers d’emplois, ce qui fait d’elle le 5e secteur d’emploi en France.</p>
        </div>
        <div>
        <div>
        <h4>Koedo, le premier Ekiben d’Ile de France</h4>
        <p>La défense, 92</p>
        <p>Soutenu par 158 investisseurs, Esther va ouvrir en fin d’année 2019 son quatrième restaurant Ekiben au cœur de La Défense (Paris).</p>
        <div>396 852€ levés</div>
        </div>
        <Link href="/produit/koedo"><img src="https://statictudigo.com/bundles/main/img/Main/Accueil/projets/koedo.jpg" alt="" /></Link>
        </div>
        </div>
        <div onMouseOver={() => mouseOverToggle(5, 1)} className={mouseOver === 5 ? "act" : ""}>
        <div>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/commerce.svg" alt="" />
        <h4>Commerces</h4>
        <p>Les 850 000 entreprises du commerce représentent à elles seules 3.5 millions d’emplois en France.</p>
        </div>
        <div>
        <div>
        <h4>Les Trois Pinardiers, cavistes et matelots</h4>
        <p>Bordeaux, 33</p>
        <p>Soutenu par 100 investisseurs, Simon, Louis et Quentin vont ouvrir 2 caves à vin dans 2 nouvelles villes de France.</p>
        <div>408 030€ levés</div>
        </div>
        <Link href="/produit/les-trois-pinardiers"><img src="https://statictudigo.com/bundles/main/img/Main/Accueil/projets/les3pinardiers.jpg" alt="" /></Link>
        </div>
        </div>
        <div onMouseOver={() => mouseOverToggle(6, 1)} className={mouseOver === 6 ? "act" : ""}>
        <div>
        <img src="https://statictudigo.com/bundles/main/img/Main/Accueil/mains.svg" alt="" />
        <h4>Social &amp; Solidaire</h4>
        <p>Ces structures reposent sur des valeurs et des principes communs : utilité sociale, coopération, ancrage local adapté aux nécessités de chaque territoire et de ses habitants.</p>
        </div>
        <div>
        <div>
        <h4>Villages Vivants, un nouveau souffle</h4>
        <p>Crest, 26</p>
        <p>Soutenu par 252 investisseurs, l’équipe de Villages Vivants a pu acheter 3 locaux vacants afin de redynamiser la vie de petites villes Françaises.</p>
        <div>244 700€ levés</div>
        </div>
        <Link href="/produit/villages-vivants"><img src="https://statictudigo.com/bundles/main/img/Main/Accueil/projets/village_vivants.jpg" alt="" /></Link>
        </div>
        </div>
        </div>
        <div className="page-accueil2-part7-container2-boutons">
        <Link href="/user/profil/investisseur/v2/motivation" class="stdBtn">Définir vos préférences d’investissement</Link>
        </div>
        </div>
      </section>
      <section className="page-accueil2-part8">
        <h2 className="stdGrosTitre">Trouvez l'essentiel des <span className="stdGrosTitre-underlined">réponses</span> à vos <span className="stdGrosTitre-underlined">questions</span> sur l’investissement</h2>
        <h3>On vous donne l’essentiel en quelques lignes !</h3> <br/><br/>
        <div className="page-accueil2-part8-contenu">
        <ul>
        {fifthSection.map((item, index) => (<li key={index} onClick={() => mouseOverToggle(index, 2)} className={mouseOver1 ===  index ? "act" : ""}>{item.section} <span>&gt;</span></li>))}
        </ul>
        <div>
        {fifthSection.map((item, index) => (<div key={index} className={mouseOver1 ===  index ? "act" : ""}>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
        {item.button.map((item, index) => <Link className="stdBtn stdBtn-main" >{item}</Link>)}
        </div>))}
        </div>
        </div>
      </section>

      <section class="page-accueil2-part9">
        <div class="stdContainer">
          <h2 class="stdGrosTitre">Recevez la <span class="stdGrosTitre-underlined">newsletter</span> Tudigo</h2>
          <h3>Recevez chaque semaine notre newsletter avec des conseils pour investir, <br />les dernières opportunités d'investissement et des invitations à nos évènements.</h3>
          <form action="/newsletter-handler" method="post" class="formOnWhite" name="newsletter">
            <input type="email" placeholder="Votre email" name="email" />
            <input type="hidden" name="newsletterType" value="investisseur" />
            <button class="stdBtn" type="submit">Je m'inscris</button>
          </form>
        </div>
      </section>
      </div>
    </Container>
   );
}
 
export default FinanceEnterpriseScreen;