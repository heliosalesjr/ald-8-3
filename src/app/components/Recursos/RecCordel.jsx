import React from 'react'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";

function RecCordel() {
    return (
        <>
            <div className='pt-8 pb-8 bg-primary mt-8'>
                <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center p-8">
                    
                    <div className="px-4 md:w-1/2 md:ml-4">
                            <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">Poema de Cordel</h1>
                            <p className="text-white py-2 pb-6">A literatura de cordel é um gênero literário popular típico do interior do Nordeste. São composições em versos rimados, caracterizadas pela linguagem informal, pela oralidade e pela musicalidade.</p>
                            <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">Sugestão de atividade</h1>
                            <p className='py-2 text-white'>Entre os diferentes temas explorados na parte 4 do Livro do Estudante estão descontos e aumentos, pontos a partir dos quais exercitam-se tópicos de matemática ao mesmo tempo que se estimula o hábito da pesquisa e da negociação. Nossa sugestão é que os estudantes elaborem um poema de cordel sobre esses temas, afirmando especialmente a importância de pesquisar e comparar preços.</p>
                    </div>
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                        src="/images/cordel1.jpeg"
                        alt="Imagem"
                        className="w-full h-full object-cover rounded-md"
                        />
                    </div>
    
                    
                    
                </div>

                <div className='py-8 max-w-5xl mx-auto'>
                    <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-3">
                        
                        
                        <div className='bg-white p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                            <div className="flex items-end justify-end">
                                <TbCircleNumber1 className="text-4xl text-primary-focus mb-4" />
                            </div>
                            
                            <p className='text-sm text-slate-600 text-left pb-4'>Em dupla, os alunos criam um poema de cordel sobre a importância de negociar, pesquisar e comparar preços, mantendo- -se atento a aumentos ou cobranças exageradas. </p>
                        </div>

                        <div className='bg-white p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                            <div className="flex items-end justify-end">
                                <TbCircleNumber2  className="text-4xl text-primary-focus mb-4" />
                            </div>
                            
                            <p className='text-sm text-slate-600 text-left pb-4'>A elaboração desta atividade visa potencializar as relações entre a Matemática e a Língua Portuguesa e favorecer a criatividade, a capacidade de expressão oral e a colaboração entre os estudantes.</p>
                        </div>

                        <div className='bg-white p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                            <div className="flex items-end justify-end">
                                <TbCircleNumber3 className="text-4xl text-primary-focus mb-4" />
                            </div>
                            
                            <p className='text-sm text-slate-600 text-left'>Oriente-os quanto à elaboração do texto e, caso julgue necessário, trabalhe em conjunto com o(a) professor(a) de Língua Portuguesa para esclarecer dúvidas e fornecer mais informações sobre essa forma de poesia popular.</p>
                        </div>

                        
                        
                    </div>
                </div>
                
             </div>  
        
        </>
      )
    }

export default RecCordel