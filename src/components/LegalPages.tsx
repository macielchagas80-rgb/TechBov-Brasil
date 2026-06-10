import { MoveLeft, ShieldAlert, FileText, CheckSquare, ShieldCheck, Compass } from 'lucide-react';
import { CompanyInfo } from '../types';

interface LegalPagesProps {
  type: 'privacy' | 'terms' | 'cookies';
  onBackToHome: () => void;
  companyInfo: CompanyInfo;
}

export default function LegalPages({ type, onBackToHome, companyInfo }: LegalPagesProps) {
  
  const currentDateISO = "10 de Junho de 2026";

  const renderPrivacy = () => (
    <div className="space-y-6" id="privacy-policy-content">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-brand-neon/15 rounded-xl border border-brand-neon/30">
          <ShieldAlert className="w-6 h-6 text-brand-neon" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-black text-white">Política de Privacidade</h1>
          <p className="text-xs text-brand-neon font-mono uppercase tracking-wider">Última atualização: {currentDateISO}</p>
        </div>
      </div>
      
      <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
        A <strong>TechBov Brasil</strong>, neste ato sob responsabilidade jurídica e operacional declarada no rodapé comercial desta plataforma, valoriza e respeita a privacidade de seus usuários, produtores e parceiros rurais. Esta Política de Privacidade descreve de forma clara, objetiva e transparente como coletamos, armazenamos, tratamos e protegemos os seus dados pessoais, em estrita conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
      </p>

      <h2 className="text-lg font-display font-bold text-white pt-4">1. Quais dados podem ser coletados?</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans">
        Durante a sua navegação, cadastro de demonstração e utilização regular de nossos recursos de gestão, os seguintes dados podem ser tratados pelo sistema:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400 font-sans">
        <li><strong>Informações de Contato Individual:</strong> Nome completo, telefone/WhatsApp ativo, endereço de e-mail e mensagens de suporte enviadas.</li>
        <li><strong>Informações da Propriedade Rural:</strong> Nome da fazenda, tamanho aproximado em hectares (quando declarado), município e estado de localização.</li>
        <li><strong>Dados Quantitativos de Criação:</strong> Categorias de animais cadastrados, espécies operacionais (bovinos, suínos, ovinos, ovelhas, cavalos), idades médias e classificações internas de lote.</li>
        <li><strong>Imagens e Fotos dos Animais:</strong> Fotografias enviadas voluntariamente pelo usuário a partir de diferentes ângulos com finalidade exclusiva de processamento do algoritmo de estimativa volumétrica de peso.</li>
        <li><strong>Informações de Manejo Geral:</strong> Fichas de vacinação cadastradas, datas de vermifugação aplicadas, dados sobre alimentação e observações zootécnicas gerais.</li>
        <li><strong>Dados Técnicos de Conexão:</strong> Endereço IP do dispositivo, cookies de navegação essenciais de sessão, pixel tag e ferramentas de análise estatística de comportamento interno.</li>
      </ul>

      <h2 className="text-lg font-display font-bold text-white pt-4">2. Finalidade da Coleta de Dados</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans">
        O tratamento dos dados descritos é fundamentado nas seguintes finalidades operativas e legítimas:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400 font-sans">
        <li>Prestação de atendimento consultivo inicial, triagem de dúvidas e configuração de acesso ao teste gratuito de 30 dias.</li>
        <li>Ativação e manutenção regular de sua conta e banco de dados corporativo do rebanho na nuvem.</li>
        <li>Processamento matemático e visual das imagens enviadas para gerar e exibir a estimativa aproximada de apoio ao manejo zootécnico.</li>
        <li>Melhoria contínua na acurácia do modelo de proporção sob calibração.</li>
        <li>Envio de avisos críticos de datas sanitárias e notificações automáticas de vacinações cadastradas.</li>
        <li>Cumprimento estrito de obrigações fiscais, emitir declarações oficiais e responder a requisições judiciais rurais vigentes no país.</li>
      </ul>

      <h2 className="text-lg font-display font-bold text-white pt-4">3. Compartilhamento de Dados</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans">
        A TechBov Brasil declara expressamente que <strong>não vende, não aluga e não comercializa</strong> dados pessoais ou fotos de rebanhos de seus usuários com terceiros estranhos à nossa operação. O compartilhamento ocorre exclusivamente com fornecedores terceirizados necessários à nossa própria infraestrutura técnica (provedor de hospedagem em nuvem, ferramentas oficiais de chat para suporte por WhatsApp e gateways de pagamento autorizados pelo usuário na contratação do plano).
      </p>

      <h2 className="text-lg font-display font-bold text-white pt-4">4. Direitos do Titular sob a LGPD</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans">
        Você, na qualidade de titular dos dados rurais e pessoais, possui amplo controle garantido por lei. A qualquer momento poderá solicitar:
      </p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400 font-sans">
        <li>Confirmação da existência de tratamento de dados pessoais.</li>
        <li>Acesso completo aos dados de cadastro individuais persistidos.</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados de sua fazenda.</li>
        <li>Eliminação definitiva de dados pessoais ou fotos de animais, mediante simples requisição por escrito em nossos meios de atendimento.</li>
        <li>Revogação do consentimento para tratamento de dados futuros.</li>
      </ul>

      <h2 className="text-lg font-display font-bold text-white pt-4">5. Contato e Canal LGPD</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans text-glow">
        Para exercer seus direitos de privacidade ou esclarecer dúvidas operacionais sobre o tratamento de fotos de seus animais, entre em contato direto pelo e-mail: <strong className="text-brand-neon">{companyInfo.email}</strong>.
      </p>
    </div>
  );

  const renderTerms = () => (
    <div className="space-y-6" id="terms-of-use-content">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-brand-neon/15 rounded-xl border border-brand-neon/30">
          <FileText className="w-6 h-6 text-brand-neon" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-black text-white">Termos de Uso</h1>
          <p className="text-xs text-brand-neon font-mono uppercase tracking-wider">Última atualização: {currentDateISO}</p>
        </div>
      </div>

      <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
        Seja bem-vindo à plataforma <strong>TechBov Brasil</strong>. Ao acessar este ambiente on-line, preencher formulários de conversão, solicitar demonstrações via WhatsApp ou cadastrar dados rurais, você declara estar integralmente ciente e de pleno acordo com as regras contratuais, obrigações de segurança e avisos legais descritos nestes Termos de Uso.
      </p>

      <h2 className="text-lg font-display font-bold text-white pt-4">1. O que é a TechBov Brasil?</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans">
        A TechBov Brasil é uma marca inovadora que fornece interfaces de software (Web App para celulares e painéis corporativos) destinados a apoiar a gestão diária de criações agrícolas. O sistema engloba controle de lotes, cadastro de sanidade, lembretes de vacinação, histórico nutricional individual e um recurso informático pioneiro para <strong>estimativa visual de peso aproximado do animal a partir de fotos</strong> em vários enquadramentos simultâneos.
      </p>

      <h2 className="text-lg font-display font-bold text-white pt-4">2. Diretriz de Transparência de Peso (ESTIMATIVA DE APOIO)</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans text-glow font-semibold text-brand-neon">
        É obrigação do usuário ler e compreender os limites da tecnologia.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400 font-sans">
        <li>A TechBov Brasil não garante, não promete e não chancela pesos absolutos ou 100% exatos sob todas as condições, pois a medição ótica depende de fatores como qualidade das câmeras, distância física do fotógrafo, inclinação do terreno, iluminação do curral e cooperação física do animal.</li>
        <li><strong>Vedações Legais:</strong> Nosso software de estimativa visual é uma ferramenta puramente produtiva e de triagem interna. Ele não substitui a balança oficial física e mecânica homologada pelas autoridades sanitárias ou comerciais em transações rurais legais, negociações fiscais governamentais, certificadoras de exportação ou no abate regulamentado por frigorífico contratual.</li>
        <li>O produtor assume inteira e exclusiva responsabilidade econômica e civil por decisões comerciais tomadas com base em estimativas de peso geradas na rotina.</li>
      </ul>

      <h2 className="text-lg font-display font-bold text-white pt-4">3. Responsabilidade do Usuário pelas Imagens e Cadastros</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans">
        O criador se compromete a preencher as fichas dos lotes de forma idônea, inserindo a raça e idade real do rebanho, para que os algoritmos calibradores funcionem com a melhor taxa de acurácia possível. É estritamente vedada a inserção de imagens de heráldicas alheias, fotos de rebanhos protegidos de terceiros sem autorização expressa, ou inputs contendo material difamatório ou ilegal sob as leis penais brasileiras.
      </p>

      <h2 className="text-lg font-display font-bold text-white pt-4">4. Regras do Teste Grátis de 30 Dias</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans">
        Oferecemos <strong>teste totalmente gratuito e sem faturamento automático por 30 dias corridos</strong> para novos cadastros triados via WhatsApp.
      </p>
      <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-400 font-sans">
        <li>A liberação do login inicial depende da análise consultiva do nosso time de suporte.</li>
        <li>Após o término do prazo de 30 dias, caso tenha interesse em continuar gerindo seus animais de criação pelo celular, o usuário poderá escolher livremente um dos planos descritos no site. Nenhuma contratação é obrigatória ou forçada para efetuar o teste.</li>
      </ul>

      <h2 className="text-lg font-display font-bold text-white pt-4">5. Propriedade Intelectual e Foro Legal</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans">
        A marca registrada 'TechBov Brasil', os logotipos aplicados nas interfaces, os métodos ópticos simuladores de estimativas de peso visual e o design geral do Web App são de patrimônio intelectual único e reservado dos criadores do software. Fica estabelecido o Foro da Comarca de Campo Grande / MS para dirimir quaisquer contendas ou pendências jurídicas derivadas da utilização deste site.
      </p>
    </div>
  );

  const renderCookies = () => (
    <div className="space-y-6" id="cookies-policy-content">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-brand-neon/15 rounded-xl border border-brand-neon/30">
          <CheckSquare className="w-6 h-6 text-brand-neon" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-black text-white">Política de Cookies</h1>
          <p className="text-xs text-brand-neon font-mono uppercase tracking-wider">Última atualização: {currentDateISO}</p>
        </div>
      </div>

      <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
        Este site e o Web App da <strong>TechBov Brasil</strong> utilizam cookies e tecnologias semelhantes (como web beacons e pixels de conversão) para melhorar a sua experiência geral de navegação, garantir a integridade de logins de acesso técnicos rurais e metrificar campanhas de anúncios profissionais.
      </p>

      <h2 className="text-lg font-display font-bold text-white pt-4">1. O que são Cookies?</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans">
        Cookies são pequenos arquivos de texto armazenados no navegador do seu smartphone, tablet ou computador quando você visita uma página na internet. Eles auxiliam o site a se lembrar das suas preferências de idioma, lotes visualizados recentemente e evitam que você precise fazer o login no celular todas as vezes que abrir a TechBov Brasil.
      </p>

      <h2 className="text-lg font-display font-bold text-white pt-4">2. Cookies que Utilizamos</h2>
      <div className="space-y-3 font-sans" id="cookies-category-grid">
        <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
          <p className="text-sm font-bold text-white">A. Cookies Essenciais / Técnicos (Obrigatórios)</p>
          <p className="text-xs text-gray-400">Necessários para que as telas básicas do app se comportem com estabilidade, mantendo sessões ativas com o banco de dados temporário e garantindo a segurança de envio dos formulários de privacidade.</p>
        </div>
        <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
          <p className="text-sm font-bold text-white">B. Cookies de Análise e Desempenho (Analytics)</p>
          <p className="text-xs text-gray-400">Utilizados por ferramentas confiáveis como Google Analytics ou Google Tag Manager para avaliar anonimamente a velocidade de carregamento das seções em diferentes estados agrícolas.</p>
        </div>
        <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
          <p className="text-sm font-bold text-white">C. Cookies de Conversão e Marketing (Anúncios)</p>
          <p className="text-xs text-gray-400">Podemos aplicar Meta Pixel (Facebook Ads) e as tags do Google Ads para medir se o usuário clicou no botão de contato por interesse legítimo no aplicativo e otimizar campanhas de atração no Google.</p>
        </div>
      </div>

      <h2 className="text-lg font-display font-bold text-white pt-4">3. Como gerenciar os Cookies de Navegação</h2>
      <p className="text-sm text-gray-300 leading-relaxed font-sans">
        Você pode livremente recusar ou remover os cookies ativando as configurações de privacidade de seu navegador nativo do celular (como Google Chrome, Apple Safari ou Firefox). Frisamos que ao desabilitar totalmente os cookies essenciais de segurança, partes do painel administrativo de nosso Web App podem perder a fluidez ou apresentar comportamentos instáveis.
      </p>
    </div>
  );

  return (
    <div className="relative py-28 sm:py-32 grid-bg min-h-screen flex flex-col justify-between" id="legal-layout-container">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full relative z-10 flex-grow">
        
        {/* Navigation Return Button block */}
        <div className="mb-8" id="legal-top-navigation">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-brand-neon bg-brand-neon/10 border border-brand-neon/20 px-4 py-2.5 rounded-xl hover:bg-brand-neon/25 transition-all text-glow uppercase cursor-pointer"
          >
            <MoveLeft className="w-4 h-4 text-brand-neon shrink-0" />
            <span>Voltar para o Início</span>
          </button>
        </div>

        {/* Main Content box reading standard */}
        <div className="glass-morphism rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl relative">
          
          {/* Aesthetic background target details */}
          <div className="absolute top-4 right-4 text-brand-neon/20 animate-pulse font-mono text-[9px] uppercase tracking-widest hidden sm:block">
            SaaS Legal Document
          </div>

          {type === 'privacy' && renderPrivacy()}
          {type === 'terms' && renderTerms()}
          {type === 'cookies' && renderCookies()}

          {/* End of Document signature card */}
          <div className="mt-12 pt-8 border-t border-white/5 text-center space-y-3" id="legal-conclusion-footnote">
            <p className="text-xs text-gray-500 font-sans">
              Para esclarecer qualquer ponto dessas diretrizes rurais legais, estamos à disposição em nossos canais declarados de atendimento.
            </p>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-brand-dark bg-brand-neon hover:bg-brand-neon-hover rounded-xl transition-colors box-glow"
            >
              Aceitar e Voltar para Home
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
