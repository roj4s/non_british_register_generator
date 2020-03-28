# Gerador Registro de Ponto Não-Britanico

Registro britãnico é uma expressão utilizada para se referir a registros de
marcações de horario de trabalho que seguem um padrão fixo. Por exemplo
a marcação sempre compeça as 7h, pausa para almoço das 11h ate 12h e tem
marcação final as 17h.

Esse sistema web, muito simples, gera registros que não seguem o padrão do
registro britãnico. Ele foi desenvolvido utilizando o framework de
desenvolvimento Web ReactJs. Para fazer deploy é utilizado o docker.

## Deploy

Primeiro construir o container:

```
$ docker build -t app
```

Depois rodar o container:

```
$ docker run -v 80:5000 -t app
```

Agora o site esta disponivel em localhost. ;)
