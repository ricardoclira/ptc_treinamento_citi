Documentação Técnica: Desafio de Desenvolvimento PTC 26.1

1. Resumo do Projeto
Este projeto se baseia no desenvolvimento de um sistema de gerenciamento de estoque para uma loja de calçados (CRUD). A solução foi construída utilizando Node.js, TypeScript, Express e Prisma ORM, garantindo uma gestão eficiente e digitalizada de produtos.
2. Decisões de Ambiente e Configuração
 Durante o desenvolvimento do sistema tive que substituir o Docker pelo PostgreSQL localmente. Ao tentar executar o Docker Installer, foram encontrados erros de permissão de sistema. Para garantir a entrega do desafio no prazo, escolhi por configurar o banco de dados diretamente na máquina local e ajustar a DATABASE_URL no arquivo .env.
3. Implementação do CRUD (CalcadosController)
O controlador principal foi estruturado para gerenciar as quatro operações fundamentais:
Create (POST): Permite o cadastro de novos calçados
Read (GET): Implementei a listagem total de calçados para obter uma visão geral do estoque.
Update (PATCH): Configurei a atualização baseada no ID do produto, focado principalmente na alteração de preço e quantidade em estoque.
Delete (DELETE): Função para remoção de produtos, identificando o registro pelo ID único.
4. Diferencial Implementado
Como um diferencial para a avaliação, implementei a funcionalidade de Busca por Tamanho (GET /calcados/tamanho/:tamanho). Esta função utiliza a cláusula where do Prisma para filtrar rapidamente os calçados, demonstrando a capacidade de criar consultas personalizadas para melhorar a experiência do usuário final.

5. Tecnologias Utilizadas
Node.js e TypeScript -- Ambiente de execução e tipagem forte para o back-end.    
Prisma ORM -- Interface de comunicação com o banco de dados PostgreSQL.
Express -- Gerenciamento de rotas e requisições HTTP.
Thunder Client -- Testes de API e validação de rotas.

6. Uso de Inteligência Artificial
Conforme o item 3 do PDF, declaro que utilizei o Gemini como assistente durante o processo. O seu uso foi fundamental para:
Diagnosticar o erro de permissão do Docker e sugerir a migração para o banco local.
Auxiliar na estruturação dos métodos do Controller seguindo a sintaxe do Prisma.
Ajudar no debug de erros de conexão (Connection refused).
A ferramenta foi utilizada para acelerar a resolução de problemas técnicos, enquanto a lógica de negócio e a organização do código foram conduzidas por mim.
