# Site institucional — CAU TECH

Aplicação institucional em React, TypeScript e Vite, com páginas independentes via React Router.

## Executar

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Organização

- `src/pages`: páginas por rota;
- `src/components`: layout, marcas, carrossel e componentes compartilhados;
- `src/data/content.ts`: contatos, navegação, serviços e textos estruturados;
- `src/styles/global.css`: tokens visuais e estilos responsivos;
- `public/assets` (SVGs textuais autocontidos, compatíveis com revisão em pull requests): arquivos de marca fornecidos;
- `public/.htaccess`: fallback de SPA para Apache/LiteSpeed.

Edite dados institucionais e contatos em `src/data/content.ts`. Substitua logos mantendo os nomes em `public/assets` (SVGs textuais autocontidos, compatíveis com revisão em pull requests) ou atualize os caminhos nos componentes. A paleta adotada parte das cores fornecidas/observadas da CAU TECH (`#FD6728`, `#102129`, `#333333` e branco) e usa tons complementares documentados no briefing (`#F4F6F7`, `#DCE3E6`, `#C2410C` e `#FFF1EA`); ela não é apresentada como manual oficial da marca.

## Hospedagem e SEO

O build gera uma SPA em `dist`. Em Apache/LiteSpeed, publique todo o conteúdo de `dist`; o `.htaccess` copiado pelo Vite redireciona rotas internas para `index.html`. Em outras plataformas, configure fallback equivalente para `/index.html`.

Título e descrição mudam no cliente por rota. Para prévias sociais específicas por URL e indexação que não execute JavaScript, a hospedagem deverá adicionar prerenderização/SSR. Nenhum domínio canônico foi presumido.

## Formulário

Não há backend. O formulário valida os campos, monta um `mailto:` codificado e também permite copiar a mensagem. Nenhum dado é persistido ou enviado a analytics. Uma integração futura deve substituir essa etapa por um serviço/endpoint seguro, sem credenciais no frontend.

## Pendências reais

- Confirmar se o telefone cadastral `(11) 4829-0544` é o canal comercial desejado; ele não é apresentado como WhatsApp.
- Informar uma URL pública da DASE Imóveis, caso exista.
- Integrar o formulário a um endpoint real, caso o envio direto pelo site seja desejado.
- O anexo disponível da DASE é uma prancha: o site enquadra apenas a assinatura individual da versão 3. Recomenda-se substituí-la futuramente pelo arquivo oficial individual e transparente.
- Validar periodicamente os recursos divulgados da Fortal Pass com a página oficial.
