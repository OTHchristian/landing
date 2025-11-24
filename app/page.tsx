'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Compteur from "@/components/ui/compteur";
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navBar";
import Reveal from "@/components/ui/reveal";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("GOTEN7");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="h-full pl-4 pr-4 overflow-hidden">
      <NavBar></NavBar>
      <main className="">
        <section className="mt-10 max-w-6xl mx-auto w-full p-2.5 xl:p-5 text-black">
          <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
            
            {/* Texte */}
            <div className="space-y-6">
              <Reveal direction="right">
                <p className="text-gray-500">Aucun pub. Aucun abonnement. Juste des pronostics verifés.</p>
                <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
                  Pronostics Foot <span className="text-blue-500">100 %</span> Gratuit !
                </h1>
                <p className="text-xl font-semibold mt-5">Reçois chaque jour :</p>
                <ul className="space-y-2">
                  <li>✔️ 1 pronostic premium à haute probabilité.</li>
                  <li>✔️ 1 combiné du jour optimisé pour maximiser les gains.</li>
                  <li>✔️ 1 analyse détaillée avec explications claires et facteurs clés.</li>
                </ul>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button 
                    className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition animate-bounce flex gap-3.5 items-center justify-center" 
                    onClick={()=>window.location.href='https://t.me/+2-9GuK1WJOFjMGM8'}
                  >
                    joindre le canal
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                  </svg>
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Image illustration */}
            <div className="flex justify-center">
              <Reveal direction="left">
                <img
                  src="/pronostics-foot.webp"
                  alt="1xBet inscription"
                  className="rounded-2xl  max-h-[400px] object-cover"
                />
              </Reveal>
            </div>
          </div>
        </section>
        <section className="w-full p-2.5 xl:p-5" id="stat">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:w-4/5 xl:mx-auto text-black">
            <Reveal>
              <div className="border border-gray-200 h-38 rounded-xl p-3.5">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500 flex items-center justify-center">
                    +<Compteur valeurFinale={1000} />
                  </h1>
                  <p className="text-gray-500 mt-3.5">
                    membres actifs qui suivent nos pronostics chaque jour.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="border border-gray-200 h-38 rounded-xl p-3.5">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500 flex items-center justify-center">
                    +<Compteur valeurFinale={500} />
                  </h1>
                  <p className="text-gray-500 mt-3.5">
                    pronostics premium publiés chaque mois par nos experts.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="border border-gray-200 h-38 rounded-xl p-3.5">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500 flex items-center justify-center">
                    +<Compteur valeurFinale={200} />
                  </h1>
                  <p className="text-gray-500 mt-3.5">
                    analyses détaillées disponibles pour booster vos résultats.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="border border-gray-200 h-38 rounded-xl p-3.5">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500 flex items-center justify-center">
                    +<Compteur valeurFinale={99} />%
                  </h1>
                  <p className="text-gray-500 mt-3.5">
                    taux de satisfaction grâce à nos conseils et stratégies.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </section>
        <section className="max-w-6xl mx-auto w-full xl:p-5 mt-5 text-black" id="faq">
          <div className="grid cols-1 xl:grid-cols-2 gap-20">
            <div>
              <Reveal>
              <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight">Questions fréquentes</h1>
              </Reveal>
              <Reveal direction="right">
              <div className="mt-5 border border-gray-200 p-5 rounded-xl">
                <div className="flex w-full items-center justify-center">
                  <Image
                    src={
                      "https://cdn.prod.website-files.com/66f8845b6f7911f99d856648/66f8845b6f7911f99d8566d5_Icon%20Container.svg"
                    }
                    width={60}
                    height={60}
                    alt="help"
                  />
                </div>
                <div className="text-center mt-3.5">
                  <p>Avez-vous besoin de plus d&apos;aide&nbsp;?</p>
                  <p>
                    Si vous ne trouvez pas la réponse que vous recherchez, veuillez nous contacter
                    en cliquant sur le bouton ci-dessous.
                  </p>

                </div>
                <div className="flex w-full items-center justify-center">
                  <button className="flex items-center gap-2 bg-blue-900 rounded-full p-3.5 mt-3.5 text-white" onClick={()=>window.location.href='https://t.me/+2-9GuK1WJOFjMGM8'}>
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              </Reveal>
            </div>
            <div>
              <Reveal direction="left">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-left"
                  defaultValue="item-1"
                >

                  <AccordionItem value="item-1">
                    <AccordionTrigger>Comment fonctionnent vos pronostics&nbsp;?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Nos pronostics sont élaborés grâce à une analyse poussée : statistiques,
                        forme des équipes, tendances de marché, algorithmes internes et
                        facteurs clés du match. L’objectif est de proposer des paris à forte
                        probabilité chaque jour.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Combien de pronostics recevais-je par jour&nbsp;?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Selon votre offre, vous recevez entre 1 et 3 pronostics premium par jour,
                        accompagnés d’une analyse claire pour comprendre pourquoi le pari est
                        pertinent.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Les pronostics sont-ils fiables&nbsp;?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Nous privilégions la qualité à la quantité. Les paris sont sélectionnés
                        uniquement lorsque nos indicateurs atteignent un niveau de confiance élevé,
                        ce qui permet de maintenir une performance stable sur le long terme.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>À quelle heure sont envoyés les pronostics&nbsp;?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Les pronostics sont généralement envoyés entre 09h et 13h, afin que vous ayez
                        largement le temps de placer vos paris avant les rencontres du jour.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Que faire si un pari ne passe pas&nbsp;?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>
                        Même les meilleures analyses peuvent rencontrer un mauvais scénario. Nous
                        recommandons toujours une gestion de bankroll stricte pour sécuriser vos
                        gains sur le long terme. Les pertes sont compensées par notre stratégie de
                        sélection régulière et contrôlée.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </Reveal>
            </div>
          </div>
        </section>
        <hr className="border-gray-300 mt-20"/>
      </main>
      <Footer></Footer>
    </div>
  );
}