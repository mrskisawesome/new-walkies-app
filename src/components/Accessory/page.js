import Head from "next/head";

export default function AccessoryPage() {
  return (
    <div>
      <Head>
        <title>Accessory of the Week</title>
      </Head>
      <h2>Accessory of the Week</h2>
      <div className="accessory-container">
        <iframe
          src="https://www.doghouse.co.uk/cdn/shop/products/chuckitamphibiousbumper_900x.png?v=1658488659"
          width="640"
          height="480"
        ></iframe>
      </div>
    </div>
  );
}
