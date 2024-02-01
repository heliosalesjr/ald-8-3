'use client'
import React from 'react';
import ReactPlayer from 'react-player';



function MatVideo1() {
    return (
        <div className='max-w-7xl mx-auto py-12'>
          <div className=" p-4 ">
            
    
            <div className="p-4 flex flex-col md:flex-row items-center">
            
              <div className="w-full md:w-1/2 pr-4">
                <div className=" mb-4">
                    <h1 className="text-4xl font-bold text-slate-700">Gráficos de barras, colunas, linhas ou setores e seus elementos</h1>
                </div>
                <h1 className=" text-slate-700 mb-4 pr-8">Os mais diversos tipos de gráficos estão presentes no nosso dia a dia e nos ajudam a organizar dados e demonstrar resultados dos mais diversos tipos. O professor Sandro Curió faz um apanhado dos principais gráficos que utilizamos para representar dados estatísticos, mostrando um exemplo de cada e seus principais elementos.</h1>
              </div>
              <div className="w-full md:w-1/2">
                <ReactPlayer url='https://youtu.be/GDEkkbwvhNg' width="100%" />
              </div>
            </div>
          </div>
        
        </div>
      );
    }

export default MatVideo1