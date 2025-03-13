import Title from '../../../components/title';
import { IoIosRocket } from 'react-icons/io';
import { MdNotes } from 'react-icons/md';

export function Article() {
  return (
    <article>
      <Title text="Vamos Trabalhar Juntos!" icon={IoIosRocket} />
      <div className="max-w-[500px] flex flex-col gap-3 mt-6 mb-6 md:flex-row md:items-center md:gap-10">
        <div className="w-full">
          <div className="md:shadow-[-20px_20px_1px_1px_#070E10] w-[80%] border rounded-lg border-ligth p-6 px-4 flex w-full justify-around flex-col gap-2">
            <MdNotes className="text-md md:text-2xl" />

            <p className="text-sm md:text-lg">
              Estou em busca do meu primeiro emprego como desenvolvedor de
              software, remoto ou presencial
            </p>

            <p className="text-sm md:text-lg">
              Estou aberto para <strong>freelances</strong> ou{' '}
              <strong>trabalhos voluntários</strong>{' '}
            </p>
            <p className="text-sm md:text-lg">
              Caso esteja interessando, mande uma mensagem através deste
              formulário, será um prazer trocar uma idéia
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
