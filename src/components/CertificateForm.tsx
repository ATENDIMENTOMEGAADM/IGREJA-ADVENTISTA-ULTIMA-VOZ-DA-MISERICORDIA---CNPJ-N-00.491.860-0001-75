import React from 'react';
import { CertificateData } from '../types';

interface Props {
  data: CertificateData;
  onChange: (data: CertificateData) => void;
}

export default function CertificateForm({ data, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const Input = ({ label, name, type = "text" }: { label: string, name: keyof CertificateData, type?: string }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={data[name]}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Dados da Certidão</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Registro</h3>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Livro" name="livro" />
            <Input label="Folha" name="folha" />
            <Input label="Cidade de Emissão" name="emissaoCidade" />
            <Input label="UF (Ex: TO)" name="emissaoEstadoUf" />
            <div className="col-span-2"><Input label="Data de Emissão" name="emissaoData" /></div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Casamento</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2"><Input label="Data do Casamento" name="dataCasamento" /></div>
            <Input label="Município" name="municipioCasamento" />
            <Input label="Estado" name="estadoCasamento" />
            <Input label="Pastor Oficiante" name="pastorNome" />
            <Input label="CPF do Pastor" name="pastorCpf" />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">O Nubente (Noivo)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2"><Input label="Nome Completo" name="nubente1Nome" /></div>
            <Input label="Nacionalidade" name="nubente1Nacionalidade" />
            <Input label="Naturalidade (Município)" name="nubente1NaturalidadeMunicipio" />
            <Input label="Naturalidade (Estado)" name="nubente1NaturalidadeEstado" />
            <Input label="Data de Nascimento" name="nubente1DataNascimento" />
            <Input label="Estado Civil" name="nubente1EstadoCivil" />
            <Input label="Profissão" name="nubente1Profissao" />
            <div className="col-span-2"><Input label="Domicílio (Cidade, Rua, etc)" name="nubente1Domicilio" /></div>
            <Input label="Estado do Domicílio" name="nubente1EstadoDomicilio" />
            <Input label="Nome do Pai" name="nubente1Pai" />
            <Input label="Nome da Mãe" name="nubente1Mae" />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">A Nubente (Noiva)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2"><Input label="Nome Completo" name="nubente2Nome" /></div>
            <Input label="Nacionalidade" name="nubente2Nacionalidade" />
            <Input label="Naturalidade (Município)" name="nubente2NaturalidadeMunicipio" />
            <Input label="Naturalidade (Estado)" name="nubente2NaturalidadeEstado" />
            <Input label="Data de Nascimento" name="nubente2DataNascimento" />
            <Input label="Estado Civil" name="nubente2EstadoCivil" />
            <Input label="Profissão" name="nubente2Profissao" />
            <div className="col-span-2"><Input label="Domicílio (Cidade, Rua, etc)" name="nubente2Domicilio" /></div>
            <Input label="Estado do Domicílio" name="nubente2EstadoDomicilio" />
            <Input label="Nome do Pai" name="nubente2Pai" />
            <Input label="Nome da Mãe" name="nubente2Mae" />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Testemunhas</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded border">
              <h4 className="font-medium mb-2">1ª Testemunha</h4>
              <Input label="Nome" name="testemunha1Nome" />
              <Input label="Endereço (ex: Assentamento PA VINICIO)" name="testemunha1Endereco" />
              <Input label="Cidade (ex: São Bento do Tocantins)" name="testemunha1Cidade" />
              <Input label="Estado (ex: Tocantins)" name="testemunha1Estado" />
            </div>
            <div className="p-4 bg-gray-50 rounded border">
              <h4 className="font-medium mb-2">2ª Testemunha</h4>
              <Input label="Nome" name="testemunha2Nome" />
              <Input label="Endereço (ex: Assentamento PA VINICIO)" name="testemunha2Endereco" />
              <Input label="Cidade (ex: São Bento do Tocantins)" name="testemunha2Cidade" />
              <Input label="Estado (ex: Tocantins)" name="testemunha2Estado" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
