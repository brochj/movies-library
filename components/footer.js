import Link from 'next/link'
import Container from './container'
import { BLOG_NAME } from '../lib/constants'

export default function Footer() {
  return (
    
<footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
        <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
            <li className="w-full md:w-1/2 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-gray-500 font-bold dark:text-gray-200 text-md uppercase mb-4">
                        Filmes
                    </h2>
                    <ul>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/acao">
                                Ação
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/animacao">
                                Animação
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/aventura">
                                Aventura
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/biografia">
                                Biografia
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/comedia">
                                Comédia
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/crime">
                                Crime
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/documentario">
                                Documentário
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/drama">
                                Drama
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/fantasia">
                                Fantasia
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/faroeste">
                                Faroeste
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/ficcao-cientifica">
                                Ficção Científica
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/guerra">
                                Guerra
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/historia">
                                História
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/misterio">
                                Mistério
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/musical">
                                Musical
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/romance">
                                Romance
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/suspense">
                                Suspense
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="/filmes/genero/terror">
                                Terror
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            {/* <li className="w-full md:w-1/2 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Contacts
                    </h2>
                    <ul>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="#">
                                Github
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="#">
                                Facebook
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="#">
                                Twitter
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="#">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="w-full md:w-1/2 lg:w-1/3"> */}
                {/* <div className="text-center">
                    <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Customization
                    </h2>
                    <ul>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="#">
                                Settings
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="#">
                                Themes
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="#">
                                Plugins
                            </a>
                        </li>
                        <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                            <a href="#">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </li> */}
        </ul>
    </div>
</footer>

  )
}
// export default function Footer() {
//   return (
//     <footer className="bg-gray-500 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600">
//       <Container>
//         <div className="py-16 flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 lg:flex lg:justify-center">
//             <Link href={'/'}>
//               <a>
//                 <h3 className="dark:text-gray-200 text-4xl lg:text-5xl font-bold text-center  mb-10 lg:mb-0">
//                   { BLOG_NAME }
//                 </h3>
//               </a>
//             </Link>
//           </div>
//           <div className="flex justify-center lg:w-1/2">
//               <a
//                 href="#"
//                 className="mx-3 bg-black dark:bg-white hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white border border-black text-white dark:text-black font-bold py-3 px-12 lg:px-8 duration-300 transition-colors"
//               >
//                 Voltar para o Topo
//               </a>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   )
// }
