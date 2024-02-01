import React from 'react'

function RecCordelMais() {
    return (
        <div className='pt-8 pb-8 max-w-7xl mx-auto'>
                <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center p-8">
                    
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                        src="/images/cordel2.jpg"
                        alt="Imagem"
                        className="w-full h-full object-cover rounded-md"
                        />
                    </div>
    
                    
                    <div className="px-4 md:w-1/2 md:ml-4">
                        <h1 className="text-slate-700 text-center text-2xl md:text-3xl font-bold mb-4">Para saber mais</h1>
                        <h2 className='text-lg font-semibold text-center  text-slate-800 py-2'>Orientações para fazer um cordel</h2>
                        <p className="text-slate-700 py-2 text-center ">Texto: {' '}
                            <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.artecompapel.com%2Fwp%2Fcomo-fazer-um-cordel%2F&sa=D&sntz=1&usg=AOvVaw1yzn7-IgnDsty0Ek-buvJI" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='underline text-purple-900 hover:text-primary-focus'>
                            Como fazer um cordel
                            </a>
                        </p>
                        <p className="text-slate-700 py-2 text-center ">Texto: {' '}
                            <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.projetocordel.com.br%2Fcomo-escrever-um-cordel.php&sa=D&sntz=1&usg=AOvVaw0nZxJIllgiQ2F3RLIyPIQ3" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='underline text-purple-900 hover:text-primary-focus'>
                            Como escrever um cordel
                            </a>
                        </p>
                        
                        <h2 className='text-lg font-semibold text-center  text-slate-800 py-2'>Exemplos de cordel e matemática</h2>
                        
                        <p className="text-slate-700 py-2 text-center ">Vídeo: {' '}
                            <a href="https://www.youtube.com/watch?v=gSLXFvgTysA" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='underline text-purple-900 hover:text-primary-focus'>
                            Matemática em cordel
                            </a>
                        </p>
                        
                        <p className="text-slate-700 py-2 text-center ">Vídeo: {' '}
                            <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.somatematica.com.br%2Fpoemas%2Fp73.php&sa=D&sntz=1&usg=AOvVaw1cM-Ja4uTo5d2uaYOL3gSA" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='underline text-purple-900 hover:text-primary-focus'>
                            O cordel da matemática
                            </a>
                        </p>
                       
                        
                    </div>
                </div>
    
                
            </div>
      )
    }

export default RecCordelMais