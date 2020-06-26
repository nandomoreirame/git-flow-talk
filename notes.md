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
- Hotfix branches

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
3. Nomes (convenção): `release/*` ou `release-*`

Nota: Além de fazer o merge para develop e master é aconselhável que se gere uma tag para essa release, de preferencia usando Versionamento Semantico (https://semver.org/)

### Hotfix branches

Geralmente usamos as **Hotfix branches** quando o bicho tá pegando fogo em produção, bug crítico
estourando direto com o cliente.

1. Branch de origem `master`
2. Branch de destino `develop` e `master`
3. Nomes (convenção): `hotfix/*` ou `hotfix-*`

### Algumas questões 🤔

- 🤔 E se eu não estiver criando nenhuma funcionalidade nova?
- 🤔 E se eu não estiver corrigindo um bug em produção?

Podemos melhorar implementando:

- Bugfix branches: `bugfix/*`
- Improvement branches: `improvement/*` ou `enhancement/*`
- Tasks branches: `task/*` ou `chore/*`
- Docs branches: `doc/*`
- CI/CD branches: `ci/*` ou `cd/*`
- etc.

### Ferramentas

### Links úteis

### Conclusão

Vale mesmo a pena?
