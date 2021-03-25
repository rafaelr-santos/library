import React from 'react';
import Latex from 'react-latex';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

export default function TeoremaDeBayes(){ return(<>

<h2>
    Teorema de Bayes
</h2>

É definido por:

<Latex displayMode={true}>{'$$ '+
    'P(A|B)=\\frac{P(A \\cap B)}{P(B)}'+
    '\\stackrel{P(A \\cap B) = P(B \\cap A)}{\\Leftrightarrow} '+
    'P(A)P(B|A)=P(B)P(A|B) '+
    '\\Leftrightarrow ' +
    'P(B|A)=\\frac{P(A|B)}{P(A)}P(B)'+ 
'$$'}</Latex>


Pela lei da probabilidade total temos que:

<Latex displayMode={true}>{'$$ '+
    'P(B|A)=\\frac{P(A|B)}{P(A)}P(B)'+
    '\\Rightarrow ' +
    'P(B_k|A)=\\frac{P(A|B)}{\\sum^{\\# B}_{i=0}P(A|B_i)P(B_i)}P(B_k)' +
'$$'}</Latex>

<br />

<h3>
    Nomenclaturas dos Termos do Teorema de Bayes
</h3>

<ul>
    <li>
        <Latex>{'$P(A|B)$'}</Latex> é chamado de <u>verossimilhança</u> de A dado B
    </li>
    <li>
        <Latex>{'$P(B)$'}</Latex> é chamado de <u>priori</u>
    </li>
    <li>
        <Latex>{'$P(B|A)$'}</Latex> é chamado de <u>posteriori</u>
    </li>
</ul>

<br />

Podemos interpretar o teorema de bayes como um mecanismo de atualização/aprendizado/refinamento de probabilidades.
Antes, tinhamos uma probabilidade <Latex>{'$P(B)$'}</Latex> (priori), mas após uma nova informação (A), 
temos uma probabilidade refinada <Latex>{'$P(B|A)$'}</Latex> (posteriori).

<br />

<b>Exemplo :</b> Seja <Latex>{'$X$'}</Latex> o número de sucessos em <Latex>{'$X_1 \\dots X_n $'}</Latex> lançamentos e
x tem  probabilidade <Latex>{'$\\theta$'}</Latex> ou seja <Latex>{'$X_i\\sim Bernoulli(\\theta)$'}</Latex> 
e <Latex>{'$X\\sim Binomial(n,\\theta)$'}</Latex>. Neste caso, <Latex>{'$P(A|B)\\sim Binomial(n, \\theta)$'}</Latex>, 
mas se supormos que, a priori,  <Latex>{'$\\theta\\sim Beta(p, q)$'}</Latex>, podemos usar o teorema de bayes para 
calcular a distribuição a posteriori de <Latex>{'$\\theta$'}</Latex>, mas antes vamos usar a lei da probabilidade total
para calcular <Latex>{'$P(A)$'}</Latex>

<Latex displayMode={true}>{'$$ '+
    'P(x) = \\int^{1}_{0}\\binom{n}{x}\\theta^{x}(1-\\theta)^{n-x}\\frac{1}{B(p,q)}\\theta^{p-1}(1-\\theta)^{q-1}d\\theta='+
    '\\frac{\\binom{n}{x}}{B(p,q)}\\int^{1}_{0}\\theta^{x+p-1}(1-\\theta)^{n-x+q-1}d\\theta='+
    '\\frac{\\binom{n}{x}}{B(p,q)}B(x+p,n-x+q)'+
'$$'}</Latex>

Agora vamos usar o teorema de bayes

<Latex displayMode={true}>{'$$ '+
    'P(\\theta|x)=\\frac{P(x|\\theta)}{P(x)}P(\\theta)='+ 
    '\\frac{\\binom{n}{x}\\theta^{x}(1-\\theta)^{n-x}}{\\frac{\\binom{n}{x}}{B(p,q)}B(x+p,n-x+q)}\\frac{1}{B(p,q)}\\theta^{p-1}(1-\\theta)^{q-1}='+
    '\\frac{\\theta^{x+p-1}(1-\\theta)^{n-x+q-1}}{\\frac{\\binom{n}{x}}{B(p,q)}B(x+p,n-x+q)}='+
'$$'}</Latex>

Ou seja, <Latex>{'$P(\\theta|x)\\sim B(x+p, n-x+q)$'}</Latex>


</>)}