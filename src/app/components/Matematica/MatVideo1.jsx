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
                    <h1 className="text-4xl font-bold text-slate-700">Porcentagem</h1>
                </div>
                <h1 className=" text-slate-700 mb-4 pr-8">Para falar sobre porcentagem a professora  ngela traz um pouco de história da matemática e mostra as diversas formas de representação da porcentagem, além de trazer exemplos de como encontrar a porcentagem de um número. </h1>
              </div>
              <div className="w-full md:w-1/2">
                <ReactPlayer url='https://youtu.be/P3YIiKk0d-M' width="100%" />
              </div>
            </div>
          </div>
        
        </div>
      );
    }

export default MatVideo1