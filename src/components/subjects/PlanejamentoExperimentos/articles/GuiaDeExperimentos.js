import React from 'react';
import Latex from 'react-latex';

export default function GuiaDeExperimentos(){ return( <>

<h2>
    Checklist de experimento planejado
</h2>

<ol>
    <li>
        Defina os objetivos do experimento
    </li>
    <li>
        Identifique todas as fontes de variação incluindo:
        <ol>
            <li>
                efeitos de tratamentos e seus níveis
            </li>
            <li>
                unidades experimentais
            </li>
            <li>
                efeitos de blocos, efeitos de erro, e covariáveis.
            </li>
        </ol>
    </li>
    <li>
        Escolha uma regra para alocar unidades experimentais aos níveis do tratamento
    </li>
    <li>
        Escolha como serão feitas suas medições (isto é, a variável resposta).
    </li>
    <li>
        Execute uma amostra piloto (testar se experimento funciona, obter informação sobre a variância do erro).
    </li>
    <li>
        Especifique um modelo.
    </li>
    <li>
        Escolha a ferramenta de análise: quais testes fazer, que procedimentos pós-teste
    </li>
    <li>
        Calcule o número de observações ou replicações (“amostras” no jargão aplicado).
    </li>
</ol>

</>)}