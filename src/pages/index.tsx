import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>ig.neeews | página inicial</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, bem-vindo</span>

          <h1>
            Novidades sobre o mundo <span>React</span>.
          </h1>

          <p>
            Tenha acesso a todos os artigos <br />
            <span>por {product.amount} mês</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src="/images/avatar.svg" width={336} height={521} alt="Garota corando" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KDJTLHJVf1eJPBlOjRKWAmY', {
    expand: ['product'],
  });

  const product = {
    priceID: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
