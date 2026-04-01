/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Printer, GripVertical } from 'lucide-react';
import CertificateForm from './components/CertificateForm';
import CertificatePreview from './components/CertificatePreview';
import { CertificateData } from './types';

const initialState: CertificateData = {
  livro: '001',
  folha: '0010',
  nubente1Nome: 'ANTONIO PEREIRA DE ALMEIDA',
  nubente2Nome: 'LUZIA GOMES DA SILVA',
  dataCasamento: '05 de Outubro de 2023',
  municipioCasamento: 'São Bento',
  estadoCasamento: 'Tocantins',
  pastorNome: 'MANOEL NUNES CORTEZ',
  pastorCpf: '533.938.051-34',
  testemunha1Nome: 'MIZAEL SOUSA FERREIRA',
  testemunha1Endereco: 'Assentamento PA VINICIO',
  testemunha1Cidade: 'São Bento do Tocantins',
  testemunha1Estado: 'Tocantins',
  testemunha2Nome: 'HILVANIA RODRIGUES PEREIRA',
  testemunha2Endereco: 'Assentamento PA VINICIO',
  testemunha2Cidade: 'São Bento do Tocantins',
  testemunha2Estado: 'Tocantins',
  nubente1Nacionalidade: 'Brasileiro',
  nubente1NaturalidadeMunicipio: 'Filadelfia',
  nubente1NaturalidadeEstado: 'Tocantins',
  nubente1DataNascimento: '09 de Abril de 1953',
  nubente1EstadoCivil: 'Casado',
  nubente1Profissao: 'Agricultor',
  nubente1Domicilio: 'Marabá, Rua 04 Setor Itacaiúnas',
  nubente1EstadoDomicilio: 'Pará',
  nubente1Pai: 'MANOEL ALVES DE ALMEIDA',
  nubente1Mae: 'MARGARIDA PEREIRA DA SILVA',
  nubente2Nacionalidade: 'Brasileira',
  nubente2NaturalidadeMunicipio: 'Babaçulândia',
  nubente2NaturalidadeEstado: 'Tocantins',
  nubente2DataNascimento: '14 de Maio de 1957',
  nubente2EstadoCivil: 'Casada',
  nubente2Profissao: 'Do lar',
  nubente2Domicilio: 'Marabá, Rua 04 Setor Itacaiúnas',
  nubente2EstadoDomicilio: 'Pará',
  nubente2Pai: 'VITAL MARTINS DA SILVA',
  nubente2Mae: 'ALDERINA GOMES DA SILVA',
  emissaoCidade: 'São Bento',
  emissaoEstadoUf: 'TO',
  emissaoData: '05 de Outubro de 2023'
};

export default function App() {
  const [data, setData] = useState<CertificateData>(initialState);
  const [formWidth, setFormWidth] = useState(450);
  const [isDragging, setIsDragging] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const newWidth = Math.max(300, Math.min(e.clientX, window.innerWidth - 400));
      setFormWidth(newWidth);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md no-print flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">Gerador de Certidão de Casamento Religioso</h1>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-50 transition-colors"
        >
          <Printer size={20} />
          Imprimir / Salvar PDF
        </button>
      </header>

      <main className="flex-grow flex flex-col lg:flex-row overflow-hidden no-print">
        {/* Form Section */}
        <div 
          className="w-full lg:w-auto p-4 overflow-y-auto bg-gray-50 flex-shrink-0"
          style={{ width: isDesktop ? formWidth : '100%' }}
        >
          <CertificateForm data={data} onChange={setData} />
        </div>

        {/* Resizer Handle */}
        <div
          className="hidden lg:flex w-2 bg-gray-300 hover:bg-blue-400 cursor-col-resize items-center justify-center transition-colors flex-shrink-0"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
        >
          <GripVertical size={16} className="text-gray-500" />
        </div>

        {/* Preview Section */}
        <div className="flex-1 p-8 overflow-y-auto bg-gray-200 flex justify-center">
          <div className="scale-[0.6] sm:scale-[0.8] lg:scale-100 transform origin-top">
            <CertificatePreview data={data} />
          </div>
        </div>
      </main>

      {/* Print Only Section */}
      <div className="print-only hidden">
        <CertificatePreview data={data} />
      </div>
    </div>
  );
}
