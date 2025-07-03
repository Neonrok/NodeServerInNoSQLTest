# NodeServerInNoSQLTest
Este repositório é para aprender a criar um servidor node com o No SQL através do mongo DB


# Conecção
Para criar conectar um cluste através do Atlas do mongodb é necessario ciar uma conta lá e criar um cluster.

Depois clicar no butão conect criar um utilizador para aceder a base de dados e seguir os passos de lá

# # Verificar conecção
Para verificar se tudo foi realmente conectado terás de fazer algo parecido com isto:

const uri = process.env.URI;

let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

await client.conect()

o URI é um link representado da seguinte forma
"mongodb+srv://${Name}:${password}@${clustername}/${database}?retryWrites=true&w=majority&appName=${Cluster}"
