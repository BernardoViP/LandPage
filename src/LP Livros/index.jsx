import '../LP Livros/styles.css'
import { Lp } from './pattern/composition'
import {Amor ,Bird ,Garotos ,Labirinto ,Maze ,Merlim ,Deuses ,Sherlock ,Viagem} from "../assets/images"

const LpLivros = [
    {
      image: Amor,
      tittle:"Amor, impossível amor",
      description:"Após seu namorado secreto se mudar para o interior Fernanda não via mais caminho pela frente além de sofrer por amor, porém logo após tentar decifrar um enigma matemático ela estava mesmo sem saber, mudando o rumo de sua vida.", 
    },
    {
        image: Bird,
        tittle:"Bird Box",
        description:"Quatro anos após tudo começar restando poucos sobreviventes, Malorie e seus filhos moram em uma casa abandonada perto do rio na qual ela sonha fugir para um lugar onde sua família poderá viver em segurança através de uma jornada assustadora por 32 quilômetros rio abaixo em apenas um barco a remo e vendados.",  
      },
      {
        image: Garotos,
        tittle:"Dois garotos se beijando",
        description:"Narrando as decepções e felicidades da vida de 2 personagens, Harry e Craig na qual irão participar de um desafio de 32 horas se beijando afim de bater o Livro dos Recordes. A narrativa se encontra no ponto de vista de gerações que morreram em decorrência da aids nesta história baseada em fatos reais.",  
      },
      {
        image: Labirinto,
        tittle:"O labirinto do fauno",
        description:"Ofelia, uma menina de 13 anos que vive na Espanha fascista de 1940 e no qual tem como seus melhores amigos os livros tem a sua frente um mundo mágico e obscuro ao qual enfrentará o horror e os limites entre sonho e realidade.",  
      },
      {
        image: Maze,
        tittle:"Maze runner 1.0:",
        description:"Lembre. Corra. Sobreviva.Estas são as regras do labirinto que Thomas está trancafiado junto de outros jovens iguais a ele. Sem saber seu nome e sem memória alguma eles tentarão sobreviver aos perigos dentro da prisão ao qual eles foram colocados.",  
      },
      {
        image: Merlim,
        tittle:"Merlin, o espelho do destino",
        description:"Para livrar a ilha de Fincayra e o povo que nela habita dos males que virão do Brejo Assombrado, o jovem Merlin se aventura por lugares aterrorizantes enquanto tenta entender sua própria magia ao lado de seus amigos.É possível mudar o próprio destino?",  
      },
      {
        image: Deuses,
        tittle:"Nós, os deuses",
        description:"Após acordar em uma ilha cheia de deuses de todas as religiões, Michael Pinson se vê junto de outras pessoas como escolhidos para serem aprendizes divinos.",  
      },
      {
        image: Sherlock,
        tittle:"Sherlock Holmes, Nuvem da morte",
        description:"Sherlock Holmes aos 14 anos tenta desvendar um mistério após encontrar um cadáver na floresta seguindo o rastro de pistas dadas pelo assassino que pouco a pouco parece conseguir mudar o futuro da Grã- Bretanha.",  
      },
      {
        image: Viagem,
        tittle:"Viagem ao centro da terra",
        description:"Uma viagem na qual Axel e professor Lidenbrock, um geólogo muito estimado, partem para uma aventura a caminho do centro da terra passando pelo vulcão Sneffels.",  
      },
                    
]

export default function LpComposition () {
    return(
        <div className="lp-container">
            <Lp.Header />
            <div className="lp-composition-wrapper">
            {
            LpLivros.map((user, key) => {
            return(
                <Lp.Nav
                key= {key}
                image={user.image}
                name={user.name}
                description={user.description}
            />
            )
})}
            </div>
        </div>
    );
}