import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'
import Card from '../components/card'
import CoffeeStore from '../data/coffee-stores.json'

export async function getStaticProps(context) {

  const data = CoffeeStore
  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}



export default function Home(props) {
  console.log("prps", props);
  const handleOnbannerButtonClick = () => {
    console.log("Banner button");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Лучший кофе в Екатеринбурге</title>
        <meta name="description" content="Лучший кофе в Екатеринбурге" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
        <Banner buttonText="Посмотреть кофейню поблизости" handleOnClick={handleOnbannerButtonClick}/>
        <div className={styles.heroImage}>
          <Image  src="/static/coffee-shop.png" width={700} height={400}/>
        </div>
        
        <div className={styles.cardLayout}>
          {props.data.map(CoffeeStore => {
            return (
              <Card
              key={CoffeeStore.id} 
              name={CoffeeStore.name} 
              imgUrl={CoffeeStore.imgUrl} 
              href={`/coffee-store/${CoffeeStore.id}`}
              className={styles.card}
            />
          )})}          
        </div>
      </main>

      
    </div>
  )
}
