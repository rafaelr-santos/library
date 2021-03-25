import React from 'react';
import Latex from 'react-latex';

export default function NormasMatrizes(){ return(<>

<h2>
    Normas de Matrizes
</h2>


<h3>
    Definição de Norma de Matriz
</h3>

A norma de uma matriz em <Latex>{"$\\mathbb{R}^{n\\times n}$"}</Latex> é definida 
por uma função <Latex>{"$||.||\\rightarrow\\mathbb{R}$"}</Latex> que satisfaz as seguintes propriedades:

<ul>
    <li>
        <Latex>{"$||A||> 0$"}</Latex> se <Latex>{"$A\\neq\\mathbf{0}$"}</Latex> e <Latex>{"$||A||= 0$"}</Latex> se e somente se <Latex>{"$A=\\mathbf{0}$"}</Latex>
    </li>
    <li>
        <Latex>{"$||\\alpha A||=|\\alpha|.||A||$"}</Latex>, <Latex>{"$\\forall\\alpha\\in\\mathbb{R}$"}</Latex>, <Latex>{"$\\forall\\mathbf{x}\\in\\mathbb{R}^n$"}</Latex>
    </li>
    <li>
        <Latex>{"$||A+B||\\leq||A||+||B||$"}</Latex>
    </li>
    <li>
        <Latex>{"$||AB||\\leq||A||.||B||$"}</Latex>
    </li>
</ul>


<h3>
    Tipos de Normas
</h3>

<ul>
    <li>
        Norma-1 : <Latex>{"$||\\mathbf{x}||_{1}=\\sum^{n}_{i=0}|x_i|$"}</Latex>
    </li>
    <li>
        Norma-2 (Euclideana) : <Latex>{"$||\\mathbf{x}||_{2}=\\sqrt{\\sum^{n}_{i=0}|x_i|^2}$"}</Latex>
    </li>
    <li>
        Norma-p : <Latex>{"$||\\mathbf{x}||_{p}=\\sqrt[p]{\\sum^{n}_{i=0}|x_i|^p}$"}</Latex>
    </li>
    <li>
        Norma infinita : <Latex>{"$||\\mathbf{x}||_{\\infty}=\\max_{1\\leq i\\leq n}\{x_i\}$"}</Latex>
    </li>
</ul>

</>)}