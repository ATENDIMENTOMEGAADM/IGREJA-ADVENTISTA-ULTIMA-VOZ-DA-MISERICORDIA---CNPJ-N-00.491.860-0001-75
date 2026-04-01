import React from 'react';
import { CertificateData } from '../types';

const BottomShape = () => (
  <svg className="absolute bottom-0 left-0 w-[250px] h-[30px]" viewBox="0 0 250 30" preserveAspectRatio="none">
    <polygon points="0,30 120,30 100,0 0,0" fill="#1e3a8a" />
    <polygon points="110,30 230,30 210,0 90,0" fill="#f59e0b" />
  </svg>
);

const Watermark = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.08] z-0">
    <img 
      src="https://github.com/ATENDIMENTOMEGAADM/IGREJA-ADVENTISTA-ULTIMA-VOZ-DA-MISERICORDIA---CNPJ-N-00.491.860-0001-75/blob/main/LOGO.png?raw=true" 
      alt="Marca d'água" 
      className="w-[60%] h-[60%] object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

interface Props {
  data: CertificateData;
}

export default function CertificatePreview({ data }: Props) {
  const codigo = `Vs. 1.1-11-2023 Lv${data.livro.padStart(4, '0')}Fl${data.folha.padStart(4, '0')}`;

  return (
    <div id="printable-certificate" className="font-serif text-gray-900">
      {/* Front Page */}
      <div className="a4-page bg-white relative p-[15mm] px-[20mm] box-border flex flex-col">
        <Watermark />
        <div className="content-z flex-grow flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <img 
              src="https://github.com/ATENDIMENTOMEGAADM/IGREJA-ADVENTISTA-ULTIMA-VOZ-DA-MISERICORDIA---CNPJ-N-00.491.860-0001-75/blob/main/LOGO.png?raw=true" 
              alt="Logo Esquerda" 
              className="w-[100px] h-[100px] object-contain flex-shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="text-center flex-grow px-2">
              <h1 className="text-[22px] font-normal tracking-wide mb-1 text-gray-800 whitespace-nowrap">IGREJA ADVENTISTA DA REFORMA</h1>
              <p className="text-[14px] mb-1 text-gray-700">"Anunciando a "Última Voz da Misericórdia""</p>
              <p className="text-[13px] text-gray-700">Igreja Adventista da Reforma</p>
              <p className="text-[13px] text-gray-700">Registro Nº 223 Livro A/1 CNPJ: Nº 00.491.860/0001-75</p>
              <p className="text-[13px] text-gray-700">QNN 33 Area Especial, Ceilândia Norte Brasília - DF</p>
            </div>
            <img 
              src="https://github.com/ATENDIMENTOMEGAADM/IGREJA-ADVENTISTA-ULTIMA-VOZ-DA-MISERICORDIA---CNPJ-N-00.491.860-0001-75/blob/main/LOGO-LAR-E-FAM%C3%8DLIA.png?raw=true" 
              alt="Logo Lar e Família" 
              className="w-[100px] h-[100px] object-contain flex-shrink-0"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title */}
          <h2 className="text-[26px] font-bold text-center tracking-[0.08em] mb-4 mt-2 text-gray-800">CERTIDÃO DE CASAMENTO RELIGIOSO</h2>

          {/* Body Paragraph 1 */}
          <p className="text-justify text-[15.5px] leading-[1.5] mb-4 text-gray-800">
            Certifico, que no Livro <strong>{data.livro}</strong> do Registro de Casamento Religioso desta Igreja, encontra-se registrado na Folha <strong>{data.folha}</strong>, os termos da confirmação do matrimonio dos nubentes: <strong>{data.nubente1Nome.toUpperCase()} & {data.nubente2Nome.toUpperCase()}</strong>.
          </p>

          {/* Body Paragraph 2 */}
          <p className="text-justify text-[15.5px] leading-[1.5] mb-4 text-gray-800">
            Receberam-se em matrimonio sob o regime da comunhão cristã, no dia <strong>{data.dataCasamento}</strong>, no município de <strong>{data.municipioCasamento}</strong>, estado do <strong>{data.estadoCasamento}</strong>, perante o Pastor: <strong>{data.pastorNome.toUpperCase()}</strong>, reconhecido por esta e inscrito sob. o CPF Nº <strong>{data.pastorCpf}</strong>.
          </p>

          {/* Witnesses */}
          <div className="mb-4 text-gray-800 text-justify">
            <p className="text-[15.5px] mb-1 uppercase">AS TESTEMUNHAS CONSTANTES DO TERMO:</p>
            <div className="mb-1">
              <p className="text-[15.5px] leading-[1.5]">
                Primeira Testemunha: <strong>{data.testemunha1Nome.toUpperCase()}</strong>, endereço: <strong>{data.testemunha1Endereco}</strong>, cidade: <strong>{data.testemunha1Cidade}</strong>, estado: <strong>{data.testemunha1Estado}</strong>.
              </p>
            </div>
            <div>
              <p className="text-[15.5px] leading-[1.5]">
                Segunda Testemunha: <strong>{data.testemunha2Nome.toUpperCase()}</strong>, endereço: <strong>{data.testemunha2Endereco}</strong>, cidade: <strong>{data.testemunha2Cidade}</strong>, estado: <strong>{data.testemunha2Estado}</strong>.
              </p>
            </div>
          </div>

          {/* Nubente 1 Box */}
          <div className="border border-gray-800 p-2 px-3 mb-3 relative z-10 bg-transparent">
            <p className="font-bold text-[14px] mb-1 text-gray-800">O NUBENTE</p>
            <p className="text-justify text-[14.5px] leading-[1.4] text-gray-800">
              <strong>{data.nubente1Nacionalidade}</strong>, natural do município de <strong>{data.nubente1NaturalidadeMunicipio}</strong>, estado do <strong>{data.nubente1NaturalidadeEstado}</strong>, nascido em <strong>{data.nubente1DataNascimento}</strong>, estado civil <strong>{data.nubente1EstadoCivil}</strong>, profissão <strong>{data.nubente1Profissao}</strong>, residente e domiciliado na cidade de <strong>{data.nubente1Domicilio}</strong>, estado do <strong>{data.nubente1EstadoDomicilio}</strong>, filho de <strong>{data.nubente1Pai.toUpperCase()}</strong> e <strong>{data.nubente1Mae.toUpperCase()}</strong>.
            </p>
          </div>

          {/* Nubente 2 Box */}
          <div className="border border-gray-800 p-2 px-3 mb-6 relative z-10 bg-transparent">
            <p className="font-bold text-[14px] mb-1 text-gray-800">A NUBENTE</p>
            <p className="text-justify text-[14.5px] leading-[1.4] text-gray-800">
              <strong>{data.nubente2Nacionalidade}</strong>, natural do município de <strong>{data.nubente2NaturalidadeMunicipio}</strong>, estado do <strong>{data.nubente2NaturalidadeEstado}</strong>, nascida em <strong>{data.nubente2DataNascimento}</strong>, estado civil <strong>{data.nubente2EstadoCivil}</strong>, profissão <strong>{data.nubente2Profissao}</strong>, residente e domiciliada na cidade de <strong>{data.nubente2Domicilio}</strong>, estado do <strong>{data.nubente2EstadoDomicilio}</strong>, filha de <strong>{data.nubente2Pai.toUpperCase()}</strong> e <strong>{data.nubente2Mae.toUpperCase()}</strong>.
            </p>
          </div>

          <div className="relative z-10 text-gray-800 text-justify">
            <p className="text-[16px] mb-8">O referido é verdade e dou fé.</p>
            <p className="text-[16px] text-right">{data.emissaoCidade}/{data.emissaoEstadoUf}, {data.emissaoData}.</p>
          </div>

          {/* Footer */}
          <div className="mt-auto relative z-10">
            <div className="flex justify-center mb-4 text-gray-800">
              <div className="text-center w-72">
                <div className="border-t border-gray-800 mb-1"></div>
                <p className="text-[16px]">Pastor</p>
                <p className="text-[16px]">Oficiante</p>
              </div>
            </div>
          </div>
        </div>
        <p className="absolute bottom-[32px] left-0 text-[12px] text-gray-700 z-20">{codigo}</p>
        <BottomShape />
      </div>

      {/* Back Page */}
      <div className="a4-page bg-white relative p-[20mm] box-border flex flex-col">
        <Watermark />
        <p className="absolute bottom-[32px] left-0 text-[12px] text-gray-700 z-20">{codigo}</p>
        <BottomShape />
      </div>
    </div>
  );
}
