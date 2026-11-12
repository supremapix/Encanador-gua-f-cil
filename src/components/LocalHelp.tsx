import {COMPANY_DATA} from '../data/company';
export const LocalHelp=({name,slug,locationType,regionOrParent}:{name:string;slug:string;locationType:string;regionOrParent:string})=>{
 const city=locationType==='cidade';const popular=locationType==='vila';
 return <section className="agua-local-help" aria-label={`Orientação para solicitar encanador em ${name}`}>
  <div className="agua-contact-card"><strong>ÁGUA FÁCIL</strong><span>Encanador e desentupimento</span><b>{name}</b><a href={`tel:${COMPANY_DATA.phoneRaw}`}>{COMPANY_DATA.phoneDisplay}</a><a className="agua-button" href={`${COMPANY_DATA.whatsAppUrl}?text=${encodeURIComponent(`Preciso de encanador em ${name}. Posso explicar o problema?`)}`} target="_blank" rel="noopener noreferrer">Consultar atendimento</a></div>
  <div><h2>Antes de chamar encanadores em {name}</h2>
  <p>{city?`Informe o município ${name}, o bairro e a rua. Um nome de bairro pode se repetir em cidades diferentes: o CEP e uma referência de acesso ajudam a equipe a avaliar o deslocamento e a disponibilidade antes de confirmar a visita.`:popular?`${name} é uma referência popular de endereço, vinculada à região de ${regionOrParent}, não uma nova filial. Ao solicitar o encanador, indique também o bairro usado no seu comprovante de endereço e a rua para evitar confusão com nomes semelhantes.`:`Para solicitar encanador em ${name}, Curitiba, descreva o ponto afetado: torneira, registro, descarga, sifão ou tubulação. Diga se a água está vazando ou se deixou de escoar, pois os sinais ajudam a distinguir reparo hidráulico de desentupimento.`}</p>
  <h3>O que informar para um orçamento útil</h3><ul><li>Tipo de imóvel, acesso ao registro e ponto em que surgiu o problema.</li><li>Se o defeito afeta apenas uma peça ou vários pontos da casa.</li><li>Fotos e vídeos, somente quando não houver risco de contato com eletricidade ou água contaminada.</li></ul>
  <p>Em vazamento, feche o registro correspondente se for possível alcançá-lo com segurança. Não misture produtos químicos para desentupir. Em condomínio, avise o responsável antes de interromper água de áreas comuns. Prazo, materiais e valor são combinados após avaliar a necessidade.</p>
  <a href="/guia-de-localidades">Bairros, nomes populares e referências de transporte</a>
  {city&&slug==='fazenda-rio-grande'&&<p>Em Fazenda Rio Grande, Jardim Nitta é uma referência dentro do bairro Estados; Jardim Santarém integra Nações. Informe os dois nomes no pedido. <a href="/guia-de-localidades#fazenda-rio-grande">Veja as fontes municipais.</a></p>}
 </div></section>
};
