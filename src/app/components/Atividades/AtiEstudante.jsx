import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";

const AtiEstudante = () => {
  return (
    <>
        <div className='pt-8'>
            <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center p-8">
                
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img
                    src="/images/students.jpg"
                    alt="Imagem"
                    className="w-full h-full object-cover rounded-md"
                    />
                </div>

                
                <div className="px-4 md:w-1/2 md:ml-4">
                    <h1 className="text-slate-600 text-2xl md:text-4xl font-bold mb-4">Atribuindo a nota final e individual do aluno</h1>
                    <p className="text-slate-700 py-2">Considerando todas as opções dadas acima, identificamos várias opções para a atribuição de notas no projeto desenvolvido.</p>
                    <p className='py-2 text-slate-700'>Para a atribuição de uma nota final a um aluno, o professor e a professora devem considerar que a maior parte do trabalho é desenvolvida de maneira cooperativa, mas que parte do trabalho elaborada nos artefatos é individual. Então, sugere-se a combinação de notas individuais e coletivas para compor a menção final individual de cada aluno.</p>
                </div>
            </div>

            
        </div>

        <div className='m-4 sm:py-8'>
            <div className="mx-auto max-w-6xl">
            <Accordion variant="shadow ">
                <AccordionItem key="1" aria-label="Accordion 1" title="Avaliação por rubricas" className=''>
                   <p className='py-2'>Amorim, C. Qual a diferença entre Avaliação Diagnóstica, Formativa e Somativa? Jovens Gênios. 19 de Junho de 2021. Disponível {' '}<a 
                    href="https://www.google.com/url?q=https%3A%2F%2Fblog.jovensgenios.com%2Favaliacao-diagnostica-formativa-e-somativa%2F&sa=D&sntz=1&usg=AOvVaw1Fw1ynF-92V17ln-shr9Wy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-sky-700 hover:text-purple-700'>
                        aqui
                    </a>{''}.</p>
                   <p className='py-2'>Bender, W. N. Aprendizagem Baseada em Projetos - Educação Diferenciada para o Século XXI. Porto Alegre: Penso. 2014.</p>
                   <p className='py-2'>Bibiano, B. Autoavaliação: como ajudar seus alunos nesse processo. Nova Escola. 01 de Março de 2010. Disponível {' '}<a 
                    href="https://www.google.com/url?q=https%3A%2F%2Fnovaescola.org.br%2Fconteudo%2F432%2Fautoavaliacao-como-ajudar-seus-alunos-nesse-processo&sa=D&sntz=1&usg=AOvVaw332LgRHpnjJ8akxVK5-pJc" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-sky-700 hover:text-purple-700'>
                        aqui
                    </a>{''}. 

</p>
                   <p className='py-2'>Drumon, K. 5 tipos de avaliação escolar que podem ser aplicados em sala de aula. Somos Educação. 28 de Setembro de 2021. Disponível {' '}<a 
                    href="https://www.google.com/url?q=https%3A%2F%2Fwww.somoseducacao.com.br%2Ftipos-de-avaliacao-escolar-que-podem-ser-aplicados-em-sala-de-aula%2F&sa=D&sntz=1&usg=AOvVaw3IYgdQ4nRuc7lnpmulsCIA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-sky-700 hover:text-purple-700'>
                        aqui
                    </a>{''}. </p>
                   <p className='py-2'>Nascimento, L.N.B; Cabral Neto, J. S. Criando e imaginando por meio da aprendizagem baseada em projetos: uma aplicação no ensino profissionalizante. 2019. Produto educacional (Mestrado Profissional em Ensino Tecnológico) – Instituto Federal de Educação, Ciência e Tecnologia do Amazonas, Campus Manaus Centro, Manaus, 2019. Disponível {' '}<a 
                    href="http://www.google.com/url?q=http%3A%2F%2Frepositorio.ifam.edu.br%2Fjspui%2Fbitstream%2F4321%2F415%2F1%2FCriando%2520e%2520imaginando%2520por%2520meio%2520da%2520aprendizagem%2520baseada%2520em%2520projetos%2520uma%2520aplica%25c3%25a7%25c3%25a3o%2520no%2520ensino%2520profissionalizante_NASCIMENTO-2019.pdf&sa=D&sntz=1&usg=AOvVaw0qFXiw_Gyu9fvA9yHDjg2D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-sky-700 hover:text-purple-700'>
                        aqui
                    </a>{''}.</p>
                   <p className='py-2'>Prova Fácil. Avaliação por rubrica: conheça mais sobre a “avaliação sem notas” e entenda como ela é fundamental no Ensino Híbrido. Disponível {' '}<a 
                    href="https://www.google.com/url?q=https%3A%2F%2Fwww.provafacilnaweb.com.br%2Fblog%2Favaliacao-por-rubrica%2F&sa=D&sntz=1&usg=AOvVaw2x4uE0BnNdCxTMEKggoj5I" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-sky-700 hover:text-purple-700'>
                        aqui
                    </a>{''}.</p>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    </>
    
  );
};

export default AtiEstudante;

