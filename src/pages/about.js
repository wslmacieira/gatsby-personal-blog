import React from "react"

import Layout from "../components/_Layout/"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor Thiago Marinho de Oliveira"
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Wagner dos Santos Lima, nasci em Itabaiana/SE e atualmente sou desenvolvedor
        com foco em Javascript com a stack (ReactJs | React Native | Node.js)
      </p>


      <p>
        Cursando Analise e desenvolvimento de sistemas pela Cruzeiro do Sul
        atualmente (2020).
      </p>

      <p>
        Cursando GoStack Bootcamp (ReactJS - React Native - Node.js) pela RocketSeat
        atualmente (2020).
      </p>

      <p>Sou muito bem casado e feliz com minha esposa, amo minha família,
         meus filhos e meu casal de yorks.</p>

      <p>
        No meu tempo livre, gosto de ver filmes, ir na igreja, tocar violino
        amo a musica pois ela é a forma de expressar os diversos afetos da alma,
        ataco de master cheff na cozinha fazendo varias gordices para alegrar a todos.
      </p>

      <h2>Habilidades</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>ReactJS | Redux | Flux</li>
      <li>React Native</li>
      <li>NodeJs</li>
      <li>MySQL | Postgres | MongoDB | Redis</li>
      <li>Git</li>
      <li>Docker</li>
      <li>Linux</li>
    </ul>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks />

    </MainContent>
  </Layout>
)

export default AboutPage
