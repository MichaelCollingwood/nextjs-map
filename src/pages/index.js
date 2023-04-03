import Head from 'next/head';

import Layout from '@components/Layout';
import Map from '@components/Map';

const DEFAULT_CENTER = [50.416916500307856, -5.088767740771148]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js Leaflet Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Next.js Leaflet Starter
      </h1>

      <Map width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={DEFAULT_CENTER}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        )}
      </Map>
    </Layout>
  )
}
