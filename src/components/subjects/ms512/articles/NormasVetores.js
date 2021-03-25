import React from 'react';
import Latex from 'react-latex';

export default function NormasVetores(){ return(<>

<h2>
    Normas de Vetores
</h2>


<h3>
    Definição de Norma de Vetor
</h3>

A norma de um vetor em <Latex>{"$\\mathbb{R}^n$"}</Latex> é definida 
por uma função <Latex>{"$||.||\\rightarrow\\mathbb{R}$"}</Latex> que satisfaz as seguintes propriedades:

<ul>
    <li>
        <Latex>{"$||\\mathbf{x}||\\geq 0,\\forall \\mathbf{x}\\in\\mathbb{R}^n$"}</Latex>, 
        e <Latex>{"$||\\mathbf{x}||=0$"}</Latex> se e somente se <Latex>{"$\\mathbf{x}=\\vec{0}$"}</Latex>
    </li>
    <li>
        <Latex>{"$||\\alpha\\mathbf{x}||=|\\alpha|.||\\mathbf{x}||$"}</Latex>, <Latex>{"$\\forall\\alpha\\in\\mathbb{R}$"}</Latex>, <Latex>{"$\\forall\\mathbf{x}\\in\\mathbb{R}^n$"}</Latex>
    </li>
    <li>
        <Latex>{"$||\\mathbf{x}+\\mathbf{y}||\\leq||\\mathbf{x}||+||\\mathbf{y}||$"}</Latex>, <Latex>{"$\\forall\\mathbf{x},\\mathbf{y}\\in\\mathbb{R}^n$"}</Latex>
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