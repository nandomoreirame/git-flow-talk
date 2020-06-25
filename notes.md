## O que é o Git Flow?

É um modelo de fluxo de trabalho para projetos que usam Git.
Foi publicado por Vincent Driessen em 2010 (há fucking 10 anos 😱).

## E como funciona?

O repositório possui duas branches principais com uma vida útil infinita:

- master (production)
- develop (staging, homologation, UAT)

Para auxiliar o desenvolvimento paralelo entre os membros da equipe usa-se as branches de apoio.
Essas branches facilitam mapeamento de recursos novos, releases e correções em ambiente de produção.
Diferentemente das branches principais, essas branches sempre têm uma vida útil limitada.

São elas:

- Feature branches
- Release branches
- Hotfix/Bugfix branches

Nota: Cada uma tem um objetivo bem definido e está sujeita a regras ⏤ ex. Quais são as branches de origem e quais devem ser de destino.

### Feature branches

Para funcionalidades novas do sistema usamos as **Feature branches**.

Nota: São apenas para funcionalidades novas (features) e nada além disso, ou seja não são melhorias (improvements), não são correção de bugs (bugfixes ou hotfixes)

1. Branch de origem `develop`
2. Branch de destino `develop`
3. Nomes: qualquer coisa, exceto `master`, `develop`, `release/*` (ou `release-*`), `hotfix/*` (ou `hotfix-*`)
   - Geralmente nome/titulo ou ID da tarefa que o dev pegou pra resolver (F)
   - Se o nome tiver o prefixo `feature/*` ou `feature-*` (F)

### Release branches

No fechamento de versão para produção usamos as **Release branches**.

1. Branch de origem `develop`
2. Branch de destino `develop` e `master`
3. Nomes (Convenção/Sugestão): `release/*` ou `release-*`

### Hotfix branches

Geralmente usamos as **Hotfix branches** quando o bicho tá pegando fogo em produção, bug crítico
estourando direto com o cliente.

1. Branch de origem `master`
2. Branch de destino `develop` e `master`
3. Nomes (Convenção/Sugestão): `hotfix/*` ou `hotfix-*`

### Branches extras (F)

E se você não estiver criando uma funcionalidade nova ou apagando fogo em produção, como funcionaria?

Podemos melhorar implementando:

- Bugfix branches - `bugfix/*`;
- Improvement branches - `improvement/*`;
- Tasks branches - `task/*`;
- Docs branches - `doc/*`;
