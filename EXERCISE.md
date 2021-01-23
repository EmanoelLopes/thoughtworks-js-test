## Exercício: Reserva de Hotel

Uma rede de hotéis do Rio de Janeiro gostaria de criar uma plataforma digital de reservas. A rede é composta por três
hotéis: Parque das flores, Jardim Botânico e Mar Atlântico. Cada hotel tem taxas diferenciadas para dia de semana ou
final de semana, incluindo taxas específicas para participantes do programa de fidelidade. Adicionalmente, cada hotel
tem uma classificação, indicando a excelência do serviço.

Parque das flores possui uma classificação 3 e suas taxas de dia de semana são R$110 para clientes normais e R$80 para
participantes do programa de fidelidade. As taxas de final de semana são respectivamente R$90 e R$80 para clientes
normais e participantes do programa de fidelidade.
Jardim Botânico possui uma classificação 4 e suas taxas de dia de semana são R$160 para clientes normais e R$110 para
participantes do programa de fidelidade. As taxas de final de semana são respectivamente R$60 e R$50 para clientes
normais e participantes do programa de fidelidade.
Mar Atlântico possui uma classificação 5 e suas taxas de dia de semana são R$220 para clientes normais e R$100 para
participantes do programa de fidelidade. As taxas de final de semana são respectivamente R$150 e R$40 para clientes
normais e participantes do programa de fidelidade.



Hotel


Classifi.


Dia de semana

(regular)


Dia de semana

(fidelidade)


Fim de semana

(regular)


Fim de semana
(fidelidade)

Parque das flores


3


R$110


R$80


R$90


R$80

Jardim Botânico


4


R$160


R$110


R$60


R$50

Mar Atlântico


5


R$220


R$100


R$150


R$40



Escreva um programa para encontrar o hotel mais barato. A entrada do programa será uma sequência de datas para um
cliente participante ou não do programa de fidelidade. Utilize "Regular" para denominar um cliente normal e "Fidelidade"
para um cliente participante do programa de fidelidade. A saída deverá ser o hotel disponível mais barato e em caso de
empate, o hotel com a maior classificação deverá ser retornado.

Formato da entrada:

<tipo_do_cliente>: <data1>, <data2>, <data3>, …

        Formato da saída:

        <nome_do_hotel_mais_barato>



          Exemplos:

          Entrada 1:

          Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)

          Saída 1:

          Parque das flores



          Entrada 2:

          Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)

          Saída 2:

          Jardim Botânico



          Entrada 3:

          Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)

          Saída 3:

          Mar Atlântico
