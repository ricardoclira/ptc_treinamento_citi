Documentação Técnica: Sistema de Gestão de Estoque (PTC 26.1)
1. Introdução
Este documento descreve as decisões técnicas e a implementação do sistema de gerenciamento de estoque para uma loja de calçados. O objetivo foi criar uma API robusta para substituir o controle manual, permitindo operações de criação, leitura, atualização e exclusão (CRUD) de produtos.

2. Decisões de Arquitetura e Ambiente
2.1 Banco de Dados Local (PostgreSQL)
Decisão: Inicialmente, o projeto previa o uso de Docker. No entanto, devido a restrições de permissão no ambiente Windows, optei por utilizar o PostgreSQL instalado localmente.

Implementação: Configurei o serviço do Postgres na porta 5432 e ajustei a variável DATABASE_URL no arquivo .env. Essa mudança garantiu que o desenvolvimento não fosse interrompido por falhas de infraestrutura.

2.2 Prisma ORM e TypeScript
Decisão: Utilizar o Prisma como ORM para facilitar a comunicação com o banco de dados sem a necessidade de escrever SQL puro, aproveitando a tipagem forte do TypeScript.

Benefício: Isso reduziu erros de tempo de execução, especialmente ao lidar com tipos numéricos (como preços e tamanhos).

3. Implementação das Funções (Lógica do Código)
A lógica principal foi concentrada no CalcadosController.ts. Abaixo, explico o que cada etapa faz:

A. Criação de Calçados (create)
O que faz: Recebe os dados do produto (nome, marca, preço, etc.) via requisição POST.

Decisão: Implementei uma conversão explícita para Number nos campos preco, tamanho e quantidade_em_estoque. Isso foi necessário porque o corpo da requisição pode vir como String, mas o banco de dados exige Inteiros.

B. Listagem Geral (readAll)
O que faz: Retorna todos os calçados cadastrados.

Identificação: Essencial para que o lojista tenha uma visão macro do estoque.

C. Busca por Tamanho (findBySize) - Diferencial
O que faz: Filtra calçados específicos com base em um parâmetro passado na URL (ex: /calcados/tamanho/42).

Implementação: Utilizei o método findMany do Prisma com a cláusula where. Essa função melhora a experiência do usuário, permitindo buscas rápidas para clientes com necessidades específicas.

D. Atualização (update)
O que faz: Permite alterar o preço ou a quantidade de um item usando o método PATCH.

Lógica: O código identifica o calçado pelo id (parâmetro de rota) e atualiza apenas os campos enviados no corpo da mensagem.

E. Exclusão (delete)
O que faz: Remove permanentemente um produto do banco de dados.

Identificação: Útil para produtos que saíram de linha ou erros de cadastro.

4. Etapas de Desenvolvimento (Workflow)
Modelagem: Definição do model Calcado no schema.prisma.

Migração: Execução do npx prisma migrate dev para criar as tabelas fisicamente no PostgreSQL.

Roteamento: Configuração do arquivo routes.ts para conectar os endereços (URLs) às funções do Controller.

Testes: Validação de cada rota através do Thunder Client, simulando o uso real da loja.

Versionamento: Subida do código para o GitHub, resolvendo conflitos de credenciais e permissões de repositório.

5. Transparência no Uso de IA
Seguindo as diretrizes do CITi, declaro que utilizei a IA Gemini (Google) como ferramenta assistente. A IA foi utilizada para:

Auxiliar no diagnóstico de erros de permissão do Docker.

Orientar a sintaxe correta das funções do Prisma dentro do TypeScript.
