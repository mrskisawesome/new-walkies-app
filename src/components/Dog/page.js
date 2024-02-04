import Head from "next/head";

export default function DogWeekPage() {
  return (
    <div>
      <Head>
        <title>Dog of the Week</title>
      </Head>
      <h2>Dog of the Week</h2>
      <div className="bestdog-container">
        <iframe
          img
          src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVzdCUyMGRvZ3xlbnwwfHwwfHx8Mg%3D%3D.doghouse.co.uk/cdn/shop/products/chuckitamphibiousbumper_900x.png?v=1658488659"
          width="640"
          height="480"
        ></iframe>
      </div>
    </div>
  );
}
