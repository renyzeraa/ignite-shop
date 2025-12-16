# Ignite Shop 🏪

Uma loja de e-commerce moderna construída com Next.js, integrando o Stripe para processamento de pagamentos. O projeto demonstra boas práticas de desenvolvimento web, otimização de performance e experiência do usuário.

## 📋 Sobre o Projeto

Ignite Shop é uma aplicação de e-commerce totalmente funcional que permite aos usuários:

-   **Visualizar produtos** - Catálogo dinâmico integrado com Stripe Products
-   **Detalhes do produto** - Página dedicada com informações completas
-   **Checkout seguro** - Integração com Stripe para processamento de pagamentos
-   **Confirmação de compra** - Página de sucesso com detalhes da transação
-   **SEO otimizado** - Meta tags, Open Graph e estruturação semântica

## 🎯 Recursos Implementados

### Next.js Features

-   **App Router** - Roteamento moderno com suporte a layouts aninhados
-   **Server Components** - Componentes React renderizados no servidor para melhor performance
-   **API Routes** - Endpoints serverless para integração com Stripe
-   **Image Optimization** - Componente `next/image` para otimização automática de imagens
-   **Dynamic Routes** - Rotas dinâmicas para páginas de produtos
-   **Metadata API** - Geração dinâmica de meta tags para SEO
-   **Static Generation & ISR** - Pré-renderização estática com revalidação incremental

### Arquitetura

```
src/
├── app/                 # App Router pages e layouts
├── api/                 # API routes e integrações
├── components/          # Componentes React reutilizáveis
├── lib/                 # Utilitários e helpers
└── assets/              # Imagens e recursos estáticos
```

## 🛠️ Tecnologias Utilizadas

| Tecnologia       | Descrição                                               |
| ---------------- | ------------------------------------------------------- |
| **Next.js 15**   | Framework React com SSR, SSG e otimizações              |
| **React 19**     | Biblioteca UI declarativa                               |
| **TypeScript**   | Tipagem estática para maior segurança                   |
| **Tailwind CSS** | Framework CSS utilitário                                |
| **Stripe API**   | Processamento de pagamentos e gerenciamento de produtos |
| **ESLint**       | Linting e qualidade de código                           |
| **PostCSS**      | Pós-processamento de CSS                                |

## 🎨 Design

O design completo do projeto está disponível no Figma:

👉 [Abrir Design no Figma](https://www.figma.com/design/GiNk7zreLz6wBr2yldzR6d/Ignite-Shop-%E2%80%A2-Projeto-React--Copy-?node-id=10340-1359&t=D2CvZwu0GKZRtTFc-0)

O projeto implementa otimizações SEO:

-   **Meta tags dinâmicas** por página
-   **Open Graph** para compartilhamento social
-   **Estruturação semântica** com HTML5
-   **URLs amigáveis** e hierarquia clara
-   **Imagens otimizadas** com atributo alt

<img width="1815" height="868" alt="Image" src="https://github.com/user-attachments/assets/7e2e4eb3-d0e9-4cd0-ae9f-e15b12039d92" />

<img width="1288" height="870" alt="Image" src="https://github.com/user-attachments/assets/86a1e9b1-cfb2-48d5-a08a-28bd31ff8d74" />

<img width="1266" height="789" alt="Image" src="https://github.com/user-attachments/assets/42df8df4-c2a6-44ec-8f6f-a8ccb42f9913" />

## 🚀 Começando Localmente

### Pré-requisitos

-   **Node.js 18+** instalado
-   **npm** ou **yarn**
-   **Conta Stripe** (necessária para a integração)

### 1. Criar Conta na Stripe

Antes de começar, você precisa criar uma conta na [Stripe](https://stripe.com):

1. Acesse [https://stripe.com](https://stripe.com)
2. Clique em **"Sign up"**
3. Complete o cadastro com seus dados
4. Após verificação, acesse o **Dashboard**
5. Vá para **Developers > API Keys**
6. Copie suas chaves:
    - (Publishable Key)
    - (Secret Key)

### 2. Configurar Variáveis de Ambiente

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/ignite-shop.git
cd ignite-shop
```

Copie o arquivo de exemplo:

```bash
cp .env.example .env.local
```

Edite `.env.local` e adicione suas chaves Stripe:

```env
STRIPE_PUBLIC_KEY=pk_test_seu_publishable_key
STRIPE_SECRET_KEY=sk_test_seu_secret_key

// colocar tambem a url do projeto

NEXT_URL=http://localhost:3000
```

### 3. Instalar Dependências

```bash
npm install
# ou
yarn install
```

### 4. Executar Servidor de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Scripts Disponíveis

```bash
npm run dev       # Inicia servidor de desenvolvimento
npm run build     # Cria build de produção
npm start         # Inicia servidor em produção
npm run lint      # Executa linting do código
```

## 🔄 Fluxo da Aplicação

```
┌──────────────────────────────────────────────────────────┐
│                    Home Page                              │
│  (Listagem de produtos do Stripe)                         │
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│              Página do Produto                             │
│  (Detalhes completos + Botão de compra)                  │
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│           Checkout Stripe (Modal/Redirect)                │
│  (Formulário de pagamento seguro)                         │
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│              Página de Sucesso                             │
│  (Confirmação com detalhes do pedido)                    │
└──────────────────────────────────────────────────────────┘
```

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Se você tiver alguma dúvida ou sugestão, entre em contato e sinta-se à vontade para contribuir !

<img align="left" src="https://avatars.githubusercontent.com/renyzeraa?size=100">

Feito por [Renan L. Silva](https://github.com/renyzeraa)! <br>
🛠 Dev. Frontend <br>
📍 Santa Catarina - Brasil <br>

<a href="https://www.linkedin.com/in/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="20"></a>&nbsp;
<a href="mailto:renansilvaytb@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="20"></a>&nbsp;
<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="renan_s#7826" alt="Discord Badge" height="20"></a>&nbsp;
<a href="https://www.github.com/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="20"></a>&nbsp;

<br clear="left"/>
