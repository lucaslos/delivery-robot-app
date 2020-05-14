# Comandos

## yarn run dev
Inicia um servidor de desenvolvimento em http://localhost:8000

## yarn run serve
Inicia um servidor da versão em produção da pasta [/dist](/dist)

## yarn run build
Gera os arquivos de produção na pasta [/dist](/dist)

---

# Requisições da API

Para alterar o endpoint e o caminho das requisições, altere o arquivo [/app.config.json](/app.config.json);

## getDomain

### parâmetros

```
{
  org_name: string;
}
```
### resposta esperada

Caso requisição seja bem sucedida:
```
{
  status: true,
  data: {
    domain: org.jestor.com.br
  }
}
```

Em caso de erro:
```
{
  status: true,
  data: {
    domain: '' | false | null
  }
}

// ou

{
  status: false
}
```

## creteAccount

### parâmetros

```
{
  email: string;
  whatsapp: string;
  password: string;
  name: string;
  plan: 'simple' | 'entreprenuer' | 'pro';
  org_name: string;
  org_category: string;
  org_staff_size: string;
  org_city: string;
  domain: string;
  org_segmentation: string;
}
```
### resposta esperada

Caso requisição seja bem sucedida:
```
{
  status: true
}
```

Em caso de erro:
```
{
  status: false
}
